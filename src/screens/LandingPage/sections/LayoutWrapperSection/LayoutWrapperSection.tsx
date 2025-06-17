import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';

export const LayoutWrapperSection = (): JSX.Element => {
  const handleScrollToSubscribe = () => {
    const subscribeSection = document.getElementById('subscribe');
    if (subscribeSection) {
      subscribeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="flex items-start justify-between py-[72px] px-0 w-full">
      <div className="flex flex-col w-full max-w-[588px] items-start gap-10">
        <div className="flex flex-col items-start gap-3 w-full">
          <Badge
            variant="outline"
            className="bg-[#99e39e1a] text-main-colour border-[#ffffff1a] px-4 py-1.5 rounded-full"
          >
            <span className="font-medium [font-family:'DM_Sans',Helvetica] text-base tracking-[-0.60px] leading-[19.2px]">
              Future of crypto trading
            </span>
          </Badge>

          <h1 className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-7xl tracking-[-0.60px] leading-[86.4px]">
            Your Poker Nights. Organized, Smart, and Hassle-Free.
          </h1>

          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffffcc] text-base tracking-[0] leading-[22.4px]">
            Manage your home poker games like a pro – players, scores, payments, and stats – all in one sleek app.
          </p>
        </div>

        <Button
          onClick={handleScrollToSubscribe}
          className="bg-main-colour text-bg hover:bg-main-colour/90 px-6 py-[13px] rounded-xl"
        >
          <span className="font-semibold [font-family:'DM_Sans',Helvetica] text-base tracking-[-0.60px] leading-[22.4px]">
            Join Now
          </span>
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="relative w-[584px] h-[582px] bg-[url(/layer-51-2.png)] bg-[100%_100%]">
        {/* Percentage Card */}
        <div className="flex w-[114px] h-[114px] items-center justify-center gap-[5.43px] absolute top-[51px] left-[355px] bg-[#ffffff1a] rounded-lg shadow-[0px_4.07px_6.79px_#0000001f] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
          <div className="relative w-[72.57px] h-[70.57px]">
            <div className="relative w-[118px] h-[118px] top-[-18px] -left-6">
              <img className="absolute w-[62px] h-[62px] top-[22px] left-7" alt="Ellipse" src="/ellipse-17-1.svg" />

              <img className="absolute w-[118px] h-[118px] top-0 left-0" alt="Ellipse" src="/ellipse-18.svg" />

              <div className="absolute top-[45px] left-[45px] font-semibold text-[#ffffff] text-[11.4px] tracking-[-0.23px] leading-[15.9px] [font-family:'DM_Sans',Helvetica] whitespace-nowrap">
                +75%
              </div>
            </div>
          </div>
        </div>

        {/* Credit Card */}
        <div className="absolute w-[228px] h-36 top-[271px] left-2 bg-bg rounded-[12.17px] bg-[url(/mask.png)] bg-[100%_100%]">
          <div className="absolute w-[196px] h-[15px] top-3 left-[13px]">
            <img className="absolute w-[31px] h-[9px] top-0.5 left-[165px]" alt="Visa" src="/visa.png" />

            <img className="absolute w-3 h-[15px] top-0 left-0" alt="Subtract" src="/subtract.svg" />
          </div>

          <div className="absolute w-6 h-[18px] top-28 left-[186px] bg-[#ffffff42] rounded-[2.94px] border-[0.57px] border-solid border-[#ffffff] opacity-70">
            <img className="absolute w-2 h-3 top-[5px] left-0" alt="Vector" src="/vector-2-1.svg" />

            <img className="absolute w-2 h-[17px] top-0 left-[15px]" alt="Vector" src="/vector-1-1.svg" />
          </div>
        </div>

        {/* Circular Text Element */}
        <div className="absolute w-[210px] h-24 top-6 left-6">
          <div className="relative w-24 h-24">
            {/* Circular text - preserving all the individual letter elements */}
            <div className="absolute w-1 h-[7px] top-0 left-12 rotate-[3.10deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
              J
            </div>

            <div className="absolute w-1 h-[7px] top-px left-[53px] rotate-[9.28deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
              O
            </div>

            <div className="absolute w-24 h-[94px] top-px left-0">
              <div className="absolute w-1 h-[7px] top-0 left-[58px] rotate-[15.52deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                I
              </div>

              <div className="absolute w-[35px] h-[91px] top-px left-[61px]">
                <div className="absolute w-1 h-[7px] top-px left-px rotate-[21.76deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  N
                </div>

                <div className="absolute w-1 h-[7px] top-[3px] left-1.5 rotate-[28.00deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {''}
                </div>

                <div className="absolute w-1 h-[7px] top-[5px] left-2.5 rotate-[34.20deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  C
                </div>

                <div className="absolute w-1 h-[7px] top-2 left-[13px] rotate-[40.38deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  H
                </div>

                <div className="absolute w-1 h-[7px] top-[11px] left-[17px] rotate-[46.55deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  I
                </div>

                <div className="absolute w-1 h-[7px] top-[15px] left-5 rotate-[52.72deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  P
                </div>

                <div className="absolute w-1 h-[7px] top-[19px] left-[23px] rotate-[58.91deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  U
                </div>

                <div className="top-[23px] left-[25px] rotate-[65.14deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  P
                </div>

                <div className="top-7 left-[27px] rotate-[71.37deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {''}
                </div>

                <div className="top-8 left-7 rotate-[77.65deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  T
                </div>

                <div className="absolute w-1 h-[7px] top-[37px] left-[29px] rotate-[83.82deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  R
                </div>

                <div className="absolute w-1 h-[7px] top-[42px] left-[29px] rotate-[90.02deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  E
                </div>

                <div className="top-[47px] left-[29px] rotate-[96.21deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  N
                </div>

                <div className="absolute w-1 h-[7px] top-[51px] left-7 rotate-[102.39deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  D
                </div>

                <div className="absolute w-1 h-[7px] top-14 left-[27px] rotate-[108.67deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  S
                </div>

                <div className="top-[60px] left-[25px] rotate-[114.90deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {''}
                </div>

                <div className="top-[65px] left-[23px] rotate-[121.12deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  E
                </div>

                <div className="top-[69px] left-5 rotate-[127.31deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  X
                </div>

                <div className="absolute w-1 h-[7px] top-[72px] left-[17px] rotate-[133.49deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  P
                </div>

                <div className="absolute w-1 h-[7px] top-[75px] left-[13px] rotate-[139.65deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  L
                </div>

                <div className="top-[78px] left-2.5 rotate-[145.84deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  O
                </div>

                <div className="absolute w-1 h-[7px] top-[81px] left-1.5 rotate-[152.03deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  R
                </div>

                <div className="top-[83px] left-px rotate-[158.28deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  E
                </div>
              </div>

              <div className="top-[86px] left-[58px] rotate-[164.52deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                {''}
              </div>

              <div className="absolute w-1 h-[7px] top-[86px] left-[34px] rotate-[-164.44deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                I
              </div>

              <div className="absolute w-[35px] h-[91px] top-px left-0">
                <div className="top-[83px] left-[29px] rotate-[-158.21deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  N
                </div>

                <div className="top-[81px] left-[25px] rotate-[-151.96deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {''}
                </div>

                <div className="absolute w-1 h-[7px] top-[78px] left-[21px] rotate-[-145.77deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  C
                </div>

                <div className="absolute w-1 h-[7px] top-[75px] left-[17px] rotate-[-139.58deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  H
                </div>

                <div className="absolute w-1 h-[7px] top-[72px] left-3.5 rotate-[-133.41deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  I
                </div>

                <div className="top-[69px] left-2.5 rotate-[-127.24deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  P
                </div>

                <div className="absolute w-1 h-[7px] top-[65px] left-2 rotate-[-121.05deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  U
                </div>

                <div className="top-[60px] left-1.5 rotate-[-114.83deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  P
                </div>

                <div className="top-14 left-1 rotate-[-108.59deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {''}
                </div>

                <div className="top-[51px] left-0.5 rotate-[-102.32deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  T
                </div>

                <div className="absolute w-1 h-[7px] top-[47px] left-0.5 rotate-[-96.14deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  R
                </div>

                <div className="top-[42px] left-px rotate-[-89.95deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  E
                </div>

                <div className="top-[37px] left-0.5 rotate-[-83.75deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  N
                </div>

                <div className="absolute w-1 h-[7px] top-8 left-[3px] rotate-[-77.57deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  D
                </div>

                <div className="absolute w-1 h-[7px] top-7 left-1 rotate-[-71.30deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  S
                </div>

                <div className="top-[23px] left-1.5 rotate-[-65.07deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {''}
                </div>

                <div className="top-[19px] left-2 rotate-[-58.84deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  E
                </div>

                <div className="top-[15px] left-[11px] rotate-[-52.65deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  X
                </div>

                <div className="absolute w-1 h-[7px] top-[11px] left-3.5 rotate-[-46.48deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  P
                </div>

                <div className="absolute w-1 h-[7px] top-2 left-[17px] rotate-[-40.31deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  L
                </div>

                <div className="top-[5px] left-[21px] rotate-[-34.12deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  O
                </div>

                <div className="absolute w-1 h-[7px] top-[3px] left-[25px] rotate-[-27.93deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  R
                </div>

                <div className="top-px left-[29px] rotate-[-21.69deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                  E
                </div>
              </div>

              <div className="top-0 left-[34px] rotate-[-15.45deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                {''}
              </div>

              <img className="absolute w-9 h-[38px] top-8 left-[30px]" alt="Vector" src="/vector-2.svg" />
            </div>

            <div className="absolute w-1 h-[7px] top-[88px] left-[53px] rotate-[170.76deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
              •
            </div>

            <div className="top-[89px] left-12 rotate-[176.94deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
              {''}
            </div>

            <div className="absolute w-1 h-[7px] top-[89px] left-[43px] rotate-[-176.87deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
              J
            </div>

            <div className="top-[88px] left-[39px] rotate-[-170.69deg] absolute w-1 h-[7px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
              O
            </div>

            <div className="absolute w-1 h-[7px] top-px left-[39px] rotate-[-9.21deg] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-[7.3px] tracking-[0] leading-[normal] whitespace-nowrap">
              •
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
