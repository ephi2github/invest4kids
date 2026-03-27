import type { Metadata } from "next";
import Image from "next/image";
import hintIcon from "@/assets/icons/hint.png";

export const metadata: Metadata = {
  title: "Transparenz - Invest4Kids",
  description:
    "Transparenzhinweise der Invest4Kids GmbH. Offenlegung und Informationen zu unseren Leistungen.",
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M10.3449 19.5002L4.16992 13.3252L5.71367 11.7815L10.3449 16.4127L20.2845 6.47314L21.8283 8.01689L10.3449 19.5002Z"
        fill="#009846"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="2"
      viewBox="0 0 17 2"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M16.5 0.6875C16.5 0.869836 16.4276 1.04471 16.2986 1.17364C16.1697 1.30257 15.9948 1.375 15.8125 1.375H0.6875C0.505164 1.375 0.330295 1.30257 0.201364 1.17364C0.072433 1.04471 0 0.869836 0 0.6875C0 0.505164 0.072433 0.330295 0.201364 0.201364C0.330295 0.072433 0.505164 0 0.6875 0H15.8125C15.9948 0 16.1697 0.072433 16.2986 0.201364C16.4276 0.330295 16.5 0.505164 16.5 0.6875Z"
        fill="#006F99"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M15.7656 14.6336C15.8399 14.708 15.8988 14.7962 15.9391 14.8933C15.9793 14.9904 16 15.0945 16 15.1996C16 15.3047 15.9793 15.4088 15.9391 15.5059C15.8988 15.603 15.8399 15.6912 15.7656 15.7656C15.6912 15.8399 15.603 15.8988 15.5059 15.9391C15.4088 15.9793 15.3047 16 15.1996 16C15.0945 16 14.9904 15.9793 14.8933 15.9391C14.7962 15.8988 14.708 15.8399 14.6336 15.7656L8 9.13094L1.36637 15.7656C1.21626 15.9157 1.01268 16 0.8004 16C0.588121 16 0.384536 15.9157 0.234432 15.7656C0.0843276 15.6155 0 15.4119 0 15.1996C0 14.9873 0.0843276 14.7837 0.234432 14.6336L6.86906 8L0.234432 1.36637C0.0843276 1.21626 0 1.01268 0 0.8004C0 0.588121 0.0843276 0.384536 0.234432 0.234432C0.384536 0.0843276 0.588121 0 0.8004 0C1.01268 0 1.21626 0.0843276 1.36637 0.234432L8 6.86906L14.6336 0.234432C14.7837 0.0843276 14.9873 0 15.1996 0C15.4119 0 15.6155 0.0843276 15.7656 0.234432C15.9157 0.384536 16 0.588121 16 0.8004C16 1.01268 15.9157 1.21626 15.7656 1.36637L9.13094 8L15.7656 14.6336Z"
        fill="#AE0606"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923Z"
        fill="white"
      />
    </svg>
  );
}

function GreenCheckIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 -3 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M548.783,1040.2 C547.188,1038.57 544.603,1038.57 543.008,1040.2 L528.569,1054.92 L524.96,1051.24 C523.365,1049.62 520.779,1049.62 519.185,1051.24 C517.59,1052.87 517.59,1055.51 519.185,1057.13 L525.682,1063.76 C527.277,1065.38 529.862,1065.38 531.457,1063.76 L548.783,1046.09 C550.378,1044.46 550.378,1041.82 548.783,1040.2"
        fill="#73ba4a"
        transform="translate(-518 -1039) scale(1)"
      />
    </svg>
  );
}

function HintIcon() {
  return (
    <Image
      src={hintIcon}
      alt=""
      width={32}
      height={50}
      className="shrink-0"
    />
  );
}

function Divider() {
  return (
    <div className="py-[15px] md:py-[38px]">
      <hr className="border-t-2 border-primary-light my-[15px]" />
    </div>
  );
}

function CtaButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-light bg-primary px-[36px] py-[15px] font-outfit text-[16px] font-medium leading-none text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-text-medium md:text-[18px]"
    >
      <CalendarIcon />
      <span>{children}</span>
    </a>
  );
}

export default function TransparenzPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="px-5 pt-[50px] pb-[34px] md:px-[34px] md:pb-[50px]"
        style={{
          background: "linear-gradient(162deg, #133A7D 0%, #006F99 100%)",
        }}
      >
        <div className="mx-auto md:max-w-[1100px]">
          <h1 className="font-poppins text-[27px] font-extrabold leading-1.6 text-white md:text-[34px]">
            Transparenz &amp; Methodik bei Invest4Kids
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-bg-light-blue px-5 pt-[34px] pb-[80px] md:px-[34px] md:pt-[50px] md:pb-[100px] md:pl-[68px]">
        <div className="mx-auto md:max-w-[1100px]">
          {/* Subtitle + Intro */}
          <h2 className="font-poppins text-[22px] font-semibold leading-[125%] text-text-medium md:text-[28px]">
            Ehrlich. Klar. Für dich und dein Kind.
          </h2>
          <div className="pt-3">
            <p className="font-outfit text-[16px] font-light leading-[20px] text-text-medium md:text-[18px]">
              Wenn du Geld für dein Kind anlegst, willst du wissen, woran du
              bist.
            </p>
            <p className="font-outfit text-[16px] font-light leading-[20px] text-text-medium md:text-[18px]">
              Deshalb zeigen wir dir ganz offen, wie wir arbeiten, wie wir
              rechnen – und was wir nicht tun.
            </p>
            <p className="font-outfit text-[16px] font-light leading-[20px] text-text-medium md:text-[18px]">
              Ohne Kleingedrucktes. Ohne Tricks.
            </p>
          </div>

          <Divider />

          {/* Section: 25.703 € */}
          <h2 className="font-poppins text-[22px] font-semibold leading-[125%] text-text-medium md:text-[28px]">
            Wie wir auf &bdquo;25.703&nbsp;€ mehr pro Kind&ldquo; kommen
          </h2>
          <div className="pt-3 pb-6">
            <p className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
              Diese Zahl basiert auf einem einfachen Vergleich:
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-[800px] overflow-x-auto font-outfit">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Vergleich</th>
                  <th>Invest4Kids (ETF-basiert)</th>
                  <th>Klassisches Sparbuch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sparrate</td>
                  <td>150€/Monat</td>
                  <td>150€/Monat</td>
                </tr>
                <tr>
                  <td>Laufzeit</td>
                  <td>18 Jahre</td>
                  <td>18 Jahre</td>
                </tr>
                <tr>
                  <td>Annahme Rendite</td>
                  <td>6% p.a. (marktüblich)</td>
                  <td>0,1% p.a.</td>
                </tr>
                <tr>
                  <td>Ergebnis</td>
                  <td>ca. 58.700€</td>
                  <td>ca. 33.000€</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Arrow highlight */}
          <div className="flex items-center gap-3 py-[14px] pb-6 md:mt-[15px]">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="long-arrow-alt-right"
              className="w-[44px] h-[35px] text-primary"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 512"
            >
              <path
                fill="currentColor"
                d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v66.745c0 10.692 12.926 16.045 20.485 8.485l131.515-131.515c4.686-4.686 4.686-12.284 0-16.971L334.426 91.23c-7.559-7.559-20.485-2.206-20.485 8.485V216z"
              ></path>
            </svg>
            <span className="font-poppins text-[18px] font-bold leading-[150%] text-primary md:text-[20px]">
              &nbsp;Unterschied: 25.703&nbsp;€ – allein durch die richtige
              Anlageform.
            </span>
          </div>

          <div className="flex flex-row items-center gap-6 rounded-lg bg-white px-6 py-4 md:pl-[34px] max-w-[780px]">
            <HintIcon />
            <p className="font-outfit text-[16px] font-medium leading-none text-[#4B5563] md:text-[18px]">
              <strong>Hinweis</strong>:&nbsp;Es handelt sich um ein Beispiel –
              keine Garantie oder Prognose. Die tatsächliche Entwicklung hängt
              von der Marktsituation ab.
            </p>
          </div>

          <Divider />

          {/* Section: Steuerfrei */}
          <h2 className="font-poppins text-[22px] font-semibold leading-[125%] text-text-medium md:text-[28px]">
            Was bedeutet &quot;steuerfrei&quot; wirklich?
          </h2>
          <div className="pt-3 pb-4">
            <p className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
              Viele Eltern fragen: &bdquo;Ist das wirklich steuerfrei für mein
              Kind?&ldquo;
            </p>
            <p className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
              Antwort: Oft ja – wenn ein paar Dinge beachtet werden:
            </p>
          </div>

          {/* Checkmark list */}
          <ul className="flex flex-col gap-[6px] pb-[34px]">
            <li className="flex items-center gap-3">
              <span className="mt-0.5 flex h-[30px] w-[30px] items-center justify-center">
                <CheckIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                Das Kind hat während Ausbildung/Studium&nbsp;
                <b className="font-medium">kein Einkommen</b>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="mt-0.5 flex h-[30px] w-[30px] items-center justify-center">
                <CheckIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                Es wird eine&nbsp;
                <b className="font-medium">
                  Nichtveranlagungsbescheinigung (NV-Bescheinigung)
                </b>
                &nbsp;beantragt
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="mt-0.5 flex h-[30px] w-[30px] items-center justify-center">
                <CheckIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                In der ETF-Versicherung entfällt die&nbsp;
                <b className="font-medium">Vorabpauschale</b>&nbsp;(anders als beim Depot)
              </span>
            </li>
          </ul>

          <div className="flex flex-row items-center gap-6 rounded-lg bg-white px-6 py-4 md:pl-[34px] max-w-[780px]">
            <HintIcon />
            <p className="font-outfit text-[16px] font-medium leading-none text-[#4B5563] md:text-[18px]">
              <strong>Hinweis</strong>: Die individuelle Steuerfreiheit hängt
              vom Einzelfall ab. Wir geben keine Steuerberatung.
            </p>
          </div>

          <div className="pt-[34px] flex w-full md:w-fit justify-center">
            <CtaButton href="https://www.invest4kids-beratung.de/start">
              Jetzt kostenlose Einschätzung holen
            </CtaButton>
          </div>

          <Divider />

          {/* Section: Bewertungen */}
          <h2 className="font-poppins text-[22px] font-semibold leading-[125%] text-text-medium md:text-[28px]">
            Unsere Bewertungen
          </h2>
          <div className="pt-3 pb-4">
            <p className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
              Alle veröffentlichten Bewertungen stammen von Eltern, die unsere
              Beratung persönlich genutzt haben.
            </p>
            <p className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
              Wir sammeln Feedback:
            </p>
          </div>

          {/* Dash list */}
          <ul className="flex flex-col gap-[8px] md:gap-[12px] pb-[34px]">
            <li className="flex items-center gap-3">
              <span className="flex w-[16px] items-center justify-center">
                <DashIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                direkt nach der Beratung (z.&nbsp;B. per WhatsApp oder E-Mail)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex w-[16px] items-center justify-center">
                <DashIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                über Trustpilot (mit systemgestützter Echtheitsprüfung) und
                Google
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex w-[16px] items-center justify-center">
                <DashIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                über freiwillige Online-Umfragen
              </span>
            </li>
          </ul>

          {/* Disclaimer box */}
          <div className="flex flex-row items-center gap-6 rounded-lg bg-white px-6 py-4 md:pl-[34px] max-w-[780px]">
            <p className="font-outfit text-[16px] font-medium leading-none text-[#4B5563] md:text-[18px]">
              Die Bewertungen wurden freiwillig abgegeben. Eine externe formale
              Echtheitsprüfung im Sinne des §5b Abs.3 UWG findet nicht statt.
            </p>
          </div>

          <Divider />

          {/* Section: 6% Rendite */}
          <h2 className="font-poppins text-[22px] font-semibold leading-[125%] text-text-medium md:text-[28px]">
            Warum wir mit 6% Rendite in unseren Beispielen rechnen
          </h2>
          <div className="pt-3 pb-4">
            <p className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
              Die 6% sind keine Garantie – aber ein realistischer
              Durchschnittswert.
            </p>
          </div>

          {/* Dash list */}
          <ul className="flex flex-col gap-[6px]">
            <li className="flex items-center gap-3">
              <span className="mt-1 flex w-[16px] items-center justify-center">
                <DashIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                <b className="font-medium">Historisch gesehen</b>&nbsp;lag die jährliche Rendite breit
                gestreuter Aktienmärkte –{" "}
                <b className="font-medium">sogar in den schlechtesten Zeiträumen</b>&nbsp;– langfristig
                bei etwa&nbsp;<b className="font-medium">6&nbsp;%</b>&nbsp;Rendite
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="mt-1 flex w-[16px] items-center justify-center">
                <DashIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                Wir rechnen bewusst&nbsp;<b className="font-medium">konservativ</b>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="mt-1 flex w-[16px] items-center justify-center">
                <DashIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                Die tatsächliche Rendite hängt vom Produkt &amp; Markt ab
              </span>
            </li>
          </ul>

          {/* Arrow pointer */}
          <div className="flex items-center gap-3 py-[34px]">
            <span className="text-[35px] leading-none text-primary">→</span>
            <span className="font-poppins text-[18px] font-bold leading-[150%] text-primary md:text-[20px]">
              Ziel: eine realistische, nachvollziehbare Rechengrundlage
            </span>
          </div>

          {/* Fazit box */}
          <div className="flex flex-row items-center gap-6 rounded-lg bg-white px-6 py-4 md:pl-[34px] max-w-[780px]">
          <p className="font-outfit text-[16px] font-medium leading-none text-[#4B5563] md:text-[18px]">
            Fazit:&nbsp;Die 6&nbsp;% sind nicht optimistisch – sondern
              vorsichtig gewählt. Damit du klar einschätzen kannst, was für dein
              Kind langfristig möglich ist.
            </p>
          </div>

          <Divider />

          {/* Section: Beratung */}
          <h2 className="font-poppins text-[22px] font-semibold leading-[125%] text-text-medium md:text-[28px]">
            Wie läuft unsere Beratung ab?
          </h2>
          <div className="pt-3 pb-4">
            <p className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
              Unsere Beratung ist:
            </p>
          </div>

          {/* Checkmark list */}
          <ul className="flex flex-col gap-[6px]">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-[30px] w-[30px] items-center justify-center">
                <CheckIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                kostenlos &amp; unverbindlich
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-[30px] w-[30px] items-center justify-center">
                <CheckIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                individuell auf dein Kind abgestimmt
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-[30px] w-[30px] items-center justify-center">
                <CheckIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                ohne Verkaufsdruck
              </span>
            </li>
          </ul>

          {/* Summary box */}
          <div className="mt-6 flex flex-row items-center gap-6 rounded-lg bg-white px-6 py-4 md:pl-[34px]">
          <p className="font-outfit text-[16px] font-medium leading-none text-[#4B5563] md:text-[18px]">
              Wir nehmen uns Zeit für dich und schauen gemeinsam, welche Lösung
              zu deiner Familiensituation passt – ob ETF-Versicherung oder
              Kinderdepot.
            </p>
          </div>

          <div className="pt-[34px] w-full md:w-fit justify-center flex">
            <CtaButton href="https://www.invest4kids-beratung.de/start">
              Jetzt kostenlose Einschätzung buchen
            </CtaButton>
          </div>

          <Divider />

          {/* Section: Wie verdienen wir Geld? */}
          <h2 className="font-poppins text-[22px] font-semibold leading-[125%] text-text-medium md:text-[28px]">
            Wie verdienen wir Geld?
          </h2>
          <div className="pt-3 pb-6 font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
            <p>
              Ganz einfach:{" "}
              <b className="font-semibold">
                Wenn du dich für eine Lösung entscheidest, erhalten wir eine
                Vergütung vom Produktanbieter
              </b>. Für dich entstehen{" "}
              <b className="font-semibold">keine zusätzlichen oder versteckten Kosten.</b>
            </p>
            <p className="mt-2">
              
            </p>
          </div>

          <div className="flex flex-row items-center gap-6 rounded-lg bg-white px-6 py-4 md:pl-[34px] max-w-[780px]">
            <HintIcon />
            <p className="font-outfit text-[16px] font-medium leading-none text-[#4B5563] md:text-[18px]">
              Unsere Empfehlung richtet sich immer danach, was&nbsp;
              <strong>für dein Kind</strong>&nbsp;langfristig&nbsp;
              <strong>am besten passt</strong>.
            </p>
          </div>

          <Divider />

          {/* Section: Was wir NICHT tun */}
          <h2 className="font-poppins text-[22px] font-semibold leading-[125%] text-text-medium md:text-[28px]">
            Was wir NICHT tun:
          </h2>

          {/* X-icon list */}
          <ul className="flex flex-col gap-[8px] md:gap-[12px] pt-6 pb-[34px]">
            <li className="flex items-center gap-3">
              <span className="flex w-[16px] items-center justify-center">
                <XIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                Keine Steuer- oder Rechtsberatung
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex w-[16px] items-center justify-center">
                <XIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                Keine pauschalen Empfehlungen ohne persönliche Analyse
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex w-[16px] items-center justify-center">
                <XIcon />
              </span>
              <span className="font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
                Keine Renditeversprechen oder Garantieversprechen
              </span>
            </li>
          </ul>

          {/* "Was wir tun" positive box */}
          <div className="flex flex-row items-center gap-4 rounded-lg bg-white px-6 py-4 md:gap-6 md:pl-[24px]">
            <GreenCheckIcon />
            <p className="font-outfit text-[16px] font-medium leading-none text-[#4B5563] md:text-[18px]">
              <strong>Was wir tun:</strong> Dir Klarheit, Sicherheit und
              langfristige Perspektiven geben – auf Augenhöhe und mit echtem
              Expertenwissen.
            </p>
          </div>

          {/* Trust Section */}
          <div className="mt-[50px] md:mt-[100px] rounded-[20px] border-2 border-primary-light bg-white px-6 py-6 text-center md:px-[24px]">
            <h2 className="font-poppins text-[22px] font-semibold leading-[125%] text-primary md:text-[28px]">
              Warum du uns vertrauen kannst
            </h2>
            <div className="mx-auto max-w-[700px] pt-3 pb-6 font-outfit text-[16px] font-light leading-[23px] text-text-medium md:text-[18px]">
              <p className="mb-3">
                Wir sind&nbsp;<b className="font-medium">kein anonymer Vergleichsrechner</b>&nbsp;–
                sondern echte Menschen mit echter Erfahrung.
              </p>
              <p className="mb-3">
                Wir sind&nbsp;<b className="font-medium">Berater:innen mit Herz und Verstand</b>,
                spezialisiert auf das, was wirklich zählt: die finanzielle
                Zukunft deines Kindes. Bei uns geht es nicht um Produkte,
                sondern um langfristige Lösungen, die zu deiner Familie passen.
              </p>
              <p className="mb-3 px-6 font-medium">
                Deutschlands führendes Beratungsunternehmen für
                Kinderinvestments.
              </p>
              <p>
                Mit&nbsp;❤️ für Familien und einem klaren Ziel:{" "}
                <b className="font-medium">
                  Deinem Kind später echte finanzielle Freiheit zu ermöglichen.
                </b>
              </p>
            </div>
            <div className="pt-[34px] w-full md:w-fit justify-center flex">
              <CtaButton href="https://www.invest4kids-beratung.de/start">
                Starte jetzt für dein Kind
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
