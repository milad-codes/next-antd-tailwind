import Link from "next/link";
import { useState } from "react";
import { Badge, TreeSelect } from "antd";

import SettingsIcon from "../svg/SettingsIcon";
import LogoutIcon from "../svg/LogoutIcon";
import NotificationIcon from "../svg/NotificationIcon";

const Navbar = () => {
  const treeData = [
    {
      title: "Node1",
      value: "0-0",
      children: [
        {
          title: "Child Node1",
          value: "0-0-1",
        },
        {
          title: "Child Node2",
          value: "0-0-2",
        },
      ],
    },
    {
      title: "Node2",
      value: "0-1",
    },
  ];

  const [value, setValue] = useState<string | undefined>(undefined);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <nav className="flex flex-row items-center justify-between px-4 pt-6 pb-1  border-0 border-b border-solid border-gray-200 ">
      <div className="flex space-x-2 pl-2">
        <h1 className="text-gray-700 text-lg font-bold">Bahman Akbari</h1>
        <Badge count={"Admin"} />
      </div>

      <ul className="flex items-center text-sm font-medium space-x-2">
        <TreeSelect
          showSearch
          allowClear
          placeholder="Select Ledger"
          className="font-normal mx-3 "
          treeLine={true}
          treeData={treeData}
          value={value}
          style={{ width: 260 }}
          onChange={onChange}
        />

        <div className="flex relative items-center rounded-lg mx-2 cursor-pointer hover:bg-gray-100">
          <div className="absolute -top-1.5 right-0 text-xs font-bold text-white px-1 rounded-md bg-red-500">
            4
          </div>
          <Link href={"/notifications"}>
            <span className="px-2 py-2 text-gray-500 hover:text-gray-700">
              Notifications
            </span>
          </Link>
          <NotificationIcon />
        </div>

        <div className="flex items-center rounded-lg text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-700">
          <div className="px-2 py-2 ">Settings</div>
          <SettingsIcon />
        </div>

        <div className="flex items-center rounded-lg text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-700">
          <div className="px-2 py-2 ">Sign out</div>
          <LogoutIcon />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
