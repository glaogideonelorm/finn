interface SidebarProps {
  isMobile?: boolean;
}

export default function Sidebar({ isMobile = false }: SidebarProps) {

  const isVerticalLayout = isMobile;

  return (
    <div className={`flex ${isMobile ? 'w-full' : 'w-full lg:w-80'} flex-col items-start`}>
      {/* Conditional layout based on mobile overlay or responsive */}
      <div className={`flex ${isVerticalLayout ? 'flex-col' : 'lg:flex-col'} py-4 lg:py-7 items-start w-full bg-[#FCFDFD] ${!isMobile ? 'overflow-x-auto lg:overflow-x-visible' : ''}`}>
        <div className={`flex ${isVerticalLayout ? 'flex-col' : 'lg:flex-col'} gap-2 lg:gap-0 w-full`}>
          {/* Dashboard - Active */}
          <div className={`flex py-2 ${isMobile ? 'px-[18px]' : 'px-3 lg:px-[18px]'} items-center gap-4 ${!isMobile ? 'whitespace-nowrap' : ''} ${isMobile ? 'w-full' : 'lg:w-full'} rounded-2xl bg-[rgba(56,103,118,0.16)]`}>
            <div className={`text-[#3A6C7B] font-public-sans ${isMobile ? 'text-[15px]' : 'text-[13px] lg:text-[15px]'} font-medium ${isMobile ? 'leading-5' : 'leading-4 lg:leading-5'}`}>
              Dashboard
            </div>
          </div>

          {/* Transactions */}
          <div className={`flex py-2 ${isMobile ? 'px-[18px]' : 'px-3 lg:px-[18px]'} items-center gap-4 ${!isMobile ? 'whitespace-nowrap' : ''} ${isMobile ? 'w-full' : 'lg:w-full'} rounded-2xl bg-[#FCFDFD]`}>
            <div className={`text-[#1B2528] font-public-sans ${isMobile ? 'text-[15px]' : 'text-[13px] lg:text-[15px]'} font-medium ${isMobile ? 'leading-5' : 'leading-4 lg:leading-5'}`}>
              Transactions
            </div>
          </div>

          {/* Reports */}
          <div className={`flex py-2 ${isMobile ? 'px-[18px]' : 'px-3 lg:px-[18px]'} items-center gap-4 ${!isMobile ? 'whitespace-nowrap' : ''} ${isMobile ? 'w-full' : 'lg:w-full'} rounded-2xl bg-[#FCFDFD]`}>
            <div className={`text-[#1B2528] font-public-sans ${isMobile ? 'text-[15px]' : 'text-[13px] lg:text-[15px]'} font-medium ${isMobile ? 'leading-5' : 'leading-4 lg:leading-5'}`}>
              Reports
            </div>
          </div>

          {/* Settings */}
          <div className={`flex py-2 ${isMobile ? 'px-[18px]' : 'px-3 lg:px-[18px]'} items-center gap-4 ${!isMobile ? 'whitespace-nowrap' : ''} ${isMobile ? 'w-full' : 'lg:w-full'} rounded-2xl bg-[#FCFDFD]`}>
            <div className={`text-[#1B2528] font-public-sans ${isMobile ? 'text-[15px]' : 'text-[13px] lg:text-[15px]'} font-medium ${isMobile ? 'leading-5' : 'leading-4 lg:leading-5'}`}>
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
