import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../Context/ApiContext";
import "./navbar.css";

export default function NavBar() {
  const [dataApi, setDataApi] = useState(null);
  const { getDataApi } = useContext(ApiContext);
  async function handleApi() {
    const data = await getDataApi(
      "https://api.ultramsg.com/instance50425/instance/me?token=r79h0hfcpgf1bt6n"
    );
    console.log(data);
    setDataApi(data);
  }

  // handlePortfolio
  function handlePortfolioToShow() {
    document.querySelector(".portfolio").style.translate = "0px";
  }
  function handlePortfolioToHide() {
    document.querySelector(".portfolio").style.translate = "-100%";
  }

  useEffect(() => {
    handleApi();
  }, []);
  return (
    <>
      {dataApi ? (
        <>
          <nav className="p-2 animate__animated animate__backInLeft">
            <div className="row">
              <div className="col-md-6">
                <div className="item p-2">
                  <img
                    style={{ width: "40px", cursor: "pointer" }}
                    src={dataApi.profile_picture}
                    alt=""
                    className=" rounded-circle"
                    onClick={handlePortfolioToShow}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="item-icons p-2 d-flex justify-content-between ">
                  <span>
                    <svg
                      style={{ color: "#54656f" }}
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      class
                      fill="none"
                    >
                      <path
                        d="m18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zm4.4-12.01c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zm-16.4 3.4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3v-12l-5 3zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      style={{ color: "#54656f" }}
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      class
                      version="1.1"
                      id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
                      x="0px"
                      y="0px"
                      enable-background="new 0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12.072,1.761c-3.941-0.104-7.579,2.105-9.303,5.65c-0.236,0.486-0.034,1.07,0.452,1.305 c0.484,0.235,1.067,0.034,1.304-0.45c1.39-2.857,4.321-4.637,7.496-4.553c0.539,0.02,0.992-0.4,1.013-0.939s-0.4-0.992-0.939-1.013 C12.087,1.762,12.079,1.762,12.072,1.761z M1.926,13.64c0.718,3.876,3.635,6.975,7.461,7.925c0.523,0.13,1.053-0.189,1.183-0.712 c0.13-0.523-0.189-1.053-0.712-1.183c-3.083-0.765-5.434-3.262-6.012-6.386c-0.098-0.53-0.608-0.88-1.138-0.782 C2.178,12.6,1.828,13.11,1.926,13.64z M15.655,21.094c3.642-1.508,6.067-5.006,6.201-8.946c0.022-0.539-0.396-0.994-0.935-1.016 c-0.539-0.022-0.994,0.396-1.016,0.935c0,0.005,0,0.009,0,0.014c-0.107,3.175-2.061,5.994-4.997,7.209 c-0.501,0.201-0.743,0.769-0.543,1.27c0.201,0.501,0.769,0.743,1.27,0.543C15.642,21.1,15.648,21.097,15.655,21.094z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      style={{ color: "#54656f" }}
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      class
                      version="1.1"
                      x="0px"
                      y="0px"
                      enable-background="new 0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        enable-background="new    "
                        d="M19.005,3.175H4.674C3.642,3.175,3,3.789,3,4.821V21.02 l3.544-3.514h12.461c1.033,0,2.064-1.06,2.064-2.093V4.821C21.068,3.789,20.037,3.175,19.005,3.175z M14.016,13.044H7.041V11.1 h6.975V13.044z M17.016,9.044H7.041V7.1h9.975V9.044z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      style={{ color: "#54656f" }}
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      class
                      version="1.1"
                      x="0px"
                      y="0px"
                      enable-background="new 0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </nav>

          <div className="portfolio position-absolute w-100 vh-100 top-0">
            <div className="head pt-5">
              <div className="container pt-5 ">
                <div className="content d-flex text-white align-items-center pb-3">
                  <div className="icon" onClick={handlePortfolioToHide}>
                    <i
                      style={{ cursor: "pointer" }}
                      className="fa fa-arrow-left "
                    ></i>
                  </div>
                  <h5 className="ms-3 ">Profile</h5>
                </div>
              </div>
            </div>
            <div className="picture animate__animated animate__zoomIn">
              <div className="img rounded-circle d-flex align-items-center position-absolute translate-middle-x">
                <img
                style={{width:"150px"}}
                  src={dataApi.profile_picture}
                  alt=""
                  className=" rounded-circle"
                  onClick={handlePortfolioToShow}
                />
                <div className="icon">
              <i className="fa fa-pencil "></i>

                </div>
              </div>
            </div>
            <div className="other bg-white vh-100"></div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
