import Logo from "@/app/_assets/logo-horizontal.svg";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children: ReactNode;
};


export default function AuthTemplate({ children }: Props) {
  return (
      <div className="flex flex-col xl:fixed xl:left-1/2 xl:-translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 fade-in items-center container  xl:max-w-[500px] self-stretch xl:bg-secondary-870 xl:p-8 xl:rounded-lg xl:shadow-xl xl:shadow-black/5">
        {/* <BlurBack/> */}
        <Link href="/"><Image src={Logo} width={150} height={87.52} alt="" className="mt-12 xl:mt-2 mb-24 xl:mb-5" /></Link>
        {children}
      </div>
  );
}