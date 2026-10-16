import Link from "next/link";
import { TopNavigationAccount } from "./top-navigation-account";

export default function TopNavigation() {
  return (
    <nav className="  sticky -top-1  backdrop-blur-md  z-20 border-b bg-secondary-870 border-secondary-870">
      <div className="container mx-auto h-[70px] xl:h-[90px] flex items-center  text-white">
        <div className="flex items-center justify-between">
          <ul className="hidden xl:flex items-center whitespace-nowrap gap-8 ms-20">
            <li>
              <Link
                className="text-white animate-underline animate-target"
                href="/"
              >
                صفحه اصلی
              </Link>
            </li>
          </ul>
        </div>
        <TopNavigationAccount />
      </div>
    </nav>
  );
}
