import React from 'react';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

export const PricingSection = (): JSX.Element => {
  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'Forever',
      description: 'Perfect for casual players',
      features: ['Limited games', 'Basic game tracking', 'Up to 5 players per game', 'Simple scoreboard'],
      limitations: ['No statistics', 'No ranking system', 'Limited game history'],
      buttonText: 'Get Started Free',
      buttonVariant: 'outline' as const,
      popular: false,
    },
    {
      name: 'Premium',
      price: '$20',
      period: 'One-time',
      description: 'For serious poker enthusiasts',
      features: [
        'Unlimited games',
        'Advanced statistics',
        'Player ranking system',
        'Detailed game history',
        'Performance analytics',
        'Export data',
        'Priority support',
      ],
      limitations: [],
      buttonText: 'Upgrade to Premium',
      buttonVariant: 'default' as const,
      popular: true,
    },
    {
      name: 'Early Access',
      price: '$16',
      originalPrice: '$20',
      period: 'One-time',
      discount: '20% OFF',
      description: 'Limited time early bird offer',
      features: [
        'Everything in Premium',
        'Exclusive early access',
        'Beta features preview',
        'Direct feedback channel',
        'Lifetime updates',
        'Special launch bonuses',
      ],
      limitations: [],
      buttonText: 'Claim Early Access',
      buttonVariant: 'premium' as const,
      popular: false,
    },
  ];

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
    <section id="pricing" className="flex flex-col items-center gap-10 py-[72px] w-full max-w-[1204px] mx-auto">
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="font-['DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px] leading-[21.6px]">
          <span className="text-white tracking-[-0.11px]">Choose your </span>
          <span className="text-[#99e39e] tracking-[-0.11px]">plan</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 w-full max-w-[800px]">
          <h2 className="font-['DM_Sans',Helvetica] font-semibold text-white text-[40px] text-center tracking-[-0.60px] leading-[48.0px]">
            Simple, transparent pricing
          </h2>
          <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base text-center tracking-[0] leading-[22.4px] max-w-[600px]">
            Start free and upgrade when you're ready. No hidden fees, no monthly subscriptions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1000px]">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`relative bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff1a] shadow-[0px_12px_28px_#09090952] backdrop-blur-lg transition-all duration-300 hover:bg-[#ffffff12] hover:border-[#ffffff25] hover:shadow-[0px_16px_40px_#09090970] ${
              plan.popular ? 'ring-2 ring-[#99e39e] ring-opacity-50' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#99e39e] text-[#000510] px-4 py-1 rounded-full text-sm font-semibold font-['DM_Sans',Helvetica]">
                  Most Popular
                </div>
              </div>
            )}

            {plan.discount && (
              <div className="absolute -top-4 -right-4">
                <div className="bg-gradient-to-r from-[#99e39e] to-[#7dd87f] text-[#000510] px-3 py-1 rounded-full text-xs font-bold font-['DM_Sans',Helvetica] shadow-lg">
                  {plan.discount}
                </div>
              </div>
            )}

            <CardContent className="p-8">
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-['DM_Sans',Helvetica] font-semibold text-white text-2xl tracking-[-0.12px] leading-7">
                    {plan.name}
                  </h3>
                  <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[0] leading-[19.6px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-['DM_Sans',Helvetica] font-bold text-white text-4xl tracking-[-0.60px] leading-[43.2px]">
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="font-['DM_Sans',Helvetica] font-medium text-[#ffffff66] text-xl line-through tracking-[-0.12px]">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="font-['DM_Sans',Helvetica] font-medium text-[#ffffff99] text-sm tracking-[0] leading-[19.6px]">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#99e39e33] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#99e39e"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="font-['DM_Sans',Helvetica] font-normal text-white text-sm tracking-[0] leading-[19.6px]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="flex flex-col gap-3 pt-2 border-t border-[#ffffff1a]">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-[#ffffff1a] rounded-full flex items-center justify-center flex-shrink-0">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 3L3 9M3 3L9 9"
                                stroke="#ffffff66"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff66] text-sm tracking-[0] leading-[19.6px]">
                            {limitation}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Button */}
                <Button
                  onClick={handleScrollToSubscribe}
                  className={`w-full h-12 rounded-xl font-semibold text-base tracking-[-0.60px] leading-[22.4px] font-['DM_Sans',Helvetica] transition-all duration-200 mt-4 ${
                    plan.buttonVariant === 'default'
                      ? 'bg-[#99e39e] hover:bg-[#99e39e]/90 text-[#000510]'
                      : plan.buttonVariant === 'premium'
                      ? 'bg-gradient-to-r from-[#99e39e] to-[#7dd87f] hover:from-[#99e39e]/90 hover:to-[#7dd87f]/90 text-[#000510]'
                      : 'bg-transparent border-2 border-[#ffffff33] hover:border-[#99e39e] hover:bg-[#99e39e]/10 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[600px] mt-8">
        <p className="text-[#ffffff66] text-sm text-center font-['DM_Sans',Helvetica] leading-[19.6px]">
          All plans include secure data storage and cross-platform sync
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#99e39e]"
            >
              <path
                d="M8 1L10.09 5.26L15 6L11 9.74L11.91 14.74L8 12.77L4.09 14.74L5 9.74L1 6L5.91 5.26L8 1Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-[#ffffff99] text-sm font-['DM_Sans',Helvetica]">30-day guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#99e39e]"
            >
              <path
                d="M8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1ZM8 2.5C4.962 2.5 2.5 4.962 2.5 8C2.5 11.038 4.962 13.5 8 13.5C11.038 13.5 13.5 11.038 13.5 8C13.5 4.962 11.038 2.5 8 2.5ZM8 4C8.414 4 8.75 4.336 8.75 4.75V7.25H11.25C11.664 7.25 12 7.586 12 8C12 8.414 11.664 8.75 11.25 8.75H8.75V11.25C8.75 11.664 8.414 12 8 12C7.586 12 7.25 11.664 7.25 11.25V8.75H4.75C4.336 8.75 4 8.414 4 8C4 7.586 4.336 7.25 4.75 7.25H7.25V4.75C7.25 4.336 7.586 4 8 4Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-[#ffffff99] text-sm font-['DM_Sans',Helvetica]">No hidden fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};
