import React from 'react';

interface AppItem {
  id: string;
  name: string;
  image: string;
  appStoreUrl: string;
  googlePlayUrl: string;
}

const APPS: AppItem[] = [
  {
    id: 'uk-monarchs',
    name: 'UK Monarchs',
    image: '/images/apps/uk-monarchs.jpg',
    appStoreUrl: 'https://apps.apple.com/app/uk-monarchs-timeline/id6760196085',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=app.ukmonarchtimeline',
  },
  {
    id: 'uk-pms',
    name: 'UK PMs',
    image: '/images/apps/uk-pms.jpg',
    appStoreUrl: 'https://apps.apple.com/app/uk-prime-ministers-timeline/id6761317024',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=app.ukpms',
  },
  {
    id: 'french-rulers',
    name: 'French Rulers',
    image: '/images/apps/french-rulers.jpg',
    appStoreUrl: 'https://apps.apple.com/app/french-rulers-timeline/id6761076227',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=app.frrulers',
  },
  {
    id: 'us-presidents',
    name: 'US Presidents',
    image: '/images/apps/us-presidents.jpg',
    appStoreUrl: 'https://apps.apple.com/app/us-presidents-timeline/id6761148914',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=app.uspresidents',
  },
];

export const HistoricalTimelinesLinks: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-2xl border border-slate-200 text-slate-800 transition-all">
      {/* Title */}
      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0284c7] text-center tracking-tight mb-2">
        Historical Timelines Apps
      </h3>

      {/* Subtitle with store icons */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 mb-6 text-center">
        <span>Download from</span>
        <a
          href="https://apps.apple.com/developer/philippe-shoosmith/id1850530456"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#0071e3] hover:underline transition-all"
        >
          Apple Store
          <img
            src="/images/apps/app-store.svg"
            alt="Apple App Store"
            className="w-4 h-4 sm:w-5 sm:h-5 inline-block rounded"
          />
        </a>
        <span className="text-slate-500">or</span>
        <a
          href="https://play.google.com/store/apps/developer?id=Philippe+Shoosmith"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#0086F8] hover:underline transition-all"
        >
          Google Store
          <img
            src="/images/apps/google-play.svg"
            alt="Google Play Store"
            className="w-4 h-4 sm:w-5 sm:h-5 inline-block"
          />
        </a>
      </div>

      {/* 2x2 Grid of Apps */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-xl mx-auto">
        {APPS.map((app) => (
          <div
            key={app.id}
            className="flex flex-col items-center justify-between group p-2 rounded-xl transition-all"
          >
            {/* Medallion Badge */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center mb-1">
              <img
                src={app.image}
                alt={app.name}
                className="w-full h-full object-contain rounded-full shadow-lg group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </div>

            {/* App Title */}
            <h4 className="text-sm sm:text-base font-bold text-slate-900 text-center mb-1.5 tracking-tight group-hover:text-[#0284c7] transition-colors">
              {app.name}
            </h4>

            {/* Click Links Row */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 mt-1 bg-slate-50 px-2.5 py-1.5 rounded-full border border-slate-200/80 shadow-sm">
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`${app.name} on Apple App Store`}
                className="p-1 rounded-lg hover:bg-blue-50 active:scale-95 transition-all"
              >
                <img
                  src="/images/apps/app-store.svg"
                  alt="App Store"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg shadow-sm"
                />
              </a>

              <span className="font-extrabold text-slate-800 text-xs sm:text-sm select-none tracking-tight">
                ← Click →
              </span>

              <a
                href={app.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`${app.name} on Google Play`}
                className="p-1 rounded-lg hover:bg-slate-100 active:scale-95 transition-all"
              >
                <img
                  src="/images/apps/google-play.svg"
                  alt="Google Play"
                  className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalTimelinesLinks;
