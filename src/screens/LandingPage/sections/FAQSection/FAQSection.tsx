import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../../components/ui/accordion';

export const FAQSection = (): JSX.Element => {
  const faqItems = [
    {
      question: 'What is this app for?',
      answer: 'This app helps you manage home poker games by tracking players, scores, payments, and game history.',
    },
    {
      question: 'Is the app free to use?',
      answer: 'No, the app requires a one-time payment of $20 for full access to all features.',
    },
    {
      question: 'Can I invite my friends to join my poker group?',
      answer: 'Absolutely. You can create private groups and invite your friends to manage games together.',
    },
    {
      question: 'How is player data secured?',
      answer: 'All data is stored securely and is only accessible to members of each private group.',
    },
    {
      question: 'Do I need to be online to use the app?',
      answer: 'An internet connection is required to sync and save your game data across devices.',
    },
    {
      question: 'Can I track multiple poker groups?',
      answer: 'Yes, you can create and manage as many separate groups as you like.',
    },
    {
      question: 'Does the app handle payment transfers?',
      answer: 'No, the app helps track debts and balances but does not handle actual money transfers.',
    },
    {
      question: 'Is this app available on mobile?',
      answer: 'Yes, the app is available on all platforms including web, iOS, and Android.',
    },
  ];

  return (
    <section id="faqs" className="flex flex-col items-center gap-10 py-[72px] w-full max-w-[1204px] mx-auto">
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="font-['DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px]">
          <span className="text-white tracking-[-0.11px] leading-[25.2px]">Popular </span>
          <span className="text-[#99e39e] tracking-[-0.11px] leading-[25.2px]">questions</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <h2 className="font-['DM_Sans',Helvetica] font-semibold text-white text-[40px] tracking-[-0.60px] leading-[48.0px]">
            Learn more about Chipup
          </h2>
          <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base text-center tracking-[0] leading-[22.4px]">
            We accept 100+ cryptocurrencies around the world
          </p>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-[992px] space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-[#ffffff0d] rounded-2xl border border-[#ffffff1a] shadow-[0px_8px_24px_#09090940] backdrop-blur-lg overflow-hidden transition-all duration-300 hover:bg-[#ffffff12] hover:border-[#ffffff25] hover:shadow-[0px_12px_32px_#09090960]"
          >
            <AccordionTrigger className="px-8 py-6 hover:no-underline group transition-all duration-300 [&[data-state=open]]:pb-4">
              <span className="font-['DM_Sans',Helvetica] font-medium text-white text-xl tracking-[-0.12px] leading-7 text-left group-hover:text-[#99e39e] transition-colors duration-300">
                {item.question}
              </span>
              <div className="ml-4 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#ffffff66] group-hover:text-[#99e39e] transition-colors duration-300"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-6 pt-2 transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="border-t border-[#ffffff1a] pt-4">
                <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[-0.12px] leading-7 text-left">
                  {item.answer}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
