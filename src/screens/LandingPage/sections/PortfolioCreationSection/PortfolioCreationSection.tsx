import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PortfolioCreationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2 py-[72px]">
      <Card className="w-full max-w-[1200px] bg-[#ffffff0d] border-[#ffffff1a] shadow-[0px_12px_28px_#09090952] backdrop-blur-[3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3px)_brightness(100%)] overflow-hidden">
        <CardContent className="flex items-center justify-between p-16 relative">
          <div className="flex flex-col items-start gap-3">
            <h2 className="font-['DM_Sans',Helvetica] font-semibold text-[#ffffff] text-[40px] tracking-[-0.60px] leading-[48.0px]">
              Chipup powered by framer platform
            </h2>
            <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base leading-[22.4px]">
              Our landing page empower framer developers to have free, safer{" "}
              <br />
              and more trustworthy experiences
            </p>
          </div>

          <Button className="bg-main-colour text-bg rounded-xl px-6 py-[13px] h-auto flex items-center gap-2">
            <span className="font-['DM_Sans',Helvetica] font-semibold text-base tracking-[-0.60px] leading-[22.4px]">
              Get template
            </span>
            <img className="w-5 h-5" alt="Frame" src="/frame-22.svg" />
          </Button>

          <div className="absolute w-[521px] h-[521px] -top-36 left-[795px] rotate-[-8.41deg] opacity-5">
            <img
              className="absolute w-[403px] h-[232px] top-[136px] left-0.5 rotate-[8.41deg]"
              alt="Group"
              src="/group-78-1.png"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};