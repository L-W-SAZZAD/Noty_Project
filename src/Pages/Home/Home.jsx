import React from "react";
import Mobile from "../../Components/Header/Mobile/Mobile";
import HeroSection from "../HeroSection/HeroSection";
import CategoryPage from "../CategoryPage/CategoryPage";
import Notes from "../Notes/Notes";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
        <CategoryPage />
        <Notes />
      </div>
    </div>
  );
}
