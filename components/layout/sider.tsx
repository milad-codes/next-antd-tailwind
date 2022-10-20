import Image from "next/image";
import Link from "next/link";
import { Avatar } from "antd";
import ReportsIcon from "../svg/ReportsIcon";
import DashboardIcon from "../svg/DashboardIcon";
import LedgerIcon from "../svg/LedgerIcon";
import CurrencyIcon from "../svg/CurrencyIcon";
const Sider = () => {
  return (
    <div className="flex flex-col w-72 justify-between h-screen border-0 border-r border-solid border-gray-200 overflow-auto scrollbar ">
      <div className="py-6 ">
        <div className=" flex justify-center">
          <Image src={"/ledger.png"} alt="Ledger" width={135} height={35} />
        </div>

        <nav className="flex px-4  flex-col mt-10 py-2.5 space-y-1  ">
          <Link href="/" passHref>
            <div
              className={`flex items-center text-sm px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700`}>
              <DashboardIcon />

              <span className={`ml-2.5 text-base font-semibold`}>
                Dashboard
              </span>
            </div>
          </Link>

          <div
            className={`flex items-center text-sm px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700`}>
            <LedgerIcon />
            <Link href="/ledgers">
              <a className={`ml-2.5 text-base font-semibold`}>Ledgers</a>
            </Link>
          </div>

          <div
            className={`flex items-center text-sm px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700`}>
            <CurrencyIcon />
            <Link href="/">
              <span className={`ml-2.5 text-base font-semibold`}>
                Currencies
              </span>
            </Link>
          </div>

          <div
            className={`flex items-center text-sm px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700`}>
            <ReportsIcon />
            <Link href="/">
              <span className={`ml-2.5 text-base font-semibold`}>Reports</span>
            </Link>
          </div>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-0 border-solid border-t border-gray-200">
        <div className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0">
          <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
            M
          </Avatar>
          <div className="mx-auto items-center">
            <p className="text-xs mt-2">
              <strong className="flex items-center font-medium">
                Milad Akbari
              </strong>

              <span>miladakbari.dev@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
