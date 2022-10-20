import LeakLight from "./LeakLight";
import Navbar from "./navbar";
import Sider from "./sider";

const Layout = ({ children }: any) => {
  return (
    <div className="flex">
      <Sider />
      <LeakLight />
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
