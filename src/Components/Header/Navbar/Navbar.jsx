import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo/Official Logo 5.png";
import people from "../../../assets/Logo/SVGRepo_iconCarrier.png";
import Hamburger from "hamburger-react";
import Mobile from "../Mobile/Mobile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[var(--header-bg-color)]">
        <div className="lg:w-[var(--width)] lg:mx-auto md:w-full w-full py-2 lg:px-0 px-4">
          <div className="logo lg:hidden">
            <div className="flex justify-between items-center">
              <img src={logo} alt="Noty_Logo" />
              <div className="icons " onClick={() => setOpen(!open)}>
                <Hamburger />
              </div>
            </div>
          </div>

          {/* lg static */}
          <div className="lg:flex items-center justify-between lg:static hidden">
            <div className="lg:flex  items-center gap-[29px]">
              <div className="logo">
                <img src={logo} alt="Noty_Logo" />
              </div>
              {/* nav_list */}
              <ul className="lg:flex gap-[29px]">
                <li className=" font-medium">À propos de nous</li>
                <li className=" font-medium">Catégories</li>
                <li className=" font-medium">Contactez-nous</li>
              </ul>
            </div>
            <div className="lg:flex items-center gap-[25px]">
              <li className="flex items-center gap-[10px] font-semibold">
                {" "}
                <img src={people} alt="people" /> Connexion
              </li>
              <button className="w-[161px] h-[44px] bg-[var(--btn-bg)] rounded-full text-white font-semibold text-xs">
                Pour Entreprises
              </button>
            </div>
          </div>
          {/* lg static */}
          {open && <Mobile setOpen={setOpen} />}
        </div>
      </div>
    </>
  );
}
