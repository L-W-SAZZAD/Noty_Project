import React, { useEffect, useState } from "react";
import Mobile from "../../Components/Header/Mobile/Mobile";
import HeroSection from "../HeroSection/HeroSection";
import CategoryPage from "../CategoryPage/CategoryPage";
import Notes from "../Notes/Notes";
import { useLocation } from "react-router-dom";
import { BsArrowUpCircleFill } from "react-icons/bs";
import ModalTap from "../../Utilitis/ModalTap/ModalTap";

export default function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // scroll
  const [bottomScroll, setBottomScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBottomScroll(true);
      } else {
        setBottomScroll(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // scroll
  return (
    <div>
      <div>
        <HeroSection />
        <CategoryPage />
        <Notes />

        {bottomScroll && (
          <BsArrowUpCircleFill
            onClick={scrollUp}
            className="right-2 text-[#001efff0] cursor-pointer bottom-0 z-[100] text-5xl fixed "
          />
        )}
      </div>
    </div>
  );
}
