import DollarIcon from "../svg/DollarIcon";
import ScaleIcon from "../svg/ScaleIcon";
import StarIcon from "../svg/StartIcon";

const AbstractInfo = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-500 text-center">
        Fee Information
      </h1>

      <div className="flex justify-center ">
        <div className="inline-flex items-center rounded relative px-2.5 py-1.5 text-xs font-medium bg-gradient-to-br from-green-200 via-purple-50 to-red-50">
          <span className="animate-ping w-2.5 h-2.5 bg-primary rounded-full absolute -top-1 -left-1"></span>
          <span className="w-2.5 h-2.5 bg-primary rounded-full absolute -top-1 -left-1"></span>

          <span className="text-gray-500 ">
            <StarIcon />
          </span>

          <span className="text-green-600 ml-1.5 font-semibold text-base">
            356,000,000
          </span>
          <span className="mx-1 font-semibold text-base">AFN</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-8">
        <div className="relative w-60 px-4 py-4 border border-gray-100 cursor-pointer rounded-xl bg-green-50 transform transition duration-400 hover:scale-105">
          <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
            (200,020,000)
          </span>

          <div className="text-gray-500 ">
            <DollarIcon />

            <h5 className="pt-1 text-xl font-bold text-gray-500 text-center">
              Total Collection
            </h5>

            <p className="pt-2 text-green-600 font-bold text-2xl text-center">
              56,18%
            </p>
          </div>
        </div>

        <div className="relative w-60 px-4 py-4 border border-gray-100 cursor-pointer rounded-xl bg-red-50 transform transition duration-400 hover:scale-105">
          <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-red-100 text-red-600 font-medium text-xs">
            (156,000,000)
          </span>

          <div className="text-gray-500 ">
            <ScaleIcon />

            <h5 className="pt-1 text-xl font-bold text-gray-500 text-center">
              Total Balance
            </h5>

            <p className="pt-2 text-red-600 font-bold text-2xl text-center">
              43,82%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractInfo;
