import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { userSession } from "../_types/auth.types";

const JWT_SECRET = "a66lcx+MZaf2csPrw7ocq3GY1LLmBRmHOsYaWfEuzl4=";
const encodedKey = new TextEncoder().encode(JWT_SECRET);

export async function encryptSession(session: userSession): Promise<string> {
  return new SignJWT(session as unknown as JWTPayload)
    .setProtectedHeader({ alg: "HS256" })
    .sign(encodedKey);
}

export async function decryptSession(session: string) {
  const { payload } = await jwtVerify(session, encodedKey, {
    algorithms: ["HS256"],
  });

  return payload;
}
