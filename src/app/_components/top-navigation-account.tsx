"use client";

import Image from "next/image";
import { useSessionStore } from "../_stores/auth.strore";
import { Button } from "./button";
import Link from "next/link";

export const TopNavigationAccount = () => {
  const status = useSessionStore((state) => state.status);
  const session = useSessionStore((state) => state.session);

  if (status == "loading") {
    return <p>loading</p>;
  }
  return (
    <>
      {status === "authenticated" ? (
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full"
            src={session.pic}
            width={48}
            height={48}
            alt=""
          />
          <p>
            {session.fullName} |{" "}
            <Link href={""} className="text-error">
              خروج
            </Link>
          </p>
        </div>
      ) : (
        <Button variant="outlined" href="/signin">
          ورود به سایت
        </Button>
      )}
    </>
  );
};
