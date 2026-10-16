import { decryptSession } from "@/app/utils/sessoin";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const encryptsession = cookieStore.get("session")?.value;

  const session = await decryptSession(encryptsession);
  return Response.json(session);
}
