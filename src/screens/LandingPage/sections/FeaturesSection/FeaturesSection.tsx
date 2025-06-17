import React from 'react';
import { Card, CardContent } from '../../../../components/ui/card';

export const FeaturesSection = (): JSX.Element => {
  // Data for partner logos
  const partnerLogos = [
    {
      id: 1,
      src: '/group-81.png',
      alt: 'Partner logo 1',
      width: '187px',
      height: '31px',
    },
    {
      id: 2,
      src: '/group-80.png',
      alt: 'Partner logo 2',
      width: '130px',
      height: '31px',
    },
    {
      id: 3,
      src: '/group-79.png',
      alt: 'Partner logo 3',
      width: '130px',
      height: '31px',
    },
    {
      id: 4,
      src: '/logo-7.svg',
      alt: 'Partner logo 4',
      width: '124px',
      height: '32px',
    },
    {
      id: 5,
      src: '/logo-28.svg',
      alt: 'Partner logo 5',
      width: '117px',
      height: '32px',
    },
  ];

  return (
    <section id="features" className="flex flex-col items-center gap-8 py-[72px] w-full">
      <div className="flex flex-col items-center gap-10 w-full">
        <h3 className="w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px] leading-[21.6px]">
          <span className="text-[#ffffff] tracking-[-0.11px]">Trusted by top </span>
          <span className="text-[#99e39e] tracking-[-0.11px]">crypto platforms</span>
        </h3>

        <Card className="border-0 bg-transparent w-full">
          <CardContent className="p-0 relative">
            <div className="flex items-center justify-center gap-[72px] w-full">
              {partnerLogos.map((logo) => (
                <div key={logo.id} className="relative h-8" style={{ width: logo.width }}>
                  <img className="h-full" style={{ width: logo.width }} alt={logo.alt} src={logo.src} />
                </div>
              ))}
              <div className="absolute w-full h-8 top-0 left-0 [background:linear-gradient(90deg,rgba(0,5,16,1)_0%,rgba(0,5,16,0)_50%,rgba(0,5,16,1)_100%)]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
