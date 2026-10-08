"use server";

import { SignInModel } from "../(auth)/_types/auth.types";
import { cookies, headers } from "next/headers";
import { JWT, UserResponse, userSession } from "../_types/auth.types";
import { jwtDecode } from "jwt-decode";

export async function signinActions(model: SignInModel) {
  const headerList = headers();
  const userAgent = (await headerList).get("user-agent");
  try {
    const response = await fetch(
      "https://general-api.classbon.com/api/identity/signin",
      {
        method: "POST",
        body: JSON.stringify({ ...model, userAgent }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (response.ok) {
      const user = await response.json();
      await setAuthCookieAction(user);
      return {
        isSuccess: true,
        response: user,
      };
    }
  } catch {
    return {
      isSuccess: false,
    };
  }
}

export async function setAuthCookieAction(user: UserResponse) {
  const decoded = jwtDecode<JWT>(user.accessToken);

  const session: userSession = {
    username: decoded.username,
    fullName: decoded.fullName,
    pic: decoded.pic,
    exp: decoded.exp * 1000,
    accessToken: user.accessToken,
    sessionId: user.sessoinId,
    sessonExpiry: user.sessonExpiry,
  };

  const cookieStore = await cookies();
  cookieStore.set("session", JSON.stringify(session), {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
}
