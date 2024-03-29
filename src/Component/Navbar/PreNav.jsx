import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function PreNav() {
  return (
    <>
      <nav className="flex justify-between py-4 ml-5 mr-5 border-y ">
        <div className="flex gp-x-9">
          <LocationOnOutlinedIcon className="text-slate-500"></LocationOnOutlinedIcon>
          <span className="text-slate-500 text-sm">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
        </div>
        <div>
          <span className="mr-5 text-slate-500 text-sm">
            <label htmlFor="lang-select">
              <select id="lang-select">
                <option value="english">Eng</option>
                <option value="nepali">Nep</option>
                <option value="indian">Ind</option>
              </select>
            </label>
          </span>
          <span className="mx-px text-slate-500 text-sm">
            <label htmlFor="curr-select">
              <select id="curr-select">
                <option value="usd">USD</option>
                <option value="nep">NRP</option>
                <option value="ind">INR</option>
              </select>
            </label>
          </span>
        </div>
      </nav>
    </>
  );
}
export default PreNav;
