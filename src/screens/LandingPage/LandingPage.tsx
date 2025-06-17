import React from 'react';
import { ApplicationOverviewSection } from './sections/ApplicationOverviewSection/ApplicationOverviewSection';
import { CallToActionSection } from './sections/CallToActionSection';
import { CryptoUpdatesSection } from './sections/CryptoUpdatesSection';
import { FAQSection } from './sections/FAQSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { HeroSection } from './sections/HeroSection';
import { LayoutWrapperSection } from './sections/LayoutWrapperSection';
import { MainContentSection } from './sections/MainContentSection';
import { MarketTrendsSection } from './sections/MarketTrendsSection/MarketTrendsSection';
import { NavigationSection } from './sections/NavigationSection';
import { PortfolioCreationSection } from './sections/PortfolioCreationSection';
import { PricingSection } from './sections/PricingSection';
import { QuotesSection } from './sections/QuotesSection';
import { SubscribeSection } from './sections/SubscribeSection';
import { UpgradeYourBusinessSection } from './sections/UpgradeYourBusinessSection';
import { UserFeedbackSection } from './sections/UserFeedbackSection';
import { BackToTopButton } from '../../components/BackToTopButton';

export const LandingPage = (): JSX.Element => {
  return (
    <main className="bg-bg w-full min-h-screen">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col w-full px-[50px]">
          <MainContentSection />
          <LayoutWrapperSection />
          <NavigationSection />
          <HeroSection />
          <ApplicationOverviewSection />
          <FeaturesSection />
          <CryptoUpdatesSection />
          <MarketTrendsSection />
          <PortfolioCreationSection />
          <UpgradeYourBusinessSection />
          <UserFeedbackSection />
          <QuotesSection />
          <PricingSection />
          <FAQSection />
          <SubscribeSection />
          <CallToActionSection />
        </div>
      </div>
      <BackToTopButton />
    </main>
  );
};
