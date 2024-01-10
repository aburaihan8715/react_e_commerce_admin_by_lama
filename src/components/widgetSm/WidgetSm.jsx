import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
// import { useEffect, useState } from "react";
// import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const res = await userRequest.get("users/?new=true");
  //       setUsers(res.data);
  //     } catch {}
  //   };
  //   getUsers();
  // }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abdul hay</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abdul hay</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abdul hay</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abdul hay</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
