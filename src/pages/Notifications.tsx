import React from "react";
import data from "../data/notificationData.json";
import { Notification } from "../types/types";

const Notifications: React.FC = () => {
  const notifications: Notification[] = data;

  return (
    <div className="w-full border-x-[1px] border-gray-500 max-sm:border-none">
      <h2 className="text-2xl font-bold p-4">Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="p-4 w-full hover:bg-slate-400 hover:bg-opacity-5 hover:transition border-t-[1px] border-gray-500"
          >
            {/* <div className="font-bold">{notification.type}</div> */}
            <div className="w-[24px] h-[24px] mr-[8px]">
              <img
                src={notification.userImage}
                alt=""
                className="h-full w-full rounded-full"
              ></img>
            </div>
            <div>
              <p className="text-lg font-semibold">{notification.message}</p>
              <p className="text-gray-600 text-sm">
                {new Date(notification.timestamp).toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
