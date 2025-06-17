import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CryptoUpdatesSection = (): JSX.Element => {
  // Data for the stats cards
  const statsData = [
    { value: "6M+", label: "Active users" },
    { value: "24/7", label: "Users support" },
    { value: "160+", label: "Countries" },
    { value: "$22B+", label: "Trade volume" },
  ];

  return (
    <section className="py-[72px] w-full">
      <div className="container px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="bg-[#ffffff0d] border-[#ffffff1a] rounded-2xl"
            >
              <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                <p className="font-medium text-[32px] text-main-colour tracking-[-0.19px] leading-[38.4px] [font-family:'DM_Sans',Helvetica]">
                  {stat.value}
                </p>
                <p className="font-normal text-base text-[#ffffffcc] tracking-[-0.10px] leading-[19.2px] [font-family:'DM_Sans',Helvetica]">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
