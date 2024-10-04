import { ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Storefront, Timeline, TrendingUp, AttachMoneyOutlinedIcon, MoneyOffCsred, Money, MoneyOutlined, Report, HomeMaxOutlined} from "@mui/icons-material";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="flex-1 h-[calc(100vh-74px)] sticky  bg-violet-100/50">
      <div className="p-5 text-gray-700  ">
        <div className="mb-1  ">
            <h3 className="text-[1.2rem] p-1 text-gray-600  ">داشبورد</h3>
            <ul className="p-1 ">
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-violet-100 hover:bg-violet-100">
                    <HomeMaxOutlined className="ml-2"/><Link to={'/'}>خانه</Link>
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-violet-100 hover:bg-violet-100">
                    <Timeline className="ml-2"/>آنالیز
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-violet-100 hover:bg-violet-100">
                    <TrendingUp className="ml-2"/>فروش
                </li>
            </ul>
          
        </div>
        <div className="mb-1  ">
            <h3 className="text-[1.2rem] p-1 text-gray-600  ">منو سریع</h3>
            <ul className="p-1 ">
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-violet-100 hover:bg-violet-100">
                    <PermIdentity className="ml-2"/><Link to={'/userList'}>کاربران</Link>
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-violet-100 hover:bg-violet-100">
                    <Storefront className="ml-2"/><Link to={'/products'}>محصولات</Link>
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-violet-100 hover:bg-violet-100">
                    <MoneyOutlined className="ml-2"/><Link to={'/transactions'}>تراکنشها</Link>
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-violet-100 hover:bg-violet-100">
                    <Report className="ml-2"/><Link to={'/reports'}>گزارشات</Link>
                </li>
            </ul>
          
        </div>
        <div className="mb-1  ">
            <h3 className="text-[1.2rem] p-1 text-gray-600 ">اعلانات</h3>
            <ul className="p-1 ">
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-violet-100 hover:bg-violet-100">
                    <MailOutline className="ml-2"/>ایمیل
                </li>
                <li className="p-1 cursor-pointer text-sm flex items-center rounded-lg active:bg-violet-100 hover:bg-violet-100">
                    <DynamicFeed className="ml-2"/>نظرات
                </li>
                <li className="p-1 cursor-pointer flex text-sm items-center rounded-lg active:bg-violet-100 hover:bg-violet-100">
                    <ChatBubbleOutline className="ml-2"/>پیامها
                </li>
            </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
