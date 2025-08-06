"use client";

import { useState } from "react";

type SortDirection = "asc" | "desc" | null;
type SortableColumn = "date" | "remark" | "amount" | "currency" | "type";

interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

export default function TransactionTable() {
  const [sortColumn, setSortColumn] = useState<SortableColumn | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const CaretDownIcon = ({
    isActive,
    direction,
  }: {
    isActive: boolean;
    direction: SortDirection;
  }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform ${
        isActive && direction === "asc" ? "rotate-180" : ""
      }`}
    >
      <path
        d="M9.86274 9C8.65111 9 8.04529 9 7.76477 9.23959C7.52136 9.44749 7.39218 9.75934 7.4173 10.0785C7.44624 10.4462 7.87462 10.8746 8.73137 11.7314L10.8686 13.8686C11.2646 14.2646 11.4627 14.4627 11.691 14.5368C11.8918 14.6021 12.1082 14.6021 12.309 14.5368C12.5373 14.4627 12.7354 14.2646 13.1314 13.8686L15.2686 11.7314C16.1254 10.8746 16.5538 10.4462 16.5827 10.0785C16.6078 9.75934 16.4786 9.44749 16.2352 9.23959C15.9547 9 15.3489 9 14.1373 9H9.86274Z"
        fill={isActive ? "#437D8E" : "#15272D"}
        fillOpacity={isActive ? "1" : "0.62"}
      />
    </svg>
  );

  const StatusDot = ({ color }: { color: string }) => (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" fill={color} />
    </svg>
  );

  const formatAmount = (amount: number): string => {
    const formatted = Math.abs(amount).toLocaleString();
    return amount >= 0 ? `$${formatted}` : `-$${formatted}`;
  };

  const getStatusColor = (type: "Credit" | "Debit"): string => {
    return type === "Credit" ? "#087A2E" : "#C6381B";
  };

  const baseTransactions: Transaction[] = [
    {
      id: "1",
      date: "2023-10-01",
      remark: "Salary",
      amount: 3000,
      currency: "USD",
      type: "Credit",
    },
    {
      id: "2",
      date: "2023-10-02",
      remark: "Groceries",
      amount: -150,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "3",
      date: "2023-10-03",
      remark: "Gym Membership",
      amount: -50,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "4",
      date: "2023-10-04",
      remark: "Dinner",
      amount: -40,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "5",
      date: "2023-10-05",
      remark: "Movie Tickets",
      amount: -30,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "6",
      date: "2023-10-06",
      remark: "Rent",
      amount: -1200,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "7",
      date: "2023-10-07",
      remark: "Utilities",
      amount: -100,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "8",
      date: "2023-10-08",
      remark: "Car Payment",
      amount: -400,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "9",
      date: "2023-10-09",
      remark: "Insurance",
      amount: -200,
      currency: "USD",
      type: "Debit",
    },
  ];

  const handleSort = (column: SortableColumn) => {
    if (sortColumn === column) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortDirection(null);
        setSortColumn(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedTransactions = [...baseTransactions].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;

    let aValue: string | number | Date;
    let bValue: string | number | Date;

    switch (sortColumn) {
      case "date":
        aValue = new Date(a.date);
        bValue = new Date(b.date);
        break;
      case "remark":
        aValue = a.remark.toLowerCase();
        bValue = b.remark.toLowerCase();
        break;
      case "amount":
        aValue = a.amount;
        bValue = b.amount;
        break;
      case "currency":
        aValue = a.currency;
        bValue = b.currency;
        break;
      case "type":
        aValue = a.type;
        bValue = b.type;
        break;
      default:
        return 0;
    }

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="w-full bg-[#FCFDFD] py-4 md:py-7">
      <div className="overflow-x-auto">
        <div className="flex items-start gap-3 md:gap-[18px] min-w-[600px] md:min-w-full">
          {/* Date Column */}
          <div className="flex flex-col items-start flex-1">
            <div className="flex py-1 items-center w-full">
              <button
                className="flex items-center hover:bg-gray-50 rounded p-1 -m-1 transition-colors"
                onClick={() => handleSort("date")}
              >
                <div
                  className={`font-public-sans text-[13px] font-medium leading-4 ${
                    sortColumn === "date"
                      ? "text-[#437D8E]"
                      : "text-[rgba(21,39,45,0.62)]"
                  }`}
                >
                  Date
                </div>
                <CaretDownIcon
                  isActive={sortColumn === "date"}
                  direction={sortColumn === "date" ? sortDirection : null}
                />
              </button>
            </div>
            {sortedTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex py-3 md:py-[18px] items-center gap-2 w-full border-t-[1.5px] border-[rgba(73,101,110,0.20)]"
              >
                <div className="text-[#1B2528] font-public-sans text-[12px] md:text-[15px] font-normal leading-4 md:leading-5 tracking-[-0.06px] md:tracking-[-0.075px] line-clamp-1 overflow-hidden text-ellipsis">
                  {transaction.date}
                </div>
              </div>
            ))}
          </div>

          {/* Remark Column */}
          <div className="flex flex-col items-start min-w-[120px]">
            <div className="flex py-1 items-center w-full">
              <button
                className="flex items-center hover:bg-gray-50 rounded p-1 -m-1 transition-colors"
                onClick={() => handleSort("remark")}
              >
                <div
                  className={`font-public-sans text-[11px] md:text-[13px] font-medium leading-3 md:leading-4 ${
                    sortColumn === "remark"
                      ? "text-[#437D8E]"
                      : "text-[rgba(21,39,45,0.62)]"
                  }`}
                >
                  Remark
                </div>
                <CaretDownIcon
                  isActive={sortColumn === "remark"}
                  direction={sortColumn === "remark" ? sortDirection : null}
                />
              </button>
            </div>
            {sortedTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex py-3 md:py-[18px] items-center gap-2 w-full border-t-[1.5px] border-[rgba(73,101,110,0.20)]"
              >
                <div className="text-[#1B2528] font-public-sans text-[12px] md:text-[15px] font-normal leading-4 md:leading-5 tracking-[-0.06px] md:tracking-[-0.075px] line-clamp-1 overflow-hidden text-ellipsis">
                  {transaction.remark}
                </div>
              </div>
            ))}
          </div>

          {/* Amount Column */}
          <div className="flex flex-col items-start min-w-[90px]">
            <div className="flex py-1 items-center w-full">
              <button
                className="flex items-center hover:bg-gray-50 rounded p-1 -m-1 transition-colors"
                onClick={() => handleSort("amount")}
              >
                <div
                  className={`font-public-sans text-[11px] md:text-[13px] font-medium leading-3 md:leading-4 ${
                    sortColumn === "amount"
                      ? "text-[#437D8E]"
                      : "text-[rgba(21,39,45,0.62)]"
                  }`}
                >
                  Amount
                </div>
                <CaretDownIcon
                  isActive={sortColumn === "amount"}
                  direction={sortColumn === "amount" ? sortDirection : null}
                />
              </button>
            </div>
            {sortedTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex py-3 md:py-[18px] items-center gap-2 w-full border-t-[1.5px] border-[rgba(73,101,110,0.20)]"
              >
                <div className="text-[#1B2528] font-public-sans text-[12px] md:text-[15px] font-normal leading-4 md:leading-5 tracking-[-0.06px] md:tracking-[-0.075px] line-clamp-1 overflow-hidden text-ellipsis">
                  {formatAmount(transaction.amount)}
                </div>
              </div>
            ))}
          </div>

          {/* Currency Column */}
          <div className="flex flex-col items-start min-w-[70px]">
            <div className="flex py-1 items-center w-full">
              <button
                className="flex items-center hover:bg-gray-50 rounded p-1 -m-1 transition-colors"
                onClick={() => handleSort("currency")}
              >
                <div
                  className={`font-public-sans text-[11px] md:text-[13px] font-medium leading-3 md:leading-4 ${
                    sortColumn === "currency"
                      ? "text-[#437D8E]"
                      : "text-[rgba(21,39,45,0.62)]"
                  }`}
                >
                  Currency
                </div>
                <CaretDownIcon
                  isActive={sortColumn === "currency"}
                  direction={sortColumn === "currency" ? sortDirection : null}
                />
              </button>
            </div>
            {sortedTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex py-3 md:py-[18px] items-center gap-2 w-full border-t-[1.5px] border-[rgba(73,101,110,0.20)]"
              >
                <div className="text-[#1B2528] font-public-sans text-[12px] md:text-[15px] font-normal leading-4 md:leading-5 tracking-[-0.06px] md:tracking-[-0.075px] line-clamp-1 overflow-hidden text-ellipsis">
                  {transaction.currency}
                </div>
              </div>
            ))}
          </div>

          {/* Type Column */}
          <div className="flex flex-col items-start min-w-[80px]">
            <div className="flex py-1 items-center w-full">
              <button
                className="flex items-center hover:bg-gray-50 rounded p-1 -m-1 transition-colors"
                onClick={() => handleSort("type")}
              >
                <div
                  className={`font-public-sans text-[11px] md:text-[13px] font-medium leading-3 md:leading-4 ${
                    sortColumn === "type"
                      ? "text-[#437D8E]"
                      : "text-[rgba(21,39,45,0.62)]"
                  }`}
                >
                  Type
                </div>
                <CaretDownIcon
                  isActive={sortColumn === "type"}
                  direction={sortColumn === "type" ? sortDirection : null}
                />
              </button>
            </div>
            {sortedTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex h-[44px] md:h-[52px] py-2 md:py-3 items-center gap-2 w-full border-t-[1.5px] border-[rgba(73,101,110,0.20)]"
              >
                <div className="flex py-1 px-2 justify-center items-center gap-1 md:gap-2 rounded-2xl border-[1.5px] border-transparent bg-[rgba(52,97,111,0.09)]">
                  <StatusDot color={getStatusColor(transaction.type)} />
                  <div className="text-[#1B2528] text-center font-public-sans text-[11px] md:text-[15px] font-medium leading-3 md:leading-5 line-clamp-1 overflow-hidden text-ellipsis">
                    {transaction.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
