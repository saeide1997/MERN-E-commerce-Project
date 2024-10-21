import OrderChart from "../components/OrderChart";
import SellChart from "../components/SellChart";
import Example from "../components/StatusChart";
import StatusChart from "../components/StatusChart";
import UserChart from "../components/UserChart";

const Analisys = () => {
return(
    <div className="flex-6   h-[80vh] mx-10 mt-10 ">
        <div className="flex">
        <UserChart className="flex-1"/>
        <OrderChart className="flex-1"/>
        <SellChart className="flex-1"/>
        </div>
        <Example/>

    </div>
)

}

export default Analisys;
