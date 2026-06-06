import { NextResponse } from "next/server";
import { settingsDb }   from "../../../lib/db";

const DEFAULT_CHECKOUT = {
  wallets: {
    "USDT (TRC20)":  { address:"TYourTRC20WalletAddressHere",     network:"TRON Network (TRC20)",    icon:"💵", symbol:"USDT", enabled:true },
    "USDT (ERC20)":  { address:"0xYourERC20WalletAddressHere",    network:"Ethereum Network (ERC20)", icon:"💵", symbol:"USDT", enabled:true },
    "Bitcoin (BTC)": { address:"bc1YourBitcoinWalletAddressHere", network:"Bitcoin Network",          icon:"₿",  symbol:"BTC",  enabled:true },
    "Ethereum (ETH)":{ address:"0xYourEthereumWalletAddressHere", network:"Ethereum Network (ETH)",   icon:"Ξ",  symbol:"ETH",  enabled:true },
  },
  instructions: "Send the exact amount to the wallet address below. Your plan will be activated within 24 hours of payment verification.",
  activationTime: "24 hours",
  warningText: "Only send via the correct network. Sending on the wrong network will result in permanent loss of funds.",
  screenshotRequired: false,
  txidRequired: true,
};

export async function GET() {
  try {
    const checkout = await settingsDb.get("checkout") || DEFAULT_CHECKOUT;
    return NextResponse.json({ success:true, checkout });
  } catch {
    return NextResponse.json({ success:true, checkout:DEFAULT_CHECKOUT });
  }
}

export async function PUT(request) {
  try {
    const { checkout } = await request.json();
    await settingsDb.set("checkout", checkout);
    return NextResponse.json({ success:true, checkout });
  } catch (err) {
    return NextResponse.json({ error:err.message }, { status:500 });
  }
}
