import type { NextPage } from "next";
import AbstractInfo from "../components/charts/abstractInfo";
import BubbleChart from "../components/charts/bubbleChart";
import GroupedBarChart from "../components/charts/groupedBarChart";
import MultiAxisChart from "../components/charts/multiAxisChart";

const Home: NextPage = () => {
  return (
    <div className=" w-11/12 mx-auto grid grid-cols-2 ">
      <div className=" border-0  border-r px-10 py-6   border-solid border-gray-200">
        <GroupedBarChart />
      </div>
      <div className=" border-0 border-solid px-10 py-6 border-gray-200">
        <AbstractInfo />
      </div>
      <div className="  border-0 border-t border-r px-10 py-6 border-solid border-gray-200">
        <MultiAxisChart />
      </div>
      <div className="  border-0 border-t  px-10 py-6 border-solid border-gray-200">
        <BubbleChart />
      </div>
    </div>
  );
};

export default Home;
