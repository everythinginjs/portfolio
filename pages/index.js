import { useEffect } from "react";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
import About from "../src/components/About";
import Hero from "../src/Hero";
import LogoSection from "../src/components/LogoSection";
import ArtSection from "../src/components/ArtSection";
import Header from "../src/components/Header";
import CatalogueSection from "../src/components/CatalogueSection";
import PosterSection from "../src/components/PosterSection";
import WebDesignSection from "../src/components/WebDesignSection";

const HomePage = () => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Layout noHeader>
      <Header />
      <div className="wrapper">
        <Hero />
        <About />
        <ArtSection />
        <LogoSection />
        <CatalogueSection />
        <PosterSection />
        <WebDesignSection />
      </div>
    </Layout>
  );
};

export default HomePage;
