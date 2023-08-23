import React from "react";
import category1 from "../../assets/Category/SVGRepo_iconCarrier.png";
import category2 from "../../assets/Category/SVGRepo_iconCarrier (1).png";
import category3 from "../../assets/Category/SVGRepo_iconCarrier (2).png";
import category4 from "../../assets/Category/SVGRepo_iconCarrier (4).png";
import category5 from "../../assets/Category/Group 98.png";
import category6 from "../../assets/Category/SVGRepo_iconCarrier (5).png";
import category7 from "../../assets/Category/SVGRepo_iconCarrier (3).png";
import category8 from "../../assets/Category/SVGRepo_iconCarrier (6).png";

export default function CategorySingleItems() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-[45px]">
      <div className="single_items bg-[var(--category-box-color)] rounded-[13px] p-[28px]">
        <img
          className="w-[54px] h-[54px] object-cover block"
          src={category1}
          alt="category1"
        />
        <h3 className="pt-[23px] font-semibold tracking-normal text-[19px] text-[#000]">
          Hôtels et Maisons d’Hôte
        </h3>
      </div>
      {/* 2 */}
      <div className="single_items bg-[var(--category-box-color)] rounded-[13px] p-[28px]">
        <img
          className="w-[54px] h-[54px] object-cover block"
          src={category2}
          alt="category2"
        />
        <h3 className="pt-[23px] font-semibold tracking-normal text-[19px] text-[#000]">
          Restaurants
        </h3>
      </div>
      {/* 3 */}
      <div className="single_items bg-[var(--category-box-color)] rounded-[13px] py-[35px] px-[30px]">
        <img
          className="w-[54px] h-[54px] object-cover block"
          src={category3}
          alt="category3"
        />
        <h3 className="pt-[23px] font-semibold tracking-normal text-[18px] text-[#000]">
          Services de Location de Voitures
        </h3>
      </div>
      {/* 4 */}
      <div className="single_items bg-[var(--category-box-color)] rounded-[13px] p-[28px]">
        <img
          className="w-[54px] h-[54px] object-cover block"
          src={category7}
          alt="category3"
        />
        <h3 className="pt-[23px] font-semibold tracking-normal text-[19px] text-[#000]">
          Boutique en Ligne
        </h3>
      </div>
      {/* 5 */}

      <div className="single_items bg-[var(--category-box-color)] rounded-[13px] p-[28px]">
        <img
          className="w-[54px] h-[54px] object-cover block"
          src={category4}
          alt="category4"
        />
        <h3 className="pt-[23px] font-semibold tracking-normal text-[19px] text-[#000]">
          Banques et Services Financière
        </h3>
      </div>
      {/* 6 */}
      <div className="single_items bg-[var(--category-box-color)] rounded-[13px] p-[28px]">
        <img
          className="w-[54px] h-[54px] object-cover block"
          src={category5}
          alt="category6"
        />
        <h3 className="pt-[23px] font-semibold tracking-normal text-[19px] text-[#000]">
          Bijouteries
        </h3>
      </div>
      {/* 7 */}
      <div className="single_items bg-[var(--category-box-color)] rounded-[13px] p-[28px]">
        <img
          className="w-[54px] h-[54px] object-cover block"
          src={category6}
          alt="category7"
        />
        <h3 className="pt-[23px] font-semibold tracking-normal text-[19px] text-[#000]">
          Magasins de Meubles
        </h3>
      </div>
      {/* 8 */}
      <div className="single_items bg-[var(--category-box-color)] rounded-[13px] p-[28px]">
        <img
          className="w-[54px] h-[54px] object-cover block"
          src={category8}
          alt="category3"
        />
        <h3 className="pt-[23px] font-semibold tracking-normal text-[19px] text-[#000]">
          Agences de Voyage
        </h3>
      </div>
    </div>
  );
}
