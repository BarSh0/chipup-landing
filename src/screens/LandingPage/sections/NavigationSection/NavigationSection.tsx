import {
  ArrowUpRightIcon,
  BarChart2Icon,
  DatabaseIcon,
  RocketIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: <BarChart2Icon className="w-5 h-5" />,
    text: "Designed for crypto\ntrading platforms",
    iconSrc: "/frame-14.svg",
  },
  {
    icon: <RocketIcon className="w-5 h-5" />,
    text: "Kickstart your crypto\nwebsite today",
    iconSrc: "/frame-15.svg",
  },
  {
    icon: <DatabaseIcon className="w-5 h-5" />,
    text: "Launch your blockchain\nplatform today",
    iconSrc: "/frame-18.svg",
  },
];

// Cryptocurrency data for mapping
const cryptocurrencies = [
  {
    name: "Bitcoin",
    symbol: "BTC/USD",
    percentage: "1.05%",
    image: "/group-83-1.png",
  },
  {
    name: "Ethereum",
    symbol: "BTC/USD",
    percentage: "1.05%",
    image: "/group-45-1.png",
    isEthereum: true,
  },
  {
    name: "Litecoin",
    symbol: "BTC/USD",
    percentage: "1.05%",
    image: "/litecoin-icon-1-1.svg",
  },
  {
    name: "Polkadot",
    symbol: "BTC/USD",
    percentage: "1.05%",
    image: "/frame-45.svg",
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 py-[72px] w-full max-w-[1200px] mx-auto">
      {/* Left section - Features */}
      <div className="flex flex-col w-full md:w-1/2 items-start gap-10">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="relative w-full [font-family:'DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px] leading-[21.6px]">
            <span className="text-white tracking-[-0.11px]">Why choose </span>
            <span className="text-[#99e39e] tracking-[-0.11px]">chipup</span>
          </div>

          <h2 className="relative w-full [font-family:'DM_Sans',Helvetica] font-semibold text-white text-[40px] tracking-[-0.60px] leading-[48.0px]">
            Features of the crypto framer mobile application
          </h2>
        </div>

        <div className="flex flex-wrap items-start gap-12 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex items-center justify-center p-2.5 bg-[#ffffff1a] rounded-full">
                {/* Use the icon component if available, otherwise use the image */}
                {feature.icon || (
                  <img
                    className="w-5 h-5"
                    alt="Feature icon"
                    src={feature.iconSrc}
                  />
                )}
              </div>

              <div className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-base leading-[22.4px] whitespace-pre-line">
                {feature.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right section - Portfolio card */}
      <div className="relative w-full md:w-1/2 h-[410.87px]">
        <div className="relative h-[406px]">
          {/* Background with dots */}
          <div className="absolute w-full h-[325px] top-[43px] left-0">
            <div className="relative w-full h-[328px] -top-px -left-px bg-[url(/group-39.png)] bg-cover bg-no-repeat">
              <div className="absolute w-3 h-3 top-[43px] left-[65px] bg-[#e79740] rounded-md opacity-90" />
              <div className="absolute w-3 h-3 top-[302px] left-[49px] bg-[#7e4bd0] rounded-md opacity-90" />
              <div className="absolute w-3 h-3 top-[171px] left-16 bg-[#e30278] rounded-md opacity-90" />
              <div className="absolute w-3 h-3 top-[230px] left-[498px] bg-[#3dc7c8] rounded-md opacity-90" />
              <div className="absolute w-3 h-3 top-[95px] left-[512px] bg-[#326dc9] rounded-md opacity-90" />
            </div>
          </div>

          {/* Portfolio card */}
          <Card className="w-[371px] absolute top-0 left-[109px] bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff1a] shadow-[0px_12px_28px_#09090952] backdrop-blur-lg backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(16px)_brightness(100%)]">
            <CardContent className="flex flex-col items-start gap-8 p-8">
              <div className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-xl tracking-[0] leading-5">
                <span className="font-medium text-white leading-[0.1px]">
                  Your{" "}
                </span>
                <span className="font-medium text-white leading-[24.0px]">
                  p
                </span>
                <span className="font-medium text-white leading-[0.1px]">
                  ortfolio is up{" "}
                </span>
                <span className="font-medium text-[#99e39e] leading-[24.0px]">
                  2.31%
                </span>
              </div>

              <div className="flex flex-col items-start gap-8 w-full">
                {cryptocurrencies.map((crypto, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between w-full"
                  >
                    <div className="flex items-center gap-4">
                      {crypto.isEthereum ? (
                        <div className="relative w-12 h-12 bg-[url(/group-45-1.png)] bg-cover bg-no-repeat">
                          <img
                            className="absolute w-[11px] h-3 top-[19px] left-3.5"
                            alt="Ethereum logo"
                            src="/path-5-.svg"
                          />
                        </div>
                      ) : (
                        <img
                          className="w-12 h-12"
                          alt={`${crypto.name} icon`}
                          src={crypto.image}
                        />
                      )}

                      <div className="flex flex-col items-start gap-0.5">
                        <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-base leading-[22.4px]">
                          {crypto.name}
                        </div>
                        <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffffcc] text-sm leading-[19.6px]">
                          {crypto.symbol}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#99e39e] text-base leading-[22.4px]">
                        {crypto.percentage}
                      </div>
                      <ArrowUpRightIcon className="w-5 h-5 text-[#99e39e]" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};