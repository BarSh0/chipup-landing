import React from 'react';

export const QuotesSection = (): JSX.Element => {
  const quotes = [
    {
      id: 1,
      platform: 'twitter',
      username: 'PokerPro_Mike',
      displayName: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote:
        'Finally found the perfect app for managing our weekly poker nights! The statistics feature is a game-changer. 🔥',
      verified: true,
      likes: 234,
      retweets: 67,
    },
    {
      id: 2,
      platform: 'instagram',
      username: 'cardshark_sarah',
      displayName: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote:
        'Love how easy it is to track player performance and game history. Our poker group is more organized than ever! 💯',
      verified: false,
      likes: 189,
      comments: 23,
    },
    {
      id: 3,
      platform: 'twitter',
      username: 'HomeGameHero',
      displayName: 'Alex Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote:
        'The early access discount was totally worth it. Premium features make hosting poker nights so much smoother! 🎯',
      verified: true,
      likes: 156,
      retweets: 42,
    },
    {
      id: 4,
      platform: 'linkedin',
      username: 'jennifer.wong',
      displayName: 'Jennifer Wong',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote:
        'As someone who organizes corporate poker tournaments, this app has streamlined everything. Highly recommend! 👏',
      verified: true,
      likes: 298,
      comments: 45,
    },
    {
      id: 5,
      platform: 'twitter',
      username: 'PokerNight_Tom',
      displayName: 'Tom Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      quote: 'Been using this for 3 months now. The ranking system keeps everyone engaged and competitive! 🏆',
      verified: false,
      likes: 127,
      retweets: 28,
    },
    {
      id: 6,
      platform: 'instagram',
      username: 'casino_queen_lisa',
      displayName: 'Lisa Martinez',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      quote: 'The analytics dashboard is incredible! Finally understand my poker patterns and improving my game 📊',
      verified: true,
      likes: 445,
      comments: 67,
    },
    {
      id: 7,
      platform: 'twitter',
      username: 'CardCounter_Dan',
      displayName: 'Daniel Kim',
      avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
      quote:
        'Free tier is generous, but premium is where the magic happens. Export feature saved me hours of manual tracking! ⚡',
      verified: true,
      likes: 203,
      retweets: 56,
    },
    {
      id: 8,
      platform: 'linkedin',
      username: 'rachel.thompson',
      displayName: 'Rachel Thompson',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      quote:
        'Perfect for our monthly charity poker events. The multi-game tracking keeps everything organized beautifully! 🎲',
      verified: false,
      likes: 167,
      comments: 34,
    },
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              fill="#1DA1F2"
            />
          </svg>
        );
      case 'instagram':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#instagram-gradient)" />
            <path
              d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#833AB4" />
                <stop offset="50%" stopColor="#FD1D1D" />
                <stop offset="100%" stopColor="#FCB045" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z"
              fill="#0077B5"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const getEngagementStats = (quote: any) => {
    switch (quote.platform) {
      case 'twitter':
        return (
          <div className="flex items-center gap-4 text-[#ffffff66] text-sm">
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  fill="currentColor"
                />
              </svg>
              <span>{quote.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{quote.retweets}</span>
            </div>
          </div>
        );
      case 'instagram':
        return (
          <div className="flex items-center gap-4 text-[#ffffff66] text-sm">
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  fill="currentColor"
                />
              </svg>
              <span>{quote.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="currentColor" />
              </svg>
              <span>{quote.comments}</span>
            </div>
          </div>
        );
      case 'linkedin':
        return (
          <div className="flex items-center gap-4 text-[#ffffff66] text-sm">
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 10v12M12 5l3 3h-6l3-3zM12 5v12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{quote.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="currentColor" />
              </svg>
              <span>{quote.comments}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const firstRow = quotes.slice(0, 4);
  const secondRow = quotes.slice(4, 8);

  return (
    <section
      id="quotes"
      className="flex flex-col items-center gap-10 py-[72px] w-full max-w-[1204px] mx-auto overflow-hidden"
    >
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="font-['DM_Sans',Helvetica] font-normal text-lg tracking-[-0.60px] leading-[21.6px]">
          <span className="text-white tracking-[-0.11px]">What our </span>
          <span className="text-[#99e39e] tracking-[-0.11px]">community</span>
          <span className="text-white tracking-[-0.11px]"> says</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 w-full max-w-[800px]">
          <h2 className="font-['DM_Sans',Helvetica] font-semibold text-white text-[40px] text-center tracking-[-0.60px] leading-[48.0px]">
            Loved by poker enthusiasts
          </h2>
          <p className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base text-center tracking-[0] leading-[22.4px] max-w-[600px]">
            Join thousands of players who have transformed their home poker games with our platform
          </p>
        </div>
      </div>

      {/* First Row - Moving Left */}
      <div className="w-full relative">
        <div className="flex gap-6 animate-scroll-left quotes-row">
          {[...firstRow, ...firstRow].map((quote, index) => (
            <div
              key={`${quote.id}-${index}`}
              className="flex-shrink-0 w-[400px] bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff1a] p-6 backdrop-blur-lg quote-card transition-all duration-300 hover:bg-[#ffffff12] hover:border-[#ffffff25] hover:shadow-[0px_16px_40px_#09090970]"
            >
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={quote.avatar} alt={quote.displayName} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-['DM_Sans',Helvetica] font-semibold text-white text-sm">
                          {quote.displayName}
                        </span>
                        {quote.verified && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="#1DA1F2" />
                          </svg>
                        )}
                      </div>
                      <span className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff66] text-xs">
                        @{quote.username}
                      </span>
                    </div>
                  </div>
                  {getPlatformIcon(quote.platform)}
                </div>

                {/* Quote */}
                <p className="font-['DM_Sans',Helvetica] font-normal text-white text-sm leading-[20px]">
                  {quote.quote}
                </p>

                {/* Engagement */}
                {getEngagementStats(quote)}
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#000510] to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#000510] to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Second Row - Moving Right */}
      <div className="w-full relative">
        <div className="flex gap-6 animate-scroll-right quotes-row">
          {[...secondRow, ...secondRow].map((quote, index) => (
            <div
              key={`${quote.id}-${index}`}
              className="flex-shrink-0 w-[400px] bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff1a] p-6 backdrop-blur-lg quote-card transition-all duration-300 hover:bg-[#ffffff12] hover:border-[#ffffff25] hover:shadow-[0px_16px_40px_#09090970]"
            >
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={quote.avatar} alt={quote.displayName} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-['DM_Sans',Helvetica] font-semibold text-white text-sm">
                          {quote.displayName}
                        </span>
                        {quote.verified && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="#1DA1F2" />
                          </svg>
                        )}
                      </div>
                      <span className="font-['DM_Sans',Helvetica] font-normal text-[#ffffff66] text-xs">
                        @{quote.username}
                      </span>
                    </div>
                  </div>
                  {getPlatformIcon(quote.platform)}
                </div>

                {/* Quote */}
                <p className="font-['DM_Sans',Helvetica] font-normal text-white text-sm leading-[20px]">
                  {quote.quote}
                </p>

                {/* Engagement */}
                {getEngagementStats(quote)}
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#000510] to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#000510] to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};
