import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import CategorySingleItems from "./CategorySingleItems";

export default function CategoryPage() {
  return (
    <div id="category" className="bg-[var(--category-bg)]">
      <div className="lg:w-[var(--width)] lg:mx-auto w-full lg:px-0 px-4 pt-[52px]">
        <div className="category_heading lg:flex justify-between items-center">
          <div>
            <h2 className="lg:text-[32px] text-4xl text-normal text-[#000] font-semibold pb-[18px]">
              Explorez par Catégorie
            </h2>
            <p className="text-[#4F637B] font-medium ">
              Découvrez les entreprises et produits les mieux notés dans chaque
              catégorie et trouvez exactement ce que vous cherchez.
            </p>
          </div>
          <div className="flex items-center lg:pt-0 pt-5 ">
            <li className="  font-semibold text-xs text-[#006]">Voir Plus</li>
            <LiaLongArrowAltRightSolid />
          </div>
        </div>
        {/* category single items */}
        <div className="pt-[59px] pb-[84px]">
          <CategorySingleItems />
        </div>
        {/* category single items */}
      </div>
    </div>
  );
}
