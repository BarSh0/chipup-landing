import React from 'react';
import { Card, CardContent } from '../../../../components/ui/card';
import { Separator } from '../../../../components/ui/separator';

export const UpgradeYourBusinessSection = (): JSX.Element => {
  // Cryptocurrency data for the cards
  const cryptoCards = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      percentChange: '7.68%',
      changeValue: '***',
      iconBg: '#f49b3333',
      iconSrc: '/group-83-2.png',
      position: 'top-[325px] left-[342px]',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      percentChange: '5.23%',
      changeValue: '***',
      iconBg: '#627eea33',
      iconSrc: '/group-45-2.png',
      iconPath: '/path-5-.svg',
      position: 'top-[219px] left-[113px]',
    },
  ];

  // Feature items data
  const features = [
    {
      icon: '/frame-30.svg',
      title: 'Manage your portfolio',
    },
    {
      icon: '/frame-39.svg',
      title: 'Vault protection',
    },
    {
      icon: '/frame-28.svg',
      title: 'Mobile apps',
    },
  ];

  return (
    <section
      id="why-chipup"
      className="flex flex-wrap items-center justify-between py-[72px] w-full max-w-[1202px] mx-auto"
    >
      {/* Left side - Crypto visualization */}
      <div className="relative w-full md:w-1/2 h-[500px]">
        <div className="relative w-full max-w-[486px] h-[500px]">
          <div className="relative w-[651px] h-[760px] top-[-124px] left-[-50px]">
            <img
              className="absolute w-[515px] h-[515px] top-0 left-[136px]"
              alt="Ellipse background"
              src="/ellipse-17.svg"
            />

            <img
              className="absolute w-[487px] h-[515px] top-[245px] left-0"
              alt="Ellipse background"
              src="/ellipse-18-1.svg"
            />

            <img
              className="absolute w-[257px] h-[257px] top-[366px] left-[246px]"
              alt="Cryptocurrency graphic"
              src="/group-58.png"
            />

            <img
              className="absolute w-[257px] h-[257px] top-[124px] left-[50px]"
              alt="Cryptocurrency graphic"
              src="/group-57.png"
            />

            {/* Bitcoin Card */}
            <Card className="absolute w-[194px] h-[212px] top-[325px] left-[342px] bg-[#ffffff0d] rounded-[14.11px] border-[0.88px] border-solid border-[#ffffff1a] shadow-[0px_10.58px_24.7px_#09090952] backdrop-blur-[14.11px]">
              <CardContent className="flex flex-col items-center justify-center gap-[28.23px] p-[42.34px]">
                <div className="flex flex-col w-[114.66px] items-center gap-[21.17px]">
                  <div className="flex flex-col items-center gap-[7.06px] w-full">
                    <div className="w-fit mt-[-0.88px] text-[21.2px] tracking-[-0.13px] leading-[25.4px] whitespace-nowrap [font-family:'DM_Sans',Helvetica] font-semibold text-[#ffffff]">
                      Bitcoin
                    </div>

                    <div className="inline-flex items-center gap-[3.53px]">
                      <div className="w-fit mt-[-0.88px] [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] text-[14.1px] tracking-[-0.53px] leading-[16.9px] whitespace-nowrap">
                        BTC
                      </div>

                      <div className="w-fit mt-[-0.88px] [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-[14.1px] tracking-[-0.53px] leading-[16.9px] whitespace-nowrap">
                        USD
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-[94.38px] items-center gap-[5.29px]">
                    <div className="self-stretch mt-[-0.88px] [font-family:'DM_Sans',Helvetica] font-semibold text-[#ffffff] text-[28.2px] text-center tracking-[-0.17px] leading-[33.9px]">
                      ******
                    </div>

                    <div className="w-fit font-medium text-[#99e39e] text-[12.3px] tracking-[0] leading-[17.3px] [font-family:'DM_Sans',Helvetica] whitespace-nowrap">
                      7.68% (***)
                    </div>
                  </div>
                </div>
              </CardContent>

              <div className="bg-[#f49b3333] inline-flex items-center gap-[7.06px] p-[10.58px] absolute top-[-35px] left-[66px] rounded-[881.15px]">
                <img className="w-[42.34px] h-[42.34px]" alt="Bitcoin icon" src="/group-83-2.png" />
              </div>

              <div className="inline-flex items-center gap-[7.06px] p-[10.58px] absolute top-[187px] left-[76px] bg-[#ffffff] rounded-[881.15px]">
                <img className="w-[21.17px] h-[21.17px]" alt="Action icon" src="/frame-27.svg" />
              </div>
            </Card>

            {/* Ethereum Card */}
            <Card className="absolute w-[194px] h-[212px] top-[219px] left-[113px] bg-[#ffffff0d] rounded-[14.11px] border-[0.88px] border-solid border-[#ffffff1a] shadow-[0px_10.58px_24.7px_#09090952] backdrop-blur-[14.11px]">
              <CardContent className="flex flex-col items-center justify-center gap-[28.23px] p-[42.34px]">
                <div className="flex flex-col w-[114.66px] items-center gap-[21.17px]">
                  <div className="flex flex-col items-center gap-[7.06px] w-full">
                    <div className="w-fit mt-[-0.88px] text-[21.2px] tracking-[-0.13px] leading-[25.4px] whitespace-nowrap [font-family:'DM_Sans',Helvetica] font-semibold text-[#ffffff]">
                      Ethereum
                    </div>

                    <div className="inline-flex items-center gap-[3.53px]">
                      <div className="w-fit mt-[-0.88px] [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] text-[14.1px] tracking-[-0.53px] leading-[16.9px] whitespace-nowrap">
                        ETH
                      </div>

                      <div className="w-fit mt-[-0.88px] [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-[14.1px] tracking-[-0.53px] leading-[16.9px] whitespace-nowrap">
                        USD
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-[94.38px] items-center gap-[5.29px]">
                    <div className="self-stretch mt-[-0.88px] [font-family:'DM_Sans',Helvetica] font-semibold text-[#ffffff] text-[28.2px] text-center tracking-[-0.17px] leading-[33.9px]">
                      ******
                    </div>

                    <div className="w-fit font-medium text-[#99e39e] text-[12.3px] tracking-[0] leading-[17.3px] [font-family:'DM_Sans',Helvetica] whitespace-nowrap">
                      5.23% (***)
                    </div>
                  </div>
                </div>
              </CardContent>

              <div className="bg-[#627eea33] inline-flex items-center gap-[7.06px] p-[10.58px] absolute top-[-35px] left-[66px] rounded-[881.15px]">
                <div className="relative w-[42.34px] h-[42.34px]">
                  <div className="w-[42px] h-[42px]">
                    <div className="h-[42px]">
                      <div className="w-[42px] h-[42px]">
                        <div className="h-[42px]">
                          <div className="w-[42px] h-[42px]">
                            <div className="relative h-[42px] bg-[url(/group-45-2.png)] bg-[100%_100%]">
                              <img
                                className="absolute w-2.5 h-2.5 top-[17px] left-3"
                                alt="Ethereum symbol"
                                src="/path-5-.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-[7.06px] p-[10.58px] absolute top-[187px] left-[76px] bg-[#ffffff] rounded-[881.15px]">
                <img className="w-[21.17px] h-[21.17px]" alt="Action icon" src="/frame-27.svg" />
              </div>
            </Card>

            {/* Avalanche Card */}
            <Card className="flex w-[106px] h-[106px] items-center justify-center gap-[7.06px] p-[21.17px] absolute top-[162px] left-[342px] bg-[#e8414233] rounded-[14.11px] border border-solid backdrop-blur-[8.82px]">
              <CardContent className="p-0 flex items-center justify-center">
                <img className="w-[49.36px] h-[49.39px]" alt="Avalanche AVAX logo" src="/avalanche-avax-logo-1.svg" />
              </CardContent>
            </Card>

            {/* Polkadot Card */}
            <Card className="flex w-[106px] h-[106px] items-center justify-center gap-[7.06px] p-[21.17px] absolute top-[469px] left-[201px] bg-[#e6007a33] rounded-[14.11px] border border-solid backdrop-blur-[2.65px]">
              <CardContent className="p-0 flex items-center justify-center">
                <div className="relative w-[49.39px] h-[49.39px]">
                  <img className="absolute w-[49px] h-[47px] top-px left-0" alt="Polkadot logo" src="/group-84-1.png" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col w-full md:w-[585px] items-start gap-10 pl-8 pr-0 py-0">
        {/* Heading section */}
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="w-full mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px] leading-[21.6px]">
            <span className="text-[#ffffff] tracking-[-0.11px]">Crypto landing page </span>
            <span className="text-[#99e39e] tracking-[-0.11px]">template</span>
          </div>

          <h2 className="w-fit [font-family:'DM_Sans',Helvetica] font-semibold text-[#ffffff] text-[40px] tracking-[-0.60px] leading-[48.0px]">
            Create your cryptocurrency <br />
            portfolio today
          </h2>

          <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0] leading-[22.4px]">
            Coinbase has a variety of features that make it the best place <br />
            to start trading.
          </p>
        </div>

        {/* Features section */}
        <div className="flex flex-col items-start gap-5 w-full">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-4 w-full">
                <div className="p-3 inline-flex items-center gap-2 bg-[#ffffff1a] rounded-[999px] backdrop-blur-[10px]">
                  <img className="w-6 h-6" alt={feature.title} src={feature.icon} />
                </div>
                <div className="w-fit [font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.12px] leading-[24.0px] whitespace-nowrap">
                  {feature.title}
                </div>
              </div>
              {index < features.length - 1 && (
                <Separator className="w-full h-px bg-transparent" style={{ backgroundImage: 'url(/line-2.svg)' }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
