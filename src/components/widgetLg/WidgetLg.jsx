/* eslint-disable react/prop-types */
import "./widgetLg.css";
// import { useEffect, useState } from "react";
// import { userRequest } from "../../requestMethods";
// import {format} from "timeago.js"

export default function WidgetLg() {
  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const getOrders = async () => {
  //     try {
  //       const res = await userRequest.get("orders");
  //       setOrders(res.data);
  //     } catch {}
  //   };
  //   getOrders();
  // }, []);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Ata ul gunny</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$125.00</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Ata ul gunny</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$125.00</td>
          <td className="widgetLgStatus">
            <Button type="declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Ata ul gunny</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$125.00</td>
          <td className="widgetLgStatus">
            <Button type="pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Ata ul gunny</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$125.00</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
