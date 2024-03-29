import { NavLink } from "react-router-dom";

function LowerFooter() {
  return (
    <footer className=" py-10 px-20 bg-zinc-900 text-white ">
      <div className="flex justify-between ">
        <span className="w-[30%] ">
          <h3 className="mb-4 text-lg font-semibold">About Shopery</h3>
          <p className="text-slate-400 text-sm mb-4">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>

          <p>
            <span>(219) 555-0114</span> <span>or</span>{" "}
            <span>Proxy@gmail.com</span>
          </p>
        </span>
        <div className=" flex flex-col gap-2">
          <h3 className="mb-2 text-lg font-semibold">My Account</h3>

          {[
            "My Account",
            "Order History",
            "Shopping Cart",
            "Wishlist",
            "Setting",
          ].map((va, index) => (
            <li className="flex text-sm font-normal" key={index}>
              {index === 0 && (
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-white" : "text-slate-400 "}`
                  }
                  to="/about"
                >
                  {va}{" "}
                </NavLink>
              )}
              {index === 1 && (
                <NavLink
                  to="order"
                  className={({ isActive }) =>
                    `${isActive ? "text-white" : "text-slate-400"}`
                  }
                >
                  {va}{" "}
                </NavLink>
              )}
              {index === 2 && (
                <NavLink
                  to="cart"
                  className={({ isActive }) =>
                    `${isActive ? "text-white " : "text-slate-400"}`
                  }
                >
                  {va}
                </NavLink>
              )}
              {index === 3 && (
                <NavLink
                  to="wishlist"
                  className={({ isActive }) =>
                    `${isActive ? "text-white" : "text-slate-400"}`
                  }
                >
                  {va}{" "}
                </NavLink>
              )}
              {index === 4 && (
                <NavLink
                  to="setting"
                  className={({ isActive }) =>
                    `${isActive ? "text-white" : "text-slate-400"}`
                  }
                >
                  {va}{" "}
                </NavLink>
              )}
            </li>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-lg font-semibold">Helps</h2>
          {["contact", "faqs", "Terms & Condition", "Privacy Policy"].map(
            (val, index) => (
              <li key={index} className="flex font-normal text-sm">
                {index === 0 && (
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-slate-400"}`
                    }
                  >
                    {val}
                  </NavLink>
                )}

                {index === 1 && (
                  <NavLink
                    to="faqs"
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-slate-400"}`
                    }
                  >
                    {val}
                  </NavLink>
                )}
                {index === 2 && (
                  <NavLink
                    to="termsandcondition"
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-slate-400"}`
                    }
                  >
                    {val}
                  </NavLink>
                )}
                {index === 3 && (
                  <NavLink
                    to="privacypolicy"
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-slate-400"}`
                    }
                  >
                    {val}
                  </NavLink>
                )}
              </li>
            )
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-lg font-semibold">Proxy</h2>
          {["About", "Shop", "Product", "Products Detail", "Track Order"].map(
            (val, index) => (
              <li key={index} className="flex text-sm font-normal ">
                {index === 0 && (
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-slate-400"}`
                    }
                  >
                    {val}
                  </NavLink>
                )}
                {index === 1 && (
                  <NavLink
                    to="shop"
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-slate-400"}`
                    }
                  >
                    {val}
                  </NavLink>
                )}
                {index === 2 && (
                  <NavLink
                    to="product"
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-slate-400"}`
                    }
                  >
                    {val}
                  </NavLink>
                )}
                {index === 3 && (
                  <NavLink
                    to="productdetail"
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-slate-400"}`
                    }
                  >
                    {val}
                  </NavLink>
                )}
                {index === 4 && (
                  <NavLink
                    to="trackorder"
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-slate-400"}`
                    }
                  >
                    {val}
                  </NavLink>
                )}
              </li>
            )
          )}
        </div>

        <span>
          <h3 className="mb-6">Download our Mobile App</h3>
          <span className="flex gap-6 ">
            <div className="flex gap-2 bg-slate-600 rounded p-2 ">
              <span className=" flex justify-center items-center">
                <svg
                  width="24"
                  height="29"
                  viewBox="0 0 24 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M23.4242 22.0659C23.0158 23.0169 22.5115 23.9238 21.9192 24.7725C21.127 25.9013 20.4789 26.6824 19.9796 27.1164C19.2055 27.828 18.3754 28.1932 17.487 28.2136C16.8494 28.2136 16.0806 28.0322 15.1852 27.6641C14.2868 27.2978 13.4614 27.1158 12.7066 27.1158C11.915 27.1158 11.0662 27.2978 10.158 27.6641C9.24858 28.0322 8.51591 28.2241 7.95591 28.2428C7.10425 28.2795 6.25491 27.9044 5.40675 27.1164C4.866 26.6439 4.18991 25.8354 3.37908 24.6897C2.50933 23.4659 1.79416 22.0472 1.23416 20.429C0.634496 18.682 0.333496 16.9897 0.333496 15.3517C0.333496 13.4751 0.738913 11.8569 1.55091 10.5007C2.18966 9.41103 3.03841 8.55237 4.10125 7.9212C5.14394 7.29723 6.33368 6.96145 7.54875 6.9482C8.22541 6.9482 9.11266 7.15762 10.2157 7.56887C11.3153 7.98128 12.0212 8.1907 12.3309 8.1907C12.5619 8.1907 13.3465 7.9457 14.6759 7.45803C15.9336 7.00537 16.9947 6.81812 17.8638 6.8922C20.2199 7.08237 21.9897 8.01103 23.1663 9.68403C21.0599 10.9604 20.0175 12.7483 20.0385 15.0419C20.0572 16.8287 20.7052 18.3156 21.9792 19.4957C22.5567 20.044 23.2013 20.4675 23.9182 20.768C23.7679 21.2059 23.6032 21.6388 23.4242 22.0659ZM18.0213 0.805701C18.0213 2.2057 17.5097 3.51353 16.4901 4.72337C15.2592 6.16245 13.7712 6.9937 12.1571 6.86245C12.1354 6.68634 12.1245 6.50906 12.1244 6.33162C12.1244 4.98762 12.7095 3.54912 13.749 2.37253C14.2682 1.77695 14.9273 1.2817 15.7277 0.886784C16.5268 0.497701 17.2817 0.282451 17.9922 0.245117C18.0126 0.432367 18.0213 0.619617 18.0213 0.805117V0.805701Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>
                <p>Download on the </p>
                <p>App Store</p>
              </span>
            </div>
            <div className="flex gap-2 bg-slate-600 rounded p-2  ">
              <span className=" flex justify-center items-center">
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0652 11.7299L3.7188 1.35472L16.8828 8.91232L14.0652 11.7299ZM1.0176 0.745117C0.408 1.06432 0 1.64512 0 2.40112V23.0891C0 23.8451 0.408 24.4259 1.0176 24.7451L13.05 12.7427L1.0176 0.745117ZM20.9532 11.3219L18.192 9.72352L15.1116 12.7475L18.192 15.7715L21.0096 14.1731C21.8532 13.5023 21.8532 11.9927 20.9532 11.3219ZM3.7188 24.1403L16.8828 16.5827L14.0652 13.7651L3.7188 24.1403Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>
                <p>Download on the </p>
                <p>Google Play</p>
              </span>
            </div>
          </span>
        </span>
      </div>
    </footer>
  );
}
export default LowerFooter;
