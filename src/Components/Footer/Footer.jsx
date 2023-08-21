import React from "react";
import logo from "../../assets/Logo/Official Logo white 4.png";
import footer from "../../assets/footer/Yuniqode white png 1.png";
import icon1 from "../../assets/Social Icons/_Facebook.png";
import icon2 from "../../assets/Social Icons/_Twitter.png";
import icon3 from "../../assets/Social Icons/Group.png";
import icon4 from "../../assets/Social Icons/Vector.png";

export default function Footer() {
  return (
    <>
      <div id="footer" className="pt-[84px] pb-[21px] bg-[#000033]">
        <div className="lg:w-[var(--width)] mx-auto lg:px-0 px-4 text-white">
          <div className="footer lg:flex justify-between items-center">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p className="w-[336px] pt-[10px] leading-6 text-[14px]">
                Construisant des ponts entre les consommateurs et les
                entreprises pour une meilleure expérience de consommation en
                Tunisie.
              </p>
            </div>
            <div className="footer_list flex gap-[100px] lg:pt-0 pt-5">
              <div>
                <h2 className="text-[20px] font-medium text-white pb-[33px]">
                  Noty
                </h2>
                <li className="text-[16px] font-medium">Notre mission</li>
                <li className="text-[16px] font-medium">Carrières</li>
                <li className="text-[16px] font-medium">Nous contacter</li>
                <li className="text-[16px] font-medium">Guide d’utilisation</li>
              </div>
              <div>
                <h2 className="text-[20px] font-medium text-white pb-[33px]">
                  Entreprises
                </h2>
                <li className="text-[16px] font-medium">Pourquoi Noty?</li>
                <li className="text-[16px] font-medium">Plans & tarifs</li>
                <li className="text-[16px] font-medium">Espace Entreprise</li>
              </div>
              <div>
                <h2 className="text-[20px] font-medium text-white pb-[33px]">
                  Légal
                </h2>
                <li className="text-[16px] font-medium">
                  Conditions d'utilisation
                </li>
                <li className="text-[16px] font-medium">
                  Politique de confidentialité
                </li>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#FFFFFF] mb-[10px] mt-[61px]"></div>
          <div className="flex justify-between items-center pt-[21px]">
            <div className="flex items-center justify-center">
              <p className="flex items-center leading-6">
                &copy;2023 Noty - Tous droits réservés. | Conçu et Développé par
              </p>
              <div className="mt-[9px] lg:block hidden">
                <img src={footer} alt="" />
              </div>
            </div>
            <div className="social_icons flex gap-5 items-center justify-center">
              <img className="w-[16px] h-[16px]" src={icon3} alt="logo" />
              <img className="w-[16px] h-[16px]" src={icon1} alt="logo" />
              <img className="w-[16px] h-[16px]" src={icon2} alt="logo" />
              <img className="w-[16px] h-[16px]" src={icon4} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
