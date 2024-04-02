import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import EnhancedEncryptionOutlinedIcon from "@mui/icons-material/EnhancedEncryptionOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

function Featured() {
  const featuredItems = [
    {
      logo: (
        <LocalShippingOutlinedIcon sx={{ fontSize: 35, color: "#00e800" }} />
      ),
      head: "Free Shipping",
      para: "Free shipping with discount",
    },
    {
      logo: <SupportAgentRoundedIcon sx={{ fontSize: 35, color: "#00e800" }} />,
      head: "Great Support 24/7",
      para: "Instant access to Contact",
    },
    {
      logo: (
        <EnhancedEncryptionOutlinedIcon
          sx={{ fontSize: 35, color: "#00e800" }}
        />
      ),
      head: "100% Sucure Payment",
      para: " We ensure your money is save",
    },
    {
      logo: <InventoryOutlinedIcon sx={{ fontSize: 35, color: "#00e800" }} />,
      head: "Money-Back Guarantee",
      para: "30 days money-back guarantee",
    },
  ];

  return (
    <>
      <div className="h-52  flex justify-center items-center relative top-14 w-[1400px] mx-auto ">
        <div className=" h-full w-4/5 mx-20 flex border border-solid  border-slate-800.[.3] rounded-lg bg-white">
          {featuredItems.map((item, idx) => (
            <div
              key={idx}
              className="w-1/4 flex flex-col gap-2 justify-center  border-r border-solid  border-slate-800.[.1] rounded-lg hover:bg-[#00B207] 
            hover:text-white transition duration-200 ease-in-out p-6"
            >
              <div className="h-14 w-14 rounded-full flex items-center justify-center  bg-white border border-slate-800.[.1]  ">
                {item.logo}
              </div>
              <h2 className="font-bold text-lg ">{item.head}</h2>
              <p className="font-normal text-sm  ">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Featured;
