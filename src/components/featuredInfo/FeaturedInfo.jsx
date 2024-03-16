import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { useEffect, useState } from 'react';

import './featuredInfo.css';
import { userRequest } from '../../requestMethods';

export default function FeaturedInfo() {
  const [incomeStats, setIncomeStats] = useState([]);

  const currentMonthData = incomeStats[incomeStats?.length - 1];
  const lastMonthData = incomeStats[incomeStats?.length - 2];

  // sales calculation
  const currentMonthSales = currentMonthData?.salesAmount;
  const lastMonthSales = lastMonthData?.salesAmount;
  // NOTE: This is motto for comparing 2 numbers in percentage
  const percentageSalesDiff = Math.floor(
    (currentMonthSales * 100) / lastMonthSales - 100
  );

  // revenue calculation
  const currentMonthRevenue =
    currentMonthData?.salesAmount - currentMonthData?.costAmount;
  const lastMonthRevenue =
    lastMonthData?.salesAmount - lastMonthData?.costAmount;
  // NOTE: This is motto for comparing 2 numbers in percentage
  const percentageRevenueDiff = Math.floor(
    (currentMonthRevenue * 100) / lastMonthRevenue - 100
  );

  // cost calculation
  const currentMonthCost = currentMonthData?.costAmount;
  const lastMonthCost = lastMonthData?.costAmount;
  // NOTE: This is motto for comparing 2 numbers in percentage
  const percentageCostDiff = Math.floor(
    (currentMonthCost * 100) / lastMonthCost - 100
  );

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('orders/incomeStats');
        const data = res.data?.data;
        setIncomeStats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${currentMonthSales}</span>
          <span className="featuredMoneyRate">
            {percentageSalesDiff} %
            {percentageSalesDiff < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${currentMonthRevenue}</span>
          <span className="featuredMoneyRate">
            {percentageRevenueDiff} %
            {percentageRevenueDiff < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${currentMonthCost}</span>
          <span className="featuredMoneyRate">
            {percentageCostDiff} %
            {percentageCostDiff < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
