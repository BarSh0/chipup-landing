import { CheckIcon } from 'lucide-react';
import React from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Card, CardContent } from '../../../../components/ui/card';

// Feature list data for the two columns
const leftFeatures = ['100% secure', 'A fraction of the cost', 'More durable', 'Easier to use'];

const rightFeatures = [
  'Free figma file',
  'Powerful in performance',
  'Designed for crypto',
  '100% free framer template',
];

// Chart months data
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'];

// Bar chart data for the small card
const barChartHeights = ['26px', '40px', '48px', '40px', '69px', '63px', '54px'];

export const UserFeedbackSection = (): JSX.Element => {
  return (
    <section id="benefits" className="flex flex-col md:flex-row items-center justify-between py-[72px] w-full gap-8">
      {/* Left side - Text and features */}
      <div className="flex flex-col w-full md:w-1/2 items-start gap-10">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="[font-family:'DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px] leading-[21.6px]">
            <span className="text-[#ffffff] tracking-[-0.11px]">Chipup </span>
            <span className="text-[#99e39e] tracking-[-0.11px]">upgrade</span>
          </div>

          <div className="flex flex-col items-start gap-3 w-full">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#ffffff] text-[40px] tracking-[-0.60px] leading-[48.0px]">
              Upgrade your crypto business
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0] leading-[22.4px]">
              Get faster, safer, more affordable cloud object storage with <br />
              no centeral point of failure.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-10 w-full">
          <div className="flex flex-col items-start gap-5">
            {leftFeatures.map((feature, index) => (
              <div key={`left-${index}`} className="flex items-center gap-3 w-full">
                <div className="flex items-center justify-center w-5 h-5">
                  <CheckIcon className="w-5 h-5 text-[#99e39e]" />
                </div>
                <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-base tracking-[-0.10px] leading-[19.2px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-5">
            {rightFeatures.map((feature, index) => (
              <div key={`right-${index}`} className="flex items-center gap-3 w-full">
                <div className="flex items-center justify-center w-5 h-5">
                  <CheckIcon className="w-5 h-5 text-[#99e39e]" />
                </div>
                <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-base tracking-[-0.10px] leading-[19.2px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Charts and data visualization */}
      <div className="relative w-full md:w-1/2 h-[517px]">
        <div className="relative w-full h-[517px]">
          {/* Main chart card */}
          <Card className="flex flex-col w-full sm:w-[522px] items-start gap-8 p-8 absolute top-[85px] left-0 sm:left-[27px] bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff1a] shadow-[0px_12px_28px_#09090952] backdrop-blur-lg">
            <CardContent className="p-0 w-full">
              <div className="flex w-full sm:w-[301px] items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <div className="inline-flex items-center gap-3">
                    <img className="w-7 h-7" alt="Bitcoin icon" src="/group-83-3.png" />
                    <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#ffffff] text-xl tracking-[-0.60px] leading-[24.0px]">
                      USD/BTC
                    </span>
                  </div>
                  <img className="w-5 h-5" alt="Dropdown icon" src="/frame-41.svg" />
                </div>

                <div className="flex flex-col w-[77px] items-start">
                  <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[0] leading-[19.6px]">
                    24h Volume
                  </span>
                  <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-[22.4px]">
                    96.24 BTC
                  </span>
                </div>
              </div>

              <div className="inline-flex flex-col items-start gap-3 mt-8 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  {/* Price grid lines */}
                  {['$38K', '$36K', '$34K', '$32K', '$30K'].map((price, index) => (
                    <div key={index} className="inline-flex items-center gap-4 w-full">
                      <img className="w-full sm:w-[413px] h-px object-cover" alt="Grid line" src="/line-6.svg" />
                      <span className="w-10 [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff66] text-sm tracking-[0] leading-[19.6px]">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex w-full sm:w-[413px] items-center justify-between">
                  {months.map((month, index) => (
                    <span
                      key={index}
                      className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff66] text-sm tracking-[0] leading-[19.6px]"
                    >
                      {month}
                    </span>
                  ))}
                </div>

                {/* Chart visualization */}
                <div className="relative w-full sm:w-[416px] h-[125px] mt-4">
                  <div className="absolute w-[363px] h-[125px] top-0 left-0">
                    <div className="absolute w-[363px] h-[114px] top-[11px] left-0">
                      {/* Chart bars - keeping the original implementation for accuracy */}
                      <div className="inline-flex flex-col items-center justify-center absolute top-[52px] left-[5px]">
                        <div className="relative w-px h-1.5 bg-main-colour" />
                        <div className="h-9 bg-main-colour relative w-2" />
                        <div className="relative w-px h-3.5 bg-main-colour" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-3 left-[27px]">
                        <div className="h-[18px] bg-main-colour relative w-px" />
                        <div className="relative w-2 h-6 bg-main-colour" />
                        <div className="relative w-px h-3.5 bg-main-colour" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-0 left-12">
                        <div className="relative w-px h-2 bg-main-colour" />
                        <div className="h-10 bg-main-colour relative w-2" />
                        <div className="relative w-px h-3.5 bg-main-colour" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-[21px] left-[70px]">
                        <div className="h-1.5 bg-[#ff6961] relative w-px" />
                        <div className="h-10 bg-[#ff6961] relative w-2" />
                        <div className="h-3.5 bg-[#ff6961] relative w-px" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-12 left-[90px]">
                        <div className="h-5 bg-[#ff6961] relative w-px" />
                        <div className="h-5 bg-[#ff6961] relative w-2" />
                        <div className="h-[9px] bg-[#ff6961] relative w-px" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-[15px] left-[132px]">
                        <div className="h-3 bg-main-colour relative w-px" />
                        <div className="h-[29px] bg-main-colour relative w-2" />
                        <div className="h-[25px] bg-main-colour relative w-px" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-[23px] left-[153px]">
                        <div className="h-[21px] bg-[#ff6961] relative w-px" />
                        <div className="h-[21px] bg-[#ff6961] relative w-2" />
                        <div className="h-2 bg-[#ff6961] relative w-px" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-[7px] left-[174px]">
                        <div className="h-[11px] bg-main-colour relative w-px" />
                        <div className="h-[52px] bg-main-colour relative w-2" />
                        <div className="relative w-px h-2 bg-main-colour" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-[39px] left-[195px]">
                        <div className="h-[11px] bg-[#ff6961] relative w-px" />
                        <div className="h-[30px] bg-[#ff6961] relative w-2" />
                        <div className="h-2 bg-[#ff6961] relative w-px" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-6 left-[237px]">
                        <div className="relative w-px h-1.5 bg-main-colour" />
                        <div className="h-[39px] bg-main-colour relative w-2" />
                        <div className="h-[15px] bg-main-colour relative w-px" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-[7px] left-[258px]">
                        <div className="relative w-px h-1.5 bg-main-colour" />
                        <div className="h-[35px] bg-main-colour relative w-2" />
                        <div className="h-[15px] bg-main-colour relative w-px" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-[5px] left-[301px]">
                        <div className="h-1.5 bg-[#ff6961] relative w-px" />
                        <div className="h-[39px] bg-[#ff6961] relative w-2" />
                        <div className="h-[15px] bg-[#ff6961] relative w-px" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-9 left-[318px]">
                        <div className="h-[11px] bg-[#ff6961] relative w-px" />
                        <div className="h-[30px] bg-[#ff6961] relative w-2" />
                        <div className="h-2 bg-[#ff6961] relative w-px" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-[29px] left-[217px]">
                        <div className="relative w-px h-2 bg-main-colour" />
                        <div className="h-[57px] bg-main-colour relative w-2" />
                        <div className="relative w-px h-2 bg-main-colour" />
                      </div>
                      <div className="inline-flex flex-col items-center justify-center absolute top-[47px] left-[111px]">
                        <div className="h-[13px] bg-[#ff6961] relative w-px" />
                        <div className="h-[42px] bg-[#ff6961] relative w-2" />
                        <div className="h-3 bg-[#ff6961] relative w-px" />
                      </div>
                      <img
                        className="absolute w-[363px] h-px top-[61px] left-0 object-cover"
                        alt="Line"
                        src="/line-6-4.svg"
                      />
                    </div>
                    <div className="inline-flex flex-col items-center justify-center absolute top-0 left-[279px]">
                      <div className="h-1 bg-main-colour relative w-px" />
                      <div className="relative w-2 h-6 bg-main-colour" />
                      <div className="h-[9px] bg-main-colour relative w-px" />
                    </div>
                  </div>
                  <Badge className="absolute top-[58px] left-[363px] bg-bg rounded-[999px] border border-solid border-[#ffffff33]">
                    <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-xs tracking-[0] leading-[16.8px]">
                      $34K
                    </span>
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Circular progress card */}
          <Card className="flex flex-col w-[181px] items-center justify-center gap-4 p-5 absolute top-0 right-0 sm:left-[381px] bg-[#ffffff0d] rounded-[10.71px] border-[0.67px] border-solid border-[#ffffff1a] shadow-[0px_8.03px_18.75px_#09090952] backdrop-blur-[10.71px]">
            <CardContent className="p-0 w-full">
              <div className="flex items-center justify-between w-full">
                <img className="w-6 h-6" alt="Crypto icon" src="/group-83-4.png" />
                <img className="w-5 h-5" alt="Menu icon" src="/frame.svg" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <div className="flex flex-col items-center gap-[5.93px]">
                  <div className="relative w-[113.19px] h-[92px]">
                    <div className="relative w-[111px] h-[92px]">
                      <div className="absolute top-[42px] left-[38px] font-semibold text-xl tracking-[-0.44px] leading-[24.0px] whitespace-nowrap [font-family:'DM_Sans',Helvetica] text-[#ffffff]">
                        78%
                      </div>
                      <img
                        className="absolute w-[111px] h-[92px] top-0 left-0"
                        alt="Progress background"
                        src="/ellipse-576.svg"
                      />
                      <img
                        className="absolute w-[99px] h-[92px] top-0 left-0"
                        alt="Progress indicator"
                        src="/ellipse-577.svg"
                      />
                    </div>
                  </div>
                  <div className="text-[#ffffff99] text-xs text-center tracking-[0] [font-family:'DM_Sans',Helvetica] font-normal leading-[16.8px] w-full">
                    2118 - 3000 %
                  </div>
                </div>

                <div className="flex items-center justify-center gap-6 w-full">
                  <div className="flex flex-col items-start">
                    <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-sm tracking-[0] leading-[19.6px]">
                      46%
                    </div>
                    <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-xs tracking-[0] leading-[16.8px]">
                      Growth
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-sm tracking-[0] leading-[19.6px]">
                      42
                    </div>
                    <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-xs tracking-[0] leading-[16.8px]">
                      Days
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly sales chart card */}
          <Card className="flex flex-col w-[230px] items-center justify-center gap-5 p-5 absolute top-[307px] left-0 bg-[#ffffff0d] rounded-[10.71px] border-[0.67px] border-solid border-[#ffffff1a] shadow-[0px_8.03px_18.75px_#09090952] backdrop-blur-[10.71px]">
            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col w-[113px] items-start gap-1">
                    <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff66] text-xs tracking-[0] leading-[16.8px]">
                      Montly sales charts
                    </div>
                    <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#ffffff] text-lg tracking-[-0.44px] leading-[21.6px]">
                      $76682.5
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <img className="w-4 h-4" alt="Trend up icon" src="/frame-26.svg" />
                    <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#99e39e] text-xs tracking-[0] leading-[16.8px]">
                      +2.45%
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <img className="w-3.5 h-3.5" alt="Check icon" src="/frame-2.svg" />
                  <div className="[font-family:'DM_Sans',Helvetica] font-medium text-main-colour text-xs tracking-[-0.44px] leading-[14.4px]">
                    On track
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full mt-5">
                {barChartHeights.map((height, index) => (
                  <div
                    key={index}
                    className="flex w-3 h-[85px] items-end bg-[#ffffff33] rounded-[999px] overflow-hidden"
                  >
                    <div className="relative flex-1 grow bg-main-colour rounded-[999px]" style={{ height }} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
