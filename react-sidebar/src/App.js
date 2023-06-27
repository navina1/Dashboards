import logo from "./logo.svg";
import "./App.css";
import { BsArrowLeft,BsSearch,BsChevronDown,BsFillImageFill,BsReverseLayoutTextSidebarReverse,BsPerson } from "react-icons/bs";
import { useState } from "react";
import { AiFillEnvironment ,AiOutlineBarChart, AiOutlineFileText, AiOutlineMail,AiOutlineSetting,AiOutlineLogout } from "react-icons/ai";
import {RiDashboardFill} from "react-icons/ri";

function App() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen,setSubMenuOpen]=useState(false)
  const Menus = [
    { title: "Dashboard" , icon:<RiDashboardFill/> },
    { title: "Pages", icon:<AiOutlineFileText/> },
    { title: "Media", spacing: true, icon:<BsFillImageFill/>},
    {
      title: "Projects",
      icon:<BsReverseLayoutTextSidebarReverse/>,
      submenu: true,
      submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 2" }, { title: "Submenu 3" }],
    },
    { title: "Analytics",icon:<AiOutlineBarChart/> },
    { title: "Profile", spacing: true, icon:<BsPerson/> },
    {title:"Inbox", icon:<AiOutlineMail />},
    { title: "Setting",icon:<AiOutlineSetting/> },
    { title: "Logout",icon:<AiOutlineLogout/> },
  ]
  return (
    <div className="flex">
      <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeft className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)} />
        <div className="inline-flex">
          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer bloat float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Sample App</h1>
        </div>
        <div className={`flex items-center rounded-md bg-light-white mt-6 px-4 py-2 ${!open ? 'px-2.5' : 'px-4'}`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer mr-2 ${open && "mr-2"}`}/>
          <input type="search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} placeholder="Search"/>
        </div>
        <ul className="pt-2">
            {Menus.map((menu,index)=>(
              <>
                <li key={index} className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md  ${menu.spacing ? "mt-9" : "mt-2"}`}>
                    <span className="text-2xl bloack float-left ">
                      {menu.icon}
                    </span>
                    <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden" }`}>{menu.title}</span>
                    {menu.submenu && open && (
                        <BsChevronDown className={`${subMenuOpen && "rotate-180"}`} onClick={()=> setSubMenuOpen(!subMenuOpen)}/>
                    )}
                </li>
                {menu.submenu && subMenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li key={index} className={`text-gray-300 text-sm flex item-center gap-x-4 px-5 cursor-pointer p-2 hover:bg-light-white rounded-md  ${menu.spacing ? "mt-9" : "mt-2"}`}>
                          {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )} 
              </>
            ))}
        </ul>
      </div>
      
      <div className="p-7">
        <h1 className="text-2xl font-semibold">HomePage</h1>
      </div>
    </div>
  );
}

export default App;
