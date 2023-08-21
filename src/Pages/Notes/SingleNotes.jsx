import React from "react";
import img1 from "../../assets/Notes/logo_darty 1.png";
import img2 from "../../assets/Notes/347607172_617243330089630_28312197502042379_n 1.png";
import img3 from "../../assets/Notes/326732265_612793127524990_8319150349199829063_n 1.png";
import img4 from "../../assets/Notes/399010_10151170752048874_483975833_n 1.png";
import img5 from "../../assets/Notes/unnamed 1.png";
import img6 from "../../assets/Notes/106046609_10158285942070907_7859076810884144613_n 1.png";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LuFolderEdit } from "react-icons/lu";
export default function SingleNotes() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[45px]">
        {/* single notes 1*/}
        <div className="notes bg-[#FFFFFF] rounded-[13px]">
          <div className=" flex gap-[19px] p-[25px]">
            <img
              className="w-[70px] h-[70px] object-cover block"
              src={img1}
              alt="category1"
            />
            <div className=" pt-[20px]">
              <h2 className=" font-bold text-[24px] text-[#000066] pb-[2px]">
                DARTY
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[2px]">
                Entreprise de vente au détail
              </p>
              <div className="ratting">
                <div className="flex items-center py-5">
                  <StarRatings
                    rating={4.403}
                    starRatedColor="#43A047"
                    starDimension="20px"
                    numberOfStars={5}
                    starSpacing="3px"
                  />
                  <span className="w-[6px] h-[6px] bg-[#43A047] inline-block rounded-full ml-2"></span>
                  <h5 className="pl-2 font-semibold text-[13px] text-[#43A047]">
                    EXCELLENT
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">4.3/5</span>
                </p>
                <p className="pb-[30px] font-medium text-[15px] text-[#333333] pt-[10px]">
                  Nombre d’avis: <span className="text-[#000099]">250</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EDEDFF] mb-[10px]"></div>
          <div className="btns flex justify-between items-center px-[25px] py-[11px]">
            <Link className="flex items-center text-[#000066]">
              Lire les avis{" "}
              <LiaLongArrowAltRightSolid size="30px" color="#000066" />
            </Link>
            <button className="flex items-center gap-2 font-medium text-[15px] bg-[#DAE4FF]  w-[133px] h-[40px] text-center justify-center rounded-full text-[#000066]">
              <LuFolderEdit size="12px" color="#000066" /> site web
            </button>
          </div>
        </div>
        {/* single notes */}
        {/* single notes 2*/}
        <div className="notes bg-[#FFFFFF] rounded-[13px]">
          <div className=" flex gap-[19px] p-[25px]">
            <img
              className="w-[70px] h-[70px] object-cover block"
              src={img2}
              alt="category1"
            />
            <div className=" pt-[20px]">
              <h2 className=" font-bold text-[24px] text-[#000066] pb-[2px]">
                Ennakl Automobiles
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[2px]">
                Concessionnaire de Voitures
              </p>
              <div className="ratting">
                <div className="flex items-center py-5">
                  <StarRatings
                    rating={2.403}
                    starRatedColor="#FCD700"
                    starDimension="20px"
                    numberOfStars={5}
                    starSpacing="3px"
                  />
                  <span className="w-[6px] h-[6px] bg-[#FCD700] inline-block rounded-full ml-2"></span>
                  <h5 className="pl-2 font-semibold text-[13px] text-[#FCD700]">
                    MOYEN
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">2.5/5</span>
                </p>
                <p className="pb-[30px] font-medium text-[15px] text-[#333333] pt-[10px]">
                  Nombre d’avis: <span className="text-[#000099]">121</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EDEDFF] mb-[10px]"></div>
          <div className="btns flex justify-between items-center px-[25px] py-[11px]">
            <Link className="flex items-center text-[#000066]">
              Lire les avis{" "}
              <LiaLongArrowAltRightSolid size="30px" color="#000066" />
            </Link>
            <button className="flex items-center gap-2 font-medium text-[15px] bg-[#DAE4FF]  w-[133px] h-[40px] text-center justify-center rounded-full text-[#000066]">
              <LuFolderEdit size="12px" color="#000066" /> site web
            </button>
          </div>
        </div>
        {/* single notes */}
        {/* single notes 3*/}
        <div className="notes bg-[#FFFFFF] rounded-[13px]">
          <div className=" flex gap-[19px] p-[25px]">
            <img
              className="w-[70px] h-[70px] object-cover block"
              src={img3}
              alt="category1"
            />
            <div className=" pt-[20px]">
              <h2 className=" font-bold text-[15px] text-[#000066] pb-[2px]">
                La Cigale Tabarka Hôtel-Thalasso & Spa - Golf
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[2px]">
                Hôtels et Maisons d'Hôte
              </p>
              <div className="ratting">
                <div className="flex items-center py-5">
                  <StarRatings
                    rating={4}
                    starRatedColor="#7B1FA2"
                    starDimension="20px"
                    numberOfStars={5}
                    starSpacing="3px"
                  />
                  <span className="w-[6px] h-[6px] bg-[#7B1FA2] inline-block rounded-full ml-2"></span>
                  <h5 className="pl-2 font-semibold text-[13px] text-[#7B1FA2]">
                    BON
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">4.0/5</span>
                </p>
                <p className="pb-[30px] font-medium text-[15px] text-[#333333] pt-[10px]">
                  Nombre d’avis: <span className="text-[#000099]">121</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EDEDFF] mb-[10px]"></div>
          <div className="btns flex justify-between items-center px-[25px] py-[11px]">
            <Link className="flex items-center text-[#000066]">
              Lire les avis{" "}
              <LiaLongArrowAltRightSolid size="30px" color="#000066" />
            </Link>
            <button className="flex items-center gap-2 font-medium text-[15px] bg-[#DAE4FF]  w-[133px] h-[40px] text-center justify-center rounded-full text-[#000066]">
              <LuFolderEdit size="12px" color="#000066" /> site web
            </button>
          </div>
        </div>
        {/* single notes */}
        {/* single notes 4*/}
        <div className="notes bg-[#FFFFFF] rounded-[13px]">
          <div className=" flex gap-[19px] p-[25px]">
            <img
              className="w-[70px] h-[70px] object-cover block"
              src={img4}
              alt="category1"
            />
            <div className=" pt-[20px]">
              <h2 className=" font-bold text-[15px] text-[#000066] pb-[2px]">
                GlobalNet
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[2px]">
                IT et Communication
              </p>
              <div className="ratting">
                <div className="flex items-center py-5">
                  <StarRatings
                    rating={2}
                    starRatedColor="#FF7A00"
                    starDimension="20px"
                    numberOfStars={5}
                    starSpacing="3px"
                  />
                  <span className="w-[6px] h-[6px] bg-[#FF7A00] inline-block rounded-full ml-2"></span>
                  <h5 className="pl-2 font-semibold text-[13px] text-[#FF7A00]">
                    DÉCEVANT
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">1.8/5</span>
                </p>
                <p className="pb-[30px] font-medium text-[15px] text-[#333333] pt-[10px]">
                  Nombre d’avis: <span className="text-[#000099]">10</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EDEDFF] mb-[10px]"></div>
          <div className="btns flex justify-between items-center px-[25px] py-[11px]">
            <Link className="flex items-center text-[#000066]">
              Lire les avis{" "}
              <LiaLongArrowAltRightSolid size="30px" color="#000066" />
            </Link>
            <button className="flex items-center gap-2 font-medium text-[15px] bg-[#DAE4FF]  w-[133px] h-[40px] text-center justify-center rounded-full text-[#000066]">
              <LuFolderEdit size="12px" color="#000066" /> site web
            </button>
          </div>
        </div>
        {/* single notes */}
        {/* single notes 5*/}
        <div className="notes bg-[#FFFFFF] rounded-[13px]">
          <div className=" flex gap-[19px] p-[25px]">
            <img
              className="w-[70px] h-[70px] object-cover block"
              src={img5}
              alt="category1"
            />
            <div className=" pt-[20px]">
              <h2 className=" font-bold text-[15px] text-[#000066] pb-[2px]">
                Bolt
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[2px]">
                Services de Taxi et VTC
              </p>
              <div className="ratting">
                <div className="flex items-center py-5">
                  <StarRatings
                    rating={1}
                    starRatedColor="#EA0000"
                    starDimension="20px"
                    numberOfStars={5}
                    starSpacing="3px"
                  />
                  <span className="w-[6px] h-[6px] bg-[#EA0000] inline-block rounded-full ml-2"></span>
                  <h5 className="pl-2 font-semibold text-[13px] text-[#EA0000]">
                    MÉDIOCRE
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">1.0/5</span>
                </p>
                <p className="pb-[30px] font-medium text-[15px] text-[#333333] pt-[10px]">
                  Nombre d’avis: <span className="text-[#000099]">650</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EDEDFF] mb-[10px]"></div>
          <div className="btns flex justify-between items-center px-[25px] py-[11px]">
            <Link className="flex items-center text-[#000066]">
              Lire les avis{" "}
              <LiaLongArrowAltRightSolid size="30px" color="#000066" />
            </Link>
            <button className="flex items-center gap-2 font-medium text-[15px] bg-[#DAE4FF]  w-[133px] h-[40px] text-center justify-center rounded-full text-[#000066]">
              <LuFolderEdit size="12px" color="#000066" /> site web
            </button>
          </div>
        </div>
        {/* single notes */}
        {/* single notes 6*/}
        <div className="notes bg-[#FFFFFF] rounded-[13px]">
          <div className=" flex gap-[19px] p-[25px]">
            <img
              className="w-[70px] h-[70px] object-cover block"
              src={img6}
              alt="category1"
            />
            <div className=" pt-[20px]">
              <h2 className=" font-bold text-[15px] text-[#000066] pb-[2px]">
                Zara
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[2px]">
                Magasin de Vêtements
              </p>
              <div className="ratting">
                <div className="flex items-center py-5">
                  <StarRatings
                    rating={2.134}
                    starRatedColor="#FCD700"
                    starDimension="20px"
                    numberOfStars={5}
                    starSpacing="3px"
                  />
                  <span className="w-[6px] h-[6px] bg-[#FCD700] inline-block rounded-full ml-2"></span>
                  <h5 className="pl-2 font-semibold text-[13px] text-[#FCD700]">
                    MOYEN
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">4.0/5</span>
                </p>
                <p className="pb-[30px] font-medium text-[15px] text-[#333333] pt-[10px]">
                  Nombre d’avis: <span className="text-[#000099]">121</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EDEDFF] mb-[10px]"></div>
          <div className="btns flex justify-between items-center px-[25px] py-[11px]">
            <Link className="flex items-center text-[#000066]">
              Lire les avis{" "}
              <LiaLongArrowAltRightSolid size="30px" color="#000066" />
            </Link>
            <button className="flex items-center gap-2 font-medium text-[15px] bg-[#DAE4FF]  w-[133px] h-[40px] text-center justify-center rounded-full text-[#000066]">
              <LuFolderEdit size="12px" color="#000066" /> site web
            </button>
          </div>
        </div>
        {/* single notes */}
      </div>
      <p className=" pt-[81px] flex items-center text-[#000066] font-medium text-[15px] gap-1">
        Trouver d'autres entreprises recommandées{" "}
        <LiaLongArrowAltRightSolid size="30px" />
      </p>
    </div>
  );
}
