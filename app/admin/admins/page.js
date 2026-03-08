"use client";
import { useState, useEffect, useRef } from "react";
import { AdminLayout } from "../page";
import "../../styles/admin-users.css";

const DEFAULT_AVATAR = "https://ui-avatars.com/api/?background=0D1117&color=00D4AA&bold=true&size=128";

export default function AdminsPage() {
  const [admins,   setAdmins]   = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [toast,    setToast]    = useState("");
  const [modal,    setModal]    = useState(null); // "add" | "edit" | "delete"
  const [selected, setSelected] = useState(null);
  const [form,     setForm]     = useState({ name:"", email:"", password:"", confirmPassword:"", avatar:"" });
  const [saving,   setSaving]   = useState(false);
  const [showPw,   setShowPw]   = useState(false);
  const fileRef = useRef();

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3500); };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setAdmins((data.users || []).filter(u => u.role === "admin"));
    } catch { }
    setLoading(false);
  };

  const openAdd = () => {
    setForm({ name:"", email:"", password:"", confirmPassword:"", avatar:"" });
    setSelected(null);
    setModal("add");
  };

  const openEdit = (admin) => {
    setSelected(admin);
    setForm({ name:admin.name, email:admin.email, password:"", confirmPassword:"", avatar:admin.avatar||"" });
    setModal("edit");
  };

  const openDelete = (admin) => { setSelected(admin); setModal("delete"); };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { showToast("❌ Image must be under 2MB"); return; }
    const reader = new FileReader();
    reader.onload = () => setForm(f => ({ ...f, avatar: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) { showToast("❌ Passwords do not match"); return; }
    if (form.password.length < 6) { showToast("❌ Password must be at least 6 characters"); return; }
    setSaving(true);
    try {
      const res = await fetch("/api/auth/register", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          name:     form.name,
          email:    form.email,
          password: form.password,
          role:     "admin",
          avatar:   form.avatar,
          plan:     "titan",
          balance:  0, invested:0, profit:0,
        }),
      });
      const data = await res.json();
      if (!res.ok) { showToast("❌ " + (data.error || "Failed to create admin")); setSaving(false); return; }
      // Set role to admin explicitly
      await fetch("/api/users", {
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ userId: data.user.id, role:"admin", avatar: form.avatar }),
      });
      showToast("✅ Admin account created successfully!");
      setModal(null);
      fetchAdmins();
    } catch { showToast("❌ Network error"); }
    setSaving(false);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (form.password && form.password !== form.confirmPassword) { showToast("❌ Passwords do not match"); return; }
    if (form.password && form.password.length < 6) { showToast("❌ Password must be at least 6 characters"); return; }
    setSaving(true);
    const updates = { name:form.name, email:form.email, avatar:form.avatar };
    if (form.password) updates.password = form.password;
    try {
      const res = await fetch("/api/users", {
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ userId: selected.id, ...updates }),
      });
      if (res.ok) {
        showToast("✅ Admin updated successfully!");
        setModal(null);
        fetchAdmins();
      } else {
        const data = await res.json();
        showToast("❌ " + (data.error || "Update failed"));
      }
    } catch { showToast("❌ Network error"); }
    setSaving(false);
  };

  const handleDelete = async () => {
    setSaving(true);
    try {
      await fetch(`/api/users?id=${selected.id}`, { method:"DELETE" });
      showToast("✅ Admin removed.");
      setModal(null);
      fetchAdmins();
    } catch { showToast("❌ Network error"); }
    setSaving(false);
  };

  const initials = (name) => name ? name.split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2) : "A";

  const ModalForm = ({ onSubmit, title, isEdit }) => (
    <div className="modal-overlay" onClick={() => setModal(null)}>
      <div className="user-modal" style={{maxWidth:500}} onClick={e=>e.stopPropagation()}>
        <div className="user-modal-head">
          <div>
            <div style={{fontSize:20,fontWeight:700,color:"var(--text)"}}>{title}</div>
            <div style={{fontSize:13,color:"var(--text-dim)",marginTop:4}}>
              {isEdit ? "Update admin account details" : "Create a new admin with full privileges"}
            </div>
          </div>
          <button onClick={()=>setModal(null)} style={{background:"none",border:"none",color:"var(--text-dim)",fontSize:20,cursor:"pointer"}}>✕</button>
        </div>
        <div className="user-modal-body">
          <form onSubmit={onSubmit} style={{display:"flex",flexDirection:"column",gap:16}}>

            {/* Avatar upload */}
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:12,marginBottom:8}}>
              <div style={{width:88,height:88,borderRadius:"50%",overflow:"hidden",border:"2px solid var(--teal)",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontWeight:700,color:"var(--teal)"}}>
                {form.avatar
                  ? <img src={form.avatar} alt="avatar" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                  : <span>{form.name ? initials(form.name) : "👤"}</span>
                }
              </div>
              <button type="button" className="btn btn-outline btn-sm" onClick={()=>fileRef.current.click()}>
                📷 {form.avatar ? "Change Photo" : "Upload Photo"}
              </button>
              {form.avatar && (
                <button type="button" style={{background:"none",border:"none",color:"var(--red)",fontSize:12,cursor:"pointer"}} onClick={()=>setForm(f=>({...f,avatar:""}))}>
                  Remove photo
                </button>
              )}
              <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleAvatarUpload} />
            </div>

            {/* Name */}
            <div className="form-group">
              <label className="input-label">Full Name</label>
              <input className="input" placeholder="e.g. John Smith" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} required />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="input-label">Email Address</label>
              <input className="input" type="email" placeholder="admin@example.com" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} required />
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="input-label">{isEdit ? "New Password (leave blank to keep current)" : "Password"}</label>
              <div style={{position:"relative"}}>
                <input className="input" type={showPw?"text":"password"} placeholder={isEdit?"Leave blank to keep current":"Min 6 characters"} value={form.password} onChange={e=>setForm(f=>({...f,password:e.target.value}))} required={!isEdit} style={{paddingRight:70}} />
                <button type="button" onClick={()=>setShowPw(!showPw)} style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"var(--text-dim)",cursor:"pointer",fontSize:12}}>
                  {showPw?"Hide":"Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label className="input-label">Confirm Password</label>
              <input className="input" type={showPw?"text":"password"} placeholder="Repeat password" value={form.confirmPassword} onChange={e=>setForm(f=>({...f,confirmPassword:e.target.value}))} required={!isEdit || !!form.password} />
            </div>

            {/* Privileges info */}
            <div style={{background:"rgba(0,212,170,0.05)",border:"1px solid rgba(0,212,170,0.2)",borderRadius:"var(--radius)",padding:12,fontSize:13,color:"var(--text-dim)"}}>
              🛡️ This account will have <strong style={{color:"var(--teal)"}}>full admin privileges</strong> — user management, balance control, subscription approval, and plan management.
            </div>

            <div style={{display:"flex",gap:10,marginTop:4}}>
              <button type="button" className="btn btn-ghost" style={{flex:1}} onClick={()=>setModal(null)}>Cancel</button>
              <button type="submit" className="btn btn-primary" style={{flex:2}} disabled={saving}>
                {saving ? "Saving…" : isEdit ? "💾 Save Changes" : "➕ Create Admin"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <AdminLayout>
      <div className="admin-topbar fade-in">
        <div>
          <div className="admin-topbar-title">Admin Management</div>
          <div className="admin-topbar-sub">{admins.length} admin account{admins.length!==1?"s":""} with full privileges</div>
        </div>
        <button className="btn btn-primary" onClick={openAdd}>➕ Add New Admin</button>
      </div>

      <div className="users-table-card fade-up">
        <div className="users-table-header">
          <div className="users-table-title">All Administrators</div>
          <div className="users-count">{admins.length} total</div>
        </div>

        {loading ? (
          <div style={{padding:40,textAlign:"center",color:"var(--text-dim)"}}>Loading admins…</div>
        ) : admins.length === 0 ? (
          <div style={{padding:60,textAlign:"center",color:"var(--text-dim)"}}>
            <div style={{fontSize:40,marginBottom:12}}>👤</div>
            <div style={{fontWeight:600,marginBottom:8}}>No additional admins yet</div>
            <div style={{fontSize:13,marginBottom:20}}>Add another admin to help manage the platform</div>
            <button className="btn btn-primary" onClick={openAdd}>➕ Add First Admin</button>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>{["Admin","Email","Status","Joined","Actions"].map(h=><th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {admins.map(admin => (
                <tr key={admin.id}>
                  <td>
                    <div style={{display:"flex",alignItems:"center",gap:12}}>
                      <div style={{width:40,height:40,borderRadius:"50%",overflow:"hidden",border:"2px solid var(--teal)",flexShrink:0,background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,color:"var(--teal)"}}>
                        {admin.avatar
                          ? <img src={admin.avatar} alt={admin.name} style={{width:"100%",height:"100%",objectFit:"cover"}} />
                          : initials(admin.name)
                        }
                      </div>
                      <div>
                        <div className="user-name">{admin.name}</div>
                        <div style={{fontSize:11,color:"var(--teal)",fontWeight:600,marginTop:2}}>🛡️ Administrator</div>
                      </div>
                    </div>
                  </td>
                  <td style={{color:"var(--text-dim)"}}>{admin.email}</td>
                  <td><span className="badge badge-active">Active</span></td>
                  <td style={{color:"var(--text-dim)",fontSize:12}}>{admin.createdAt?.split("T")[0]}</td>
                  <td>
                    <div className="actions-cell">
                      <button className="icon-btn" title="Edit" onClick={()=>openEdit(admin)}>✏️</button>
                      <button className="icon-btn danger" title="Remove" onClick={()=>openDelete(admin)}>🗑</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Modal */}
      {modal === "add" && <ModalForm onSubmit={handleAdd} title="➕ Add New Admin" isEdit={false} />}

      {/* Edit Modal */}
      {modal === "edit" && <ModalForm onSubmit={handleEdit} title="✏️ Edit Admin" isEdit={true} />}

      {/* Delete Confirm Modal */}
      {modal === "delete" && selected && (
        <div className="modal-overlay" onClick={()=>setModal(null)}>
          <div className="user-modal" style={{maxWidth:420}} onClick={e=>e.stopPropagation()}>
            <div className="user-modal-body" style={{textAlign:"center",padding:"32px 24px"}}>
              <div style={{fontSize:48,marginBottom:16}}>⚠️</div>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Remove Admin?</div>
              <div style={{color:"var(--text-dim)",fontSize:14,marginBottom:24}}>
                Are you sure you want to remove <strong style={{color:"var(--text)"}}>{selected.name}</strong> as an administrator? This action cannot be undone.
              </div>
              <div style={{display:"flex",gap:10}}>
                <button className="btn btn-ghost" style={{flex:1}} onClick={()=>setModal(null)}>Cancel</button>
                <button className="btn btn-danger" style={{flex:1}} onClick={handleDelete} disabled={saving}>
                  {saving ? "Removing…" : "🗑 Remove Admin"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="admin-toast">{toast}</div>}
    </AdminLayout>
  );
}
