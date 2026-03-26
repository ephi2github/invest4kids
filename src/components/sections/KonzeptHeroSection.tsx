import konzeptRad from "@/assets/images/konzept/konzept-rad.png";

export default function KonzeptHeroSection() {
  return (
    <section className="overflow-hidden bg-[#EFFAFD] px-5 md:px-0">
      <div className="mx-auto max-w-[1100px] py-[50px] md:pt-[100px] md:pb-[150px]">
        <div className="flex flex-col items-center md:gap-15 md:flex-row md:items-center md:justify-between">
          <div className="w-full text-center md:w-[500px] md:text-left">
            <div className="inline-flex items-center gap-[12px] rounded-full border border-[#F8BF3C] bg-[#FFFAEE] px-[16px] py-[1px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 17" fill="none">
                <path d="M15.9882 1.28748C15.9692 0.955935 15.8367 0.643222 15.6156 0.408348C15.3946 0.173474 15.1002 0.0326808 14.7881 0.0125323C13.7817 -0.0512153 11.2095 0.046531 9.07498 2.3134L8.69495 2.72223H4.02826C3.85951 2.72122 3.69226 2.75587 3.53623 2.82416C3.3802 2.89245 3.23851 2.99302 3.11941 3.12002L0.375235 6.03711C0.206943 6.21578 0.0888507 6.44074 0.0342124 6.68675C-0.0204259 6.93276 -0.00944832 7.19008 0.0659133 7.42983C0.141275 7.66958 0.278038 7.88227 0.460854 8.04404C0.643669 8.2058 0.865302 8.31024 1.10088 8.34562L4.17867 8.80205L7.71569 12.5598L8.14532 15.8313C8.17835 16.0816 8.27663 16.3171 8.42904 16.5111C8.58145 16.7052 8.78191 16.8501 9.00777 16.9294C9.13932 16.9761 9.2771 17 9.4158 17C9.58374 17.0003 9.75008 16.9654 9.90524 16.8971C10.0604 16.8288 10.2013 16.7286 10.3199 16.6022L13.0656 13.6868C13.1852 13.5603 13.2798 13.4097 13.3441 13.244C13.4084 13.0782 13.441 12.9005 13.44 12.7213V7.76339L13.8217 7.35796C15.9562 5.09024 16.0482 2.35759 15.9882 1.28748ZM4.02826 4.08218H7.41487L4.25228 7.44125L1.27929 7.00097L4.02826 4.08218ZM9.98143 3.27896C10.5965 2.62154 11.3364 2.11111 12.1519 1.78176C12.9675 1.4524 13.8397 1.31171 14.7105 1.36908C14.7666 2.29468 14.6356 3.22231 14.3262 4.08963C14.0168 4.95695 13.5362 5.74387 12.9168 6.39749L8.31973 11.2797L5.38515 8.16203L9.98143 3.27896ZM12.16 12.7213L9.4134 15.6417L8.99817 12.4824L12.16 9.12334V12.7213ZM6.2268 13.5287C5.86678 14.3668 4.6627 16.3217 1.27929 16.3217C1.10954 16.3217 0.946745 16.2501 0.826714 16.1226C0.706684 15.995 0.639251 15.8221 0.639251 15.6417C0.639251 12.0472 2.47937 10.768 3.26821 10.3847C3.3447 10.3476 3.42731 10.3269 3.51132 10.3238C3.59534 10.3207 3.67911 10.3351 3.75786 10.3664C3.8366 10.3976 3.90879 10.4451 3.97028 10.506C4.03178 10.5669 4.08139 10.64 4.11627 10.7213C4.15115 10.8025 4.17062 10.8903 4.17358 10.9796C4.17653 11.0688 4.16291 11.1578 4.13349 11.2415C4.10408 11.3251 4.05943 11.4018 4.00212 11.4672C3.9448 11.5325 3.87593 11.5852 3.79945 11.6222C3.28502 11.8713 2.14974 12.6728 1.94973 14.9295C4.07386 14.717 4.82991 13.5109 5.06273 12.9643C5.09761 12.8831 5.14721 12.8099 5.20871 12.749C5.2702 12.6881 5.34239 12.6407 5.42114 12.6095C5.49989 12.5782 5.58366 12.5637 5.66767 12.5669C5.75168 12.57 5.83429 12.5907 5.91078 12.6278C5.98727 12.6648 6.05613 12.7175 6.11345 12.7829C6.17076 12.8482 6.21541 12.9249 6.24483 13.0085C6.27424 13.0922 6.28787 13.1812 6.28491 13.2705C6.28195 13.3597 6.26168 13.4475 6.2268 13.5287Z" fill="#2C3E50"></path>
              </svg>
              <span className="py-1.5 font-outfit text-[10px] md:text-[12px] leading-none font-[400] text-[#4B5563]">
                Alle Vorteile auf einen Blick
              </span>
            </div>

            <h1 className="mt-[16px] font-poppins text-[27px] leading-[125% font-bold md:font-[800] text-[#2C3E50] md:text-[34px]">
              Das Invest4Kids Konzept
            </h1>

            <p className="mt-[14px] font-poppins text-[18px] leading-[150%] font-[500] text-[#4B5563] md:text-[20px]">
              Wir vereinen alles, was dein Kind braucht
            </p>

            <div className="mb-[16px] mt-[24px] hidden h-[1px] w-full bg-[#84B7CA] md:block" />

            <p className="mx-auto mt-[16px] max-w-[500px] font-outfit text-[16px] leading-[1.3] md:leading-[24.5px] font-light text-[#4B5563] md:mx-0 md:mt-[20px] md:text-[18px]">
              Die durchdachte Kombination aus ETFs, Steuervorteilen und
              elterlicher Kontrolle. Für ein Investment, das wirklich auf dein
              Kind zugeschnitten ist.
            </p>
          </div>

          <div className="flex w-full justify-center md:w-auto md:justify-end">
            <img
              src={konzeptRad.src}
              alt="Invest4Kids Konzept – Vorteile wie Steuerfreiheit, elterliche Kontrolle und Flexibilität"
              className="h-auto min-w-[280px] w-full shrink-0 object-contain lg:w-[538px] lg:max-w-[538px]"
              width={800}
              height={800}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
