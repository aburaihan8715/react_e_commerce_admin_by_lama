import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';

import './home.css';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { userRequest } from '../../requestMethods';
import { useSelector } from 'react-redux';

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
      'Agu',
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
        const res = await userRequest.get('users/stats');
        res.data.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'Active User': item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);
  // console.log(userStats);

  if (!user || user.role !== 'admin') {
    return <Navigate to={`/login`} />;
  }

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
