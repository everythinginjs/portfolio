import { useEffect } from "react";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
import About from "../src/components/About";
import Resume from "../src/components/Resume";
import Hero from "../src/Hero";
import Work from "../src/components/Work";
import Art from "../src/components/Art";
import Header from "../src/components/Header";

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
        <Resume />
        <Art />
        <Work />
      </div>
    </Layout>
  );
};

export default HomePage;
