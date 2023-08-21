import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import SingleNotes from "./SingleNotes";

export default function Notes() {
  return (
    <div>
      <div className="bg-[var(--notes-bg-color)]">
        <div className="lg:w-[var(--width)] lg:mx-auto w-full lg:px-0 px-4 pt-[60px]">
          <div className="category_heading flex justify-between items-center">
            <div>
              <h2 className=" text-[32px] text-normal text-[#000080] font-semibold pb-[18px]">
                Entreprises les mieux notées
              </h2>
              <p className="text-[#0066CC] font-medium text-xs">
                Plongez dans notre sélection des entreprises les mieux évaluées
                et les plus recommandées par nos utilisateurs satisfaits.
              </p>
            </div>
          </div>
          {/* category single items */}
          <div className="pt-[59px] pb-[74px]">
            <SingleNotes />
          </div>
          {/* category single items */}
        </div>
      </div>
    </div>
  );
}
