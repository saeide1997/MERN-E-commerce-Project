import OrderChart from "../components/OrderChart";
import SellChart from "../components/SellChart";
import StatusChart from "../components/StatusChart";
import TotalOrder from "../components/TotalOrder";
import TotalOrderQuantity from "../components/TotalOrderQuantity";
import TotalSale from "../components/TotalSale";
import TotalUser from "../components/TotalUser";
import UserChart from "../components/UserChart";

const Analisys = () => {
  return (
    <div className="flex-6  mt-5 ">
      <div className="flex mx-5 w-[80vw] justify-between">
        <UserChart className="" />
        <OrderChart className="" />
        <SellChart className="" />
      </div>
      <div className="flex w-[80vw] justify-between items-end mx-5 my-8">
        <StatusChart className="" />
        <div className="flex">
            <div>
          <TotalUser />
          <TotalSale />
            </div>
            <div>
          <TotalOrder />
          <TotalOrderQuantity />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Analisys;
