import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { createClient } from "@/lib/supabase/server";
import { getActiveSubscription } from "@/lib/subscription";

export const runtime = "nodejs";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new NextResponse("Unauthorized", { status: 401 });

  const sub = await getActiveSubscription(supabase, user.id);
  if (!sub) return new NextResponse("Subscription required", { status: 403 });

  // The app lives OUTSIDE /public so it can't be fetched without this check.
  const filePath = path.join(process.cwd(), "protected", "pallet-builder.html");
  const html = await readFile(filePath, "utf8");

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
