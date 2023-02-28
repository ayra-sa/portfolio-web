// import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import About from "../components/About/About";
import { abouts, hero } from "../constants/constants";
import Contact from "../components/Contact/Contact";
import { Layout } from "../Layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Hero {...hero} />
      {/* <Section>
        <BgAnimation />
      </Section> */}
      <About {...abouts} />
      <Technologies />
      <Projects />
      <Contact />
      {/* <Timeline />
      <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
