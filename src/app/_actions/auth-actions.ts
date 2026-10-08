"use server";

import { SignInModel } from "../(auth)/_types/auth.types";
import { headers } from "next/headers";

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
      return {
        isSuccess: true,
        response: await response.json(),
      };
    }
  } catch {
    return {
      isSuccess: false,
    };
  }
}
