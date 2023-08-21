import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo/Official Logo 5.png";
import people from "../../../assets/Logo/SVGRepo_iconCarrier.png";
export default function Mobile({ setOpen }) {
  return (
    <div onClick={() => setOpen(false)}>
      <div className="w-[50%] bg-[var(--header-bg-color)] py-5 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 duration-700">
        <div className="logo">
          <img className="w-[90px] mx-auto" src={logo} alt="logo" />
        </div>
        <ul className=" px-4 py-5">
          <li className="pb-5 font-medium text-xs">À propos de nous</li>
          <li className="pb-5 font-medium text-xs">Catégories</li>
          <li className="pb-5 font-medium text-xs">Contactez-nous</li>
          <div className="flex items-center pb-5">
            <img src={people} alt="" />
            <li>Connexion</li>
          </div>
          <button className="w-[161px] h-[44px] bg-[var(--btn-bg)] rounded-full text-white font-semibold text-xs">
            Pour Entreprises
          </button>
        </ul>
      </div>
    </div>
  );
}
