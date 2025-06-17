import React from 'react';
import { Card, CardContent } from '../../../../components/ui/card';

// Feature data for mapping
const features = [
  {
    id: 1,
    title: 'Player & Game Management',
    description: "Easily create groups, track who's in, and log results after every game.",
    iconSrc: '/frame-19.svg',
    position: 'top-[155px] left-[734px]',
    alignment: 'items-start',
    textAlignment: 'text-left',
  },
  {
    id: 2,
    title: 'Private & Secure',
    description: 'Each group is private. Only invited players can view or edit data.',
    iconSrc: '/frame-23.svg',
    position: 'top-[509px] left-[722px]',
    alignment: 'items-start',
    textAlignment: 'text-left',
  },
  {
    id: 3,
    title: 'Smart Payment Tracking',
    description: 'Record buy-ins, cash-outs, debts, and see who owes who – instantly.',
    iconSrc: '/frame-24.svg',
    position: 'top-[443px] left-[70px]',
    alignment: 'items-start flex-row-reverse',
    textAlignment: 'text-right',
  },
  {
    id: 4,
    title: 'Detailed Stats',
    description: 'View player rankings, average wins/losses, trends over time, and more.',
    iconSrc: '/frame-21.svg',
    position: 'top-[191px] left-0',
    alignment: 'items-start flex-row-reverse',
    textAlignment: 'text-right',
  },
];

export const ApplicationOverviewSection = (): JSX.Element => {
  return (
    <section id="services" className="flex flex-col items-center justify-center gap-10 py-[72px] w-full">
      <header className="flex flex-col items-center gap-3 w-full">
        <p className="font-['DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px] leading-[21.6px]">
          <span className="text-white tracking-[-0.11px]"> We deliver </span>
          <span className="text-[#99e39e] tracking-[-0.11px]">best solution</span>
        </p>

        <h2 className="font-['DM_Sans',Helvetica] font-semibold text-white text-[40px] text-center tracking-[-0.60px] leading-[48.0px]">
          One application with multiple options to give
          <br />
          you freedom of buying &amp; selling
        </h2>
      </header>

      <div className="relative w-full h-[840px]">
        <div className="relative w-[1058px] h-[708px] mx-auto">
          <div className="absolute w-[690px] h-[708px] top-0 left-[167px]">
            <div className="relative h-[708px]">
              <div className="absolute w-[690px] h-[690px] top-0 left-0">
                <div className="relative h-[690px] rounded-[345px]">
                  <div className="absolute w-[510px] h-[510px] top-[90px] left-[90px] rounded-[254.97px] border-[3.48px] border-solid border-[#ffffff1a]" />
                  <div className="absolute w-[602px] h-[602px] top-11 left-11 rounded-[300.93px] border-[3.48px] border-solid border-[#ffffff1a] opacity-60" />
                  <div className="absolute w-[690px] h-[690px] top-0 left-0 rounded-[345px] border-[3.48px] border-solid border-[#ffffff1a] opacity-40" />
                </div>
              </div>

              <img
                className="absolute w-[331px] h-[675px] top-[33px] left-[178px]"
                alt="iPhone displaying the application"
                src="/iphone-16-teal.png"
              />
            </div>
          </div>

          {features.map((feature) => (
            <Card
              key={feature.id}
              className={`inline-flex gap-3 absolute ${feature.position} bg-transparent border-none shadow-none`}
            >
              <CardContent className={`flex ${feature.alignment} gap-3 p-0`}>
                {feature.textAlignment === 'text-left' ? (
                  <>
                    <div className="p-3 inline-flex items-center gap-2 bg-[#ffffff1a] rounded-[999px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                      <img className="w-6 h-6" alt={feature.title} src={feature.iconSrc} />
                    </div>
                    <div className="inline-flex flex-col items-start justify-center gap-0.5">
                      <h3 className="font-['DM_Sans',Helvetica] font-medium text-white text-xl tracking-[-0.12px] leading-[24.0px] whitespace-nowrap">
                        {feature.title}
                      </h3>
                      <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0] leading-[22.4px]">
                        {feature.description.split('<br />').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < feature.description.split('<br />').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="inline-flex flex-col items-start justify-center gap-0.5">
                      <h3
                        className={`font-['DM_Sans',Helvetica] font-medium text-white text-xl tracking-[-0.12px] leading-[24.0px] ${feature.textAlignment}`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0] leading-[22.4px] ${feature.textAlignment}`}
                      >
                        {feature.description.split('<br />').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < feature.description.split('<br />').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                    <div className="p-3 inline-flex items-center gap-2 bg-[#ffffff1a] rounded-[999px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                      <img className="w-6 h-6" alt={feature.title} src={feature.iconSrc} />
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
