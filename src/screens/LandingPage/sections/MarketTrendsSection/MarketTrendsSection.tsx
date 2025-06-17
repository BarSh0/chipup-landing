import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the feature data for mapping
const features = [
  {
    icon: "/frame-5.svg",
    title: "24/7 Support",
    description:
      "Need help? Get your requests solved quickly via support team.",
  },
  {
    icon: "/frame-1.svg",
    title: "Community",
    description: "Join the conversations on our worldwide OKEx communities",
  },
  {
    icon: "/frame-3.svg",
    title: "Academy",
    description: "Learn blockchain and crypto for free.",
  },
];

export const MarketTrendsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 py-[72px] w-full">
      <div className="flex flex-col items-center gap-3 w-full">
        <p className="font-['DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px] leading-[21.6px]">
          <span className="text-[#ffffff] tracking-[-0.11px]">Always by </span>
          <span className="text-[#99e39e] tracking-[-0.11px]">your side</span>
        </p>

        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <h2 className="font-['DM_Sans',Helvetica] font-semibold text-[#ffffff] text-[40px] tracking-[-0.60px] leading-[48.0px]">
            Be the first to use our Chipup!
          </h2>

          <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base text-center tracking-[0] leading-[22.4px]">
            Get faster, safer, more affordable cloud object storage with <br />
            no centeral point of failure.
          </p>
        </div>
      </div>

      <Card className="w-full bg-[#ffffff0d] border-[#ffffff1a] shadow-[0px_12px_28px_#09090952] backdrop-blur-lg">
        <CardContent className="p-0">
          <div className="relative w-full h-[220px] overflow-hidden">
            <div className="relative w-full h-[215px] mt-2">
              <img
                className="absolute w-full h-[196px] top-3.5 left-0"
                alt="Vector"
                src="/vector-1.svg"
              />

              <img
                className="absolute w-full h-[201px] top-3.5 left-0"
                alt="Vector"
                src="/vector.svg"
              />

              <div className="flex justify-center w-full absolute top-0">
                <div className="flex items-center justify-between max-w-[996px] w-full">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-5 w-60"
                    >
                      <div className="p-4 inline-flex items-center gap-2 bg-[#ffffff1a] rounded-[999px] backdrop-blur-[10px]">
                        <img
                          className="w-8 h-8"
                          alt={`${feature.title} icon`}
                          src={feature.icon}
                        />
                      </div>

                      <div className="flex flex-col items-center justify-center gap-2 w-full">
                        <h3 className="font-['DM_Sans',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.12px] leading-[24.0px]">
                          {feature.title}
                        </h3>

                        <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base text-center tracking-[0] leading-[22.4px]">
                          {feature.description.includes("<br />")
                            ? feature.description
                                .split("<br />")
                                .map((line, i) => (
                                  <React.Fragment key={i}>
                                    {line}
                                    {i === 0 && <br />}
                                  </React.Fragment>
                                ))
                            : feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};