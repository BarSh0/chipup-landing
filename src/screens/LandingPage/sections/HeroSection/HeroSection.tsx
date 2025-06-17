import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the data structure for crypto cards
interface CryptoCard {
  category: string;
  name: string;
  price: string;
  icon: string;
}

// Data for crypto cards
const cryptoCards: CryptoCard[] = [
  {
    category: "Highest volume",
    name: "Bitcoin",
    price: "93575.5",
    icon: "/group-83.png",
  },
  {
    category: "Top gainer",
    name: "Ethereum",
    price: "3337.28",
    icon: "/group-45.png",
  },
  {
    category: "New listing",
    name: "Litecoin",
    price: "105.000",
    icon: "/litecoin-icon-1.svg",
  },
  {
    category: "Most traded",
    name: "Polkadot",
    price: "6.6423",
    icon: "/group-84.png",
  },
  {
    category: "Biggest gainers",
    name: "Solana",
    price: "189.63",
    icon: "/frame-46.svg",
  },
  {
    category: "Trending",
    name: "Chainlink",
    price: "19.991",
    icon: "/layer-1-2.png",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-10 py-[72px] w-full">
      <header className="flex flex-col items-center gap-3 w-full">
        <h2 className="w-fit [font-family:'DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px] leading-[21.6px] whitespace-nowrap">
          <span className="text-[#ffffff] tracking-[-0.11px]">Featured </span>
          <span className="text-[#99e39e] tracking-[-0.11px]">
            crypto coins
          </span>
        </h2>

        <h1 className="w-fit [font-family:'DM_Sans',Helvetica] font-semibold text-[#ffffff] text-[40px] tracking-[-0.60px] leading-[48.0px] whitespace-nowrap">
          Top crypto coins updates
        </h1>
      </header>

      <div className="flex items-center gap-6 w-full overflow-x-auto">
        {cryptoCards.map((crypto, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-[180px] bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff1a]"
          >
            <CardContent className="flex flex-col items-start gap-4 p-5">
              <div className="self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[-0.60px] leading-[16.8px]">
                {crypto.category}
              </div>

              {crypto.name === "Ethereum" ? (
                <div className="relative w-8 h-8">
                  <div className="relative w-8 h-8 bg-[url(/group-45.png)] bg-[100%_100%]">
                    <img
                      className="absolute w-[7px] h-2 top-[13px] left-[9px]"
                      alt="Path"
                      src="/path-5-.svg"
                    />
                  </div>
                </div>
              ) : crypto.name === "Polkadot" ? (
                <div className="relative w-8 h-8">
                  <img
                    className="absolute w-8 h-[31px] top-px left-0"
                    alt="Group"
                    src={crypto.icon}
                  />
                </div>
              ) : crypto.name === "Chainlink" ? (
                <div className="relative w-8 h-8">
                  <div className="relative w-[26px] h-[30px] top-px left-[3px] bg-[url(/layer-1-2.png)] bg-[100%_100%]" />
                </div>
              ) : (
                <img
                  className="relative w-8 h-8"
                  alt={`${crypto.name} icon`}
                  src={crypto.icon}
                />
              )}

              <div className="flex flex-col items-start gap-1 self-stretch w-full">
                <div className="self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-semibold text-[#ffffff] text-base tracking-[-0.60px] leading-[19.2px]">
                  {crypto.name}
                </div>

                <div className="inline-flex items-center gap-0.5">
                  <div className="w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] text-sm tracking-[-0.60px] leading-[16.8px] whitespace-nowrap">
                    {crypto.price}
                  </div>

                  <div className="w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[-0.60px] leading-[16.8px] whitespace-nowrap">
                    USD
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
