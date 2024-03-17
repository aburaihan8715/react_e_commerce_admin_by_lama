import { Navigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import './home.css';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
// import { userData } from '../../dummyData';
import { userRequest } from '../../requestMethods';

// NOTE: we can also use without useMemo()
// const MONTHS = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ];

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const user = useSelector((state) => state.user?.currentUser);

  // console.log(user);
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('users/stats/2024');
        const data = res.data?.data;
        const updatedData = data?.map((item) => ({
          month: MONTHS[item.month - 1],
          'Active user': item.numUsers,
        }));
        setUserStats(updatedData);
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);

  if (!user) {
    return <Navigate to={`/login`} />;
  }

  // if (!user || user.role !== 'admin') {
  //   return <Navigate to={`/login`} />;
  // }

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active user"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
