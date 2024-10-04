
const NewUser = () => {
    return (
        <div className="flex-6 p-10">
            <h1 className="">کاربر جدید</h1>
            <form className="flex flex-wrap justify-between" action="">
                <div className="w-[30vw] min-w-40 flex flex-col mt-3 ml-5">
                    <label className="mb-3 text-base text-white " >نام کاربری</label>
                    <input className="h-8 p-3 border-solid border-[1px] border-gray-700" type="text" placeholder="savide" name="" id="" />
                </div>
                <div className="w-[30vw] min-w-40 flex flex-col mt-3 ml-5">
                    <label className="mb-3 text-base text-white " >نام و نام خانوادگی</label>
                    <input className="h-8 p-3 border-solid border-[1px] border-gray-700" type="text" placeholder="سعیده تاجمهر" name="" id="" />
                </div>
                <div className="w-[30vw] min-w-40 flex flex-col mt-3 ml-5">
                    <label className="mb-3 text-base text-white " >ایمیل</label>
                    <input className="h-8 p-3 border-solid border-[1px] border-gray-700" type="email" placeholder="savide@gmail.com" name="" id="" />
                </div>
                <div className="w-[30vw] min-w-40 flex flex-col mt-3 ml-5">
                    <label className="mb-3 text-base text-white " >رمز</label>
                    <input className="h-8 p-3 border-solid border-[1px] border-gray-700" type="password" placeholder="******" name="" id="" />
                </div>
                <div className="w-[30vw] min-w-40 flex flex-col mt-3 ml-5">
                    <label className="mb-3 text-base text-white " >تاریخ تولد</label>
                    <input className="h-8 p-3 border-solid border-[1px] border-gray-700" type="text" placeholder="1376.04.25" name="" id="" />
                </div>
                <div className="mt-10 w-[400px] flex flex-row items-center ml-5">
                    <label className=" ml-10 text-base text-white " >جنسیت</label>
                    <div className="">
                        <input className="" type="radio" placeholder="" name="" id="male" />
                        <label className="m-3 text-lg text-white" for="male">مونث</label>
                        <input className="" type="radio" placeholder="" name="" id="female" />
                        <label className="m-3 text-lg text-white" for="female">مذکر</label>
                    </div>
                </div>
                <div className="w-[400px] flex flex-col mt-3 ml-5">
                    <label className="mb-3 text-base text-white " >فعالیت</label>
                    <select className="h-10 rounded-md pr-2" name="" id="">
                        <option value="yes">بله</option>
                        <option value="no">خیر</option>
                    </select>
                </div>
                <button className="p-1 w-52 h-10 mt-12 rounded-md bg-teal-600 text-white"> ایجار کاربر</button>
            </form>
        </div>
    );
};

export default NewUser;