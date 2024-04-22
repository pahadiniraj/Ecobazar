import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { NavLink } from "react-router-dom";

function PreNav() {
  return (
    <>
      <nav className="py-4  bg-[#333333]  text-sm ">
        <div className=" flex justify-between items-center mx-auto px-28  container ">
          <div className="flex items-center px-2">
            <LocationOnOutlinedIcon className="text-slate-500"></LocationOnOutlinedIcon>
            <span className="text-slate-300 text-xs">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </span>
          </div>
          <div className="flex  items-center md:block gap-2  ">
            <span className=" text-slate-500 text-xs mx-2">
              <label htmlFor="lang-select">
                <select
                  id="lang-select"
                  className=" bg-[#333333] text-[#B3B3B3] "
                >
                  <option value="english">Eng</option>
                  <option value="nepali">Nep</option>
                  <option value="indian">Ind</option>
                </select>
              </label>
            </span>
            <span className=" text-[#B3B3B3] text-xs mx-2 ">
              <label htmlFor="curr-select">
                <select id="curr-select" className=" bg-[#333333]">
                  <option value="usd">USD</option>
                  <option value="nep">NRP</option>
                  <option value="ind">INR</option>
                </select>
              </label>
            </span>
            <span className="mx-2 text-[#B3B3B3]">
              <NavLink
                to="signin"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#B3B3B3]"
                }
              >
                Sign in
              </NavLink>
            </span>
            <span className="mx-2 text-[#B3B3B3]">
              <NavLink
                to="signup"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#B3B3B3]"
                }
              >
                Sign up
              </NavLink>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
export default PreNav;
