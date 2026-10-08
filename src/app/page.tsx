import { Suspense } from "react";
import { SignInForm } from "./(auth)/_components/sign-in-form";

export default function Home() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
