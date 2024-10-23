import { ChatBubbleOutline, DynamicFeed, MailOutline, PermIdentity, Storefront, Timeline, TrendingUp,MoneyOutlined, Report, HomeMaxOutlined} from "@mui/icons-material";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="flex-1 h-[calc(100vh-74px)] sticky top-16  bg-teal-600/80 rounded-bl-3xl">
      <div className="p-5 text-teal-100  ">
        <div className="mb-1  ">
            <h3 className="text-[1.4rem] p-1 boldShab text-white  ">داشبورد</h3>
            <ul className="p-1 ">
                <li className="p-1 cursor-pointer text-base flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <HomeMaxOutlined className="ml-2"/><Link to={'/'}>خانه</Link>
                </li>
                <li className="p-1 cursor-pointer text-base flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <Timeline className="ml-2"/><Link to={'/analisys'}>آنالیز</Link>
                </li>
                <li className="p-1 cursor-pointer text-base flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <TrendingUp className="ml-2"/>فروش
                </li>
            </ul>
          
        </div>
        <div className="mb-1  ">
            <h3 className="text-[1.4rem] p-1 boldShab text-white  ">منو سریع</h3>
            <ul className="p-1 ">
                <li className="p-1 cursor-pointer text-base flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <PermIdentity className="ml-2"/><Link to={'/userList'}>کاربران</Link>
                </li>
                <li className="p-1 cursor-pointer text-base flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <Storefront className="ml-2"/><Link to={'/products'}>محصولات</Link>
                </li>
                <li className="p-1 cursor-pointer text-base flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <MoneyOutlined className="ml-2"/><Link to={'/orders'}>تراکنشها</Link>
                </li>
                <li className="p-1 cursor-pointer text-base flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <Report className="ml-2"/><Link to={'/reports'}>گزارشات</Link>
                </li>
            </ul>
          
        </div>
        <div className="mb-1  ">
            <h3 className="text-[1.4rem] p-1 boldShab text-white ">اعلانات</h3>
            <ul className="p-1 ">
                <li className="p-1 cursor-pointer text-base  flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <MailOutline className="ml-2"/>ایمیل
                </li>
                <li className="p-1 cursor-pointer text-base flex items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <DynamicFeed className="ml-2"/>نظرات
                </li>
                <li className="p-1 cursor-pointer flex text-base items-center rounded-lg active:bg-teal-800/50 hover:bg-teal-800/50">
                    <ChatBubbleOutline className="ml-2"/>پیامها
                </li>
            </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
