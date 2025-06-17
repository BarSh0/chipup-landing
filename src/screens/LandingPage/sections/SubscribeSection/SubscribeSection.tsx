import React, { useState } from 'react';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

// List of countries with their flags for the select dropdown
const countries = [
  { name: 'Afghanistan', flag: '🇦🇫' },
  { name: 'Albania', flag: '🇦🇱' },
  { name: 'Algeria', flag: '🇩🇿' },
  { name: 'Argentina', flag: '🇦🇷' },
  { name: 'Armenia', flag: '🇦🇲' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Austria', flag: '🇦🇹' },
  { name: 'Azerbaijan', flag: '🇦🇿' },
  { name: 'Bahrain', flag: '🇧🇭' },
  { name: 'Bangladesh', flag: '🇧🇩' },
  { name: 'Belarus', flag: '🇧🇾' },
  { name: 'Belgium', flag: '🇧🇪' },
  { name: 'Bolivia', flag: '🇧🇴' },
  { name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { name: 'Brazil', flag: '🇧🇷' },
  { name: 'Bulgaria', flag: '🇧🇬' },
  { name: 'Cambodia', flag: '🇰🇭' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Chile', flag: '🇨🇱' },
  { name: 'China', flag: '🇨🇳' },
  { name: 'Colombia', flag: '🇨🇴' },
  { name: 'Costa Rica', flag: '🇨🇷' },
  { name: 'Croatia', flag: '🇭🇷' },
  { name: 'Czech Republic', flag: '🇨🇿' },
  { name: 'Denmark', flag: '🇩🇰' },
  { name: 'Dominican Republic', flag: '🇩🇴' },
  { name: 'Ecuador', flag: '🇪🇨' },
  { name: 'Egypt', flag: '🇪🇬' },
  { name: 'Estonia', flag: '🇪🇪' },
  { name: 'Ethiopia', flag: '🇪🇹' },
  { name: 'Finland', flag: '🇫🇮' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Georgia', flag: '🇬🇪' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'Ghana', flag: '🇬🇭' },
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'Guatemala', flag: '🇬🇹' },
  { name: 'Honduras', flag: '🇭🇳' },
  { name: 'Hong Kong', flag: '🇭🇰' },
  { name: 'Hungary', flag: '🇭🇺' },
  { name: 'Iceland', flag: '🇮🇸' },
  { name: 'India', flag: '🇮🇳' },
  { name: 'Indonesia', flag: '🇮🇩' },
  { name: 'Iran', flag: '🇮🇷' },
  { name: 'Iraq', flag: '🇮🇶' },
  { name: 'Ireland', flag: '🇮🇪' },
  { name: 'Israel', flag: '🇮🇱' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'Jordan', flag: '🇯🇴' },
  { name: 'Kazakhstan', flag: '🇰🇿' },
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'Kuwait', flag: '🇰🇼' },
  { name: 'Latvia', flag: '🇱🇻' },
  { name: 'Lebanon', flag: '🇱🇧' },
  { name: 'Lithuania', flag: '🇱🇹' },
  { name: 'Luxembourg', flag: '🇱🇺' },
  { name: 'Malaysia', flag: '🇲🇾' },
  { name: 'Mexico', flag: '🇲🇽' },
  { name: 'Morocco', flag: '🇲🇦' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'New Zealand', flag: '🇳🇿' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'Norway', flag: '🇳🇴' },
  { name: 'Pakistan', flag: '🇵🇰' },
  { name: 'Panama', flag: '🇵🇦' },
  { name: 'Peru', flag: '🇵🇪' },
  { name: 'Philippines', flag: '🇵🇭' },
  { name: 'Poland', flag: '🇵🇱' },
  { name: 'Portugal', flag: '🇵🇹' },
  { name: 'Qatar', flag: '🇶🇦' },
  { name: 'Romania', flag: '🇷🇴' },
  { name: 'Russia', flag: '🇷🇺' },
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'Slovakia', flag: '🇸🇰' },
  { name: 'Slovenia', flag: '🇸🇮' },
  { name: 'South Africa', flag: '🇿🇦' },
  { name: 'South Korea', flag: '🇰🇷' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Sri Lanka', flag: '🇱🇰' },
  { name: 'Sweden', flag: '🇸🇪' },
  { name: 'Switzerland', flag: '🇨🇭' },
  { name: 'Taiwan', flag: '🇹🇼' },
  { name: 'Thailand', flag: '🇹🇭' },
  { name: 'Turkey', flag: '🇹🇷' },
  { name: 'Ukraine', flag: '🇺🇦' },
  { name: 'United Arab Emirates', flag: '🇦🇪' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Uruguay', flag: '🇺🇾' },
  { name: 'Venezuela', flag: '🇻🇪' },
  { name: 'Vietnam', flag: '🇻🇳' },
];

interface FormData {
  fullName: string;
  email: string;
  country: string;
}

export const SubscribeSection = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    country: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.country) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Console log the form data
    console.log('Early Subscriber Form Data:', {
      fullName: formData.fullName,
      email: formData.email,
      country: formData.country,
      timestamp: new Date().toISOString(),
    });

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for subscribing! We'll keep you updated.");

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        country: '',
      });
    }, 1000);
  };

  return (
    <section id="subscribe" className="flex flex-col items-center gap-10 py-[72px] w-full max-w-[1204px] mx-auto">
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="font-['DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px] leading-[21.6px]">
          <span className="text-white tracking-[-0.11px]">Join the </span>
          <span className="text-[#99e39e] tracking-[-0.11px]">revolution</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 w-full max-w-[800px]">
          <h2 className="font-['DM_Sans',Helvetica] font-semibold text-white text-[40px] text-center tracking-[-0.60px] leading-[48.0px]">
            Be the first to experience the future of crypto trading
          </h2>
          <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base text-center tracking-[0] leading-[22.4px] max-w-[600px]">
            Get exclusive early access to Chipup's revolutionary platform. Join thousands of crypto enthusiasts who are
            already on the waitlist for the next generation of trading tools.
          </p>
        </div>
      </div>

      <Card className="w-full max-w-[600px] bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff1a] shadow-[0px_12px_28px_#09090952] backdrop-blur-lg">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="font-['DM_Sans',Helvetica] font-medium text-white text-sm tracking-[-0.10px] leading-[19.2px]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className="bg-[#ffffff1a] border border-[#ffffff33] text-white placeholder:text-[#ffffff66] focus:border-[#99e39e] focus:ring-2 focus:ring-[#99e39e] focus:outline-none rounded-xl h-12 px-4 font-['DM_Sans',Helvetica] transition-colors"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-['DM_Sans',Helvetica] font-medium text-white text-sm tracking-[-0.10px] leading-[19.2px]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-[#ffffff1a] border border-[#ffffff33] text-white placeholder:text-[#ffffff66] focus:border-[#99e39e] focus:ring-2 focus:ring-[#99e39e] focus:outline-none rounded-xl h-12 px-4 font-['DM_Sans',Helvetica] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Country Select */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="country"
                className="font-['DM_Sans',Helvetica] font-medium text-white text-sm tracking-[-0.10px] leading-[19.2px]"
              >
                Country
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="bg-[#ffffff1a] border border-[#ffffff33] text-white focus:border-[#99e39e] focus:ring-2 focus:ring-[#99e39e] focus:outline-none rounded-xl h-12 px-4 font-['DM_Sans',Helvetica] transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" disabled className="bg-[#000510] text-[#ffffff66]">
                  Select your country
                </option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name} className="bg-[#000510] text-white">
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#99e39e] hover:bg-[#99e39e]/90 text-[#000510] font-semibold text-base tracking-[-0.60px] leading-[22.4px] rounded-xl h-12 mt-4 font-['DM_Sans',Helvetica] transition-all duration-200"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#000510] border-t-transparent rounded-full animate-spin"></div>
                  Subscribing...
                </div>
              ) : (
                'Join Early Access'
              )}
            </Button>

            <p className="text-[#ffffff66] text-xs text-center font-['DM_Sans',Helvetica] leading-[16.8px] mt-2">
              By subscribing, you agree to receive updates about Chipup. You can unsubscribe at any time.
            </p>
          </form>
        </CardContent>
      </Card>

      {/* Additional benefits */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-[800px] mt-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#99e39e33] rounded-full flex items-center justify-center">
            <img className="w-4 h-4" alt="Early access icon" src="/frame-19.svg" />
          </div>
          <span className="font-['DM_Sans',Helvetica] font-medium text-white text-sm tracking-[-0.10px] leading-[19.2px]">
            Exclusive early access
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#99e39e33] rounded-full flex items-center justify-center">
            <img className="w-4 h-4" alt="Updates icon" src="/frame-23.svg" />
          </div>
          <span className="font-['DM_Sans',Helvetica] font-medium text-white text-sm tracking-[-0.10px] leading-[19.2px]">
            Priority updates & news
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#99e39e33] rounded-full flex items-center justify-center">
            <img className="w-4 h-4" alt="Bonus icon" src="/frame-24.svg" />
          </div>
          <span className="font-['DM_Sans',Helvetica] font-medium text-white text-sm tracking-[-0.10px] leading-[19.2px]">
            Special launch bonuses
          </span>
        </div>
      </div>
    </section>
  );
};
