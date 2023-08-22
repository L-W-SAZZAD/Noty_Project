import React from "react";
import heroPic from "../../assets/Logo/Header reviews.svg";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function HeroSection() {
  return (
    <div id="hero" className="bg-[var(--header-bg-color)]">
      <div className="lg:w-[var(--width)] w-full mx-auto lg:px-0 px-4 ">
        <div className="flex justify-between items-center pt-[78px] pb-3">
          <div className="hero_title">
            <h2 className="lg:text-5xl text-xl lg:px-0  font-bold">
              Noty - Votre guide de confiance pour les services et produits en
              Tunisie.
            </h2>
            <p className=" text-base font-semibold pt-[40px] pb-[116px]">
              Trouvez les meilleurs produits et services en un seul endroit.
            </p>
            <div className="btn_wrapper lg:flex items-center gap-[15px]">
              <button className="lg:w-[456px] md:w-[300px] w-[300px] h-[65px] rounded-full border-[2px] border-[#000066] text-[13px] font-medium text-[#667799] lg:mb-0 mb-5">
                Recherchez un établissement... (Boutiques, Restaurants, etc.)
              </button>
              <div>
                <button className="lg:w-[230px] w-[230px] h-[65px] rounded-full hero_btn text-white font-semibold flex justify-center items-center">
                  Laissez votre avis
                  <LiaLongArrowAltRightSolid size="25px" className="w-[28px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="hero_pic lg:block  hidden">
            <img className="w-[770px] h-[471px]" src={heroPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
