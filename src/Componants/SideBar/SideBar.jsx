import React, { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import { ApiContext } from "../../Context/ApiContext";
import NavBar from './../NavBar/NavBar';

export default function SideBar() {
  const [dataApi, setDataApi] = useState(null);

  const { getDataApi } = useContext(ApiContext);

  async function handleApi() {
    const data = await getDataApi(
      "https://api.ultramsg.com/instance50425/chats?token=r79h0hfcpgf1bt6n"
    );
    setDataApi(data);
  }
  useEffect(() => {
    handleApi();
  }, []);

  function handleInputFocus(inpt) {
    inpt.placeholder = "";
    document.querySelector(".arrLeft").classList.replace("d-none", "d-block");
    document.querySelector(".srch").classList.replace("d-block", "d-none");
  }
  function handleInputBlur(inpt) {
    inpt.placeholder = "Search or start new chat";
    document.querySelector(".srch").classList.replace("d-none", "d-block");
    document.querySelector(".arrLeft").classList.replace("d-block", "d-none");
  }
  return (
    <>
      <div className="sideBar overflow-hidden position-relative">
        <NavBar/>
        <article className=" bg-body  py-3 vh-100 w-100">
          <div className="container m-0 p-0">
            <div className="search px-2">
              <div className="row">
                <div className="col-md-11">
                  <div className="item">
                    <div className="inpt position-relative rounded-4">
                      <input
                        style={{ background: "var(--second-color)" }}
                        type="text"
                        placeholder="Search or start new chat"
                        className="form-control rounded-3 ps-5 "
                        onClick={function (e) {
                          handleInputFocus(e.target);
                        }}
                        onBlur={(e) => {
                          handleInputBlur(e.target);
                        }}
                      />
                      <div className="search position-absolute translate-middle-y d-flex justify-content-center align-items-center">
                        <>
                          <i className="fa fa-arrow-left arrLeft d-none fa-2x"></i>
                        </>
                        <>
                          <i class="fa-solid srch fa-magnifying-glass d-block"></i>
                        </>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="item filter d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-sort-down"></i>
                  </div>
                </div>
              </div>
            </div>
            {dataApi ? (
              <div className="contentChat border-top border-1 mt-2 vh-100 overflow-auto">
                <div className="container">
                  <div className="">
                    {dataApi.map((item) => {
                      return (
                        <>
                          <div className="">
                            <div className="text py-4 border-bottom border-1 d-flex justify-content-between">
                              <h6>{item.name}</h6>
                              {item.unread > 0 ? (
                                <span
                                  className="text-white px-2 rounded-circle"
                                  style={{ background: "#25D366" }}
                                >
                                  {item.unread}
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </article>
      </div>
    </>
  );
}
