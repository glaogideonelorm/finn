interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

export default function SummaryCards() {
  const dashboardData: DashboardSummary = {
    totalBalance: 12345,
    totalCredits: 7890,
    totalDebits: 4455,
    transactionCount: 150,
    balanceChange: 5,
    creditsChange: 3,
    debitsChange: -2,
    transactionChange: 10,
  };

  const formatCurrency = (amount: number): string => {
    return `$${amount.toLocaleString()}`;
  };

  const formatPercentage = (change: number): string => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change}%`;
  };


  return (
    <div className="flex py-3 md:py-6 flex-col justify-center items-start gap-4 md:gap-7 w-full bg-[#FCFDFD]">
      <div className="flex flex-col items-start gap-3 md:gap-[18px] w-full">
        <div className="w-full text-[#1B2528] font-public-sans text-lg md:text-xl font-bold leading-5 md:leading-6 tracking-[-0.36px] md:tracking-[-0.4px]">
          Summary
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 w-full">
          {/* Total Balance Card */}
          <div className="flex p-4 md:p-7 flex-col items-start gap-3 md:gap-[18px] rounded-[16px] md:rounded-[20px] border-[1.5px] border-transparent bg-[rgba(52,97,111,0.09)]">
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 text-[#1B2528] font-public-sans text-[14px] md:text-[17px] font-bold leading-5 md:leading-6 tracking-[-0.07px] md:tracking-[-0.085px] line-clamp-1 overflow-hidden text-ellipsis">
                Total Balance
              </div>
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z" fill="#1B2528"/>
              </svg>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <div className="w-full text-[#1B2528] font-public-sans text-[24px] md:text-[34px] font-bold leading-7 md:leading-10 tracking-[-0.48px] md:tracking-[-0.68px] line-clamp-1 overflow-hidden text-ellipsis">
                {formatCurrency(dashboardData.totalBalance)}
              </div>
              <div className="w-full text-[#3E7383] font-public-sans text-[11px] md:text-[13px] font-medium leading-3 md:leading-4">
                {formatPercentage(dashboardData.balanceChange)}
              </div>
            </div>
          </div>

          {/* Total Credits Card */}
          <div className="flex p-4 md:p-7 flex-col items-start gap-3 md:gap-[18px] rounded-[16px] md:rounded-[20px] border-[1.5px] border-transparent bg-[rgba(52,97,111,0.09)]">
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 text-[#1B2528] font-public-sans text-[14px] md:text-[17px] font-bold leading-5 md:leading-6 tracking-[-0.07px] md:tracking-[-0.085px] line-clamp-1 overflow-hidden text-ellipsis">
                Total Credits
              </div>
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z" fill="#1B2528"/>
              </svg>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <div className="w-full text-[#1B2528] font-public-sans text-[24px] md:text-[34px] font-bold leading-7 md:leading-10 tracking-[-0.48px] md:tracking-[-0.68px] line-clamp-1 overflow-hidden text-ellipsis">
                {formatCurrency(dashboardData.totalCredits)}
              </div>
              <div className="w-full text-[#3E7383] font-public-sans text-[11px] md:text-[13px] font-medium leading-3 md:leading-4">
                {formatPercentage(dashboardData.creditsChange)}
              </div>
            </div>
          </div>

          {/* Total Debits Card */}
          <div className="flex p-4 md:p-7 flex-col items-start gap-3 md:gap-[18px] rounded-[16px] md:rounded-[20px] border-[1.5px] border-transparent bg-[rgba(52,97,111,0.09)]">
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 text-[#1B2528] font-public-sans text-[14px] md:text-[17px] font-bold leading-5 md:leading-6 tracking-[-0.07px] md:tracking-[-0.085px] line-clamp-1 overflow-hidden text-ellipsis">
                Total Debits
              </div>
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z" fill="#1B2528"/>
              </svg>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <div className="w-full text-[#1B2528] font-public-sans text-[24px] md:text-[34px] font-bold leading-7 md:leading-10 tracking-[-0.48px] md:tracking-[-0.68px] line-clamp-1 overflow-hidden text-ellipsis">
                {formatCurrency(dashboardData.totalDebits)}
              </div>
              <div className="w-full text-[#3E7383] font-public-sans text-[11px] md:text-[13px] font-medium leading-3 md:leading-4">
                {formatPercentage(dashboardData.debitsChange)}
              </div>
            </div>
          </div>

          {/* Transactions Card */}
          <div className="flex p-4 md:p-7 flex-col items-start gap-3 md:gap-[18px] rounded-[16px] md:rounded-[20px] border-[1.5px] border-transparent bg-[rgba(52,97,111,0.09)]">
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 text-[#1B2528] font-public-sans text-[14px] md:text-[17px] font-bold leading-5 md:leading-6 tracking-[-0.07px] md:tracking-[-0.085px] line-clamp-1 overflow-hidden text-ellipsis">
                Transactions
              </div>
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z" fill="#1B2528"/>
              </svg>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <div className="w-full text-[#1B2528] font-public-sans text-[24px] md:text-[34px] font-bold leading-7 md:leading-10 tracking-[-0.48px] md:tracking-[-0.68px] line-clamp-1 overflow-hidden text-ellipsis">
                {dashboardData.transactionCount.toLocaleString()}
              </div>
              <div className="w-full text-[#3E7383] font-public-sans text-[11px] md:text-[13px] font-medium leading-3 md:leading-4">
                {formatPercentage(dashboardData.transactionChange)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
