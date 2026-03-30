import Image from "next/image";
import Link from "next/link";
import headerLogo from "@/assets/images/header/invest4kids-logo.png";
import flagDe from "@/assets/images/header/flag-de.svg";
import flagGb from "@/assets/images/header/flag-gb.svg";
import DatenschutzPage from "../../(legal pages)/datenschutz/page";

export default function AmbsDatenschutzPage() {
  return (
    <main className="etf-lp min-h-screen ">
      <header className="">
        <div className="mx-auto flex w-full items-center justify-center p-5 md:justify-end md:gap-10">
          <div className="hidden items-end md:flex">
            <Link
              href="/ambs-datenschutz/"
              className="flex items-end border-b-[3px] border-[#84b7ca] px-3 py-1.5"
              aria-label="Deutsch"
            >
              <Image src={flagDe} alt="Deutsch" width={24} height={16} className={''} />
            </Link>
            <Link href="/en/ambs-datenschutz/" className="flex items-end px-3 py-1.5 opacity-50" aria-label="English">
              <Image src={flagGb} alt="English" width={24} height={16} />
            </Link>
          </div>

          <Link href="/" aria-label="Invest4Kids">
            <Image src={headerLogo} alt="Invest4Kids Logo" width={80} className="h-auto w-20" priority />
          </Link>
        </div>
      </header>

      <DatenschutzPage />
    </main>
  );
}
