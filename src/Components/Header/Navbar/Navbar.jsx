import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo/Official Logo 5.png";
import people from "../../../assets/Logo/SVGRepo_iconCarrier.png";
import Hamburger from "hamburger-react";
import Mobile from "../Mobile/Mobile";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import ModalTap from "../../../Utilitis/ModalTap/ModalTap";
import SubModal from "../../../Utilitis/SubModal/SubModal";
import VerifyModal from "../../../Utilitis/VerifyModal/VerifyModal";
import CheckOutModal from "../../../Utilitis/CheckOutModal/CheckOutModal";
import CompletedModal from "../../../Utilitis/CompletedModal/CompletedModal";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [verify, setVerify] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [complete, setComplete] = useState(false);

  useState(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div id="header" className="bg-[var(--header-bg-color)] cursor-pointer">
        <div className="lg:w-[var(--width)] lg:mx-auto md:w-full w-full py-2 lg:px-0 px-4">
          <div className="logo lg:hidden">
            <div className="flex justify-between items-center">
              <img src={logo} alt="Noty_Logo" />
              <div className="icons " onClick={() => setShow(!show)}>
                {open ? (
                  <RxCross1 size="35px" color="red" />
                ) : (
                  <RxHamburgerMenu size="35px" />
                )}
              </div>
            </div>
          </div>

          {/* lg static */}
          <div
            className={`lg:shadow-none shadow-md lg:w-full lg:flex lg:items-center lg:justify-between lg:static absolute top-[20%] lg:bg-inherit bg-[var(--category-bg)] lg:h-fit w-[60%] ${
              show ? "left-0" : `-left-[600px]`
            }  lg:py-0 py-10 rounded-md lg:duration-0 duration-500 ease-linear z-50`}
          >
            <div className="lg:flex items-center gap-[29px]">
              <div className="logo lg:static flex justify-center lg:py-0 md:py-5">
                <img src={logo} alt="Noty_Logo" />
              </div>
              {/* nav_list */}
              <ul className="lg:flex gap-[29px] lg:pt-0 lg:pb-0 pb-5 pt-10">
                <a href="#hero" onClick={() => setShow(false)}>
                  <li className=" font-medium lg:pb-0 pb-5 lg:px-0 px-4 lg:hover:text-inherit hover:text-[var(--notes-subText-color)] duration-300 text-[20px]">
                    À propos de nous
                  </li>
                </a>
                <a href="#category" onClick={() => setShow(false)}>
                  <li className=" font-medium lg:pb-0 pb-5 lg:px-0 px-4 lg:hover:text-inherit hover:text-[var(--notes-subText-color)] duration-300 text-[20px]">
                    Catégories
                  </li>
                </a>
                <a href="#notes" onClick={() => setShow(false)}>
                  <li className=" font-medium lg:pb-0 pb-5 lg:px-0 px-4 lg:hover:text-inherit hover:text-[var(--notes-subText-color)] duration-300 text-[20px]">
                    Contactez-nous
                  </li>
                </a>
              </ul>
            </div>
            <div className="lg:flex items-center gap-[25px]">
              <li className="flex items-center lg:justify-start justify-center gap-[10px] font-semibold lg:px-0 px-4 lg:pb-0 pb-5 lg:hover:text-inherit text-[20px]">
                {" "}
                <img src={people} alt="people" /> Connexion
              </li>
              <div className=" text-center" onClick={() => setOpen(true)}>
                <button className="py-3 px-5 bg-[var(--btn-bg)] rounded-full text-white font-semibold text-[20px] ">
                  Pour Entreprises
                </button>
              </div>
            </div>
          </div>
          {/* lg static */}
          {/* {open && <Mobile setOpen={setOpen} />} */}
          {open && (
            <ModalTap
              open={open}
              setOpen={setOpen}
              subOpen={subOpen}
              setSubOpen={setSubOpen}
            />
          )}
          {subOpen && (
            <SubModal
              open={subOpen}
              setOpen={setSubOpen}
              subOpen={open}
              setSubOpen={setOpen}
              verify={verify}
              setVerify={setVerify}
            />
          )}

          {verify && (
            <VerifyModal
              subModal={subOpen}
              setSubModal={setSubOpen}
              subOpen={open}
              setSubOpen={setOpen}
              open={verify}
              setOpen={setVerify}
              checkOut={checkOut}
              setCheckOut={setCheckOut}
            />
          )}
          {checkOut && (
            <CheckOutModal
              subModal={subOpen}
              setSubModal={setSubOpen}
              subOpen={open}
              setSubOpen={setOpen}
              open={checkOut}
              setOpen={setCheckOut}
              complete={complete}
              setComplete={setComplete}
            />
          )}
          {complete && (
            <CompletedModal
              subModal={subOpen}
              setSubModal={setSubOpen}
              subOpen={open}
              setSubOpen={setOpen}
              open={complete}
              setOpen={setComplete}
              close={show}
              setClose={setShow}
            />
          )}
        </div>
      </div>
    </>
  );
}
