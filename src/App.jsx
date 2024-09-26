import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Img1 from "./assets/banner1.jpg";
import Img2 from "./assets/banner2.jpg";
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE YOUR PROJECT ",
  title: "Hire Skilled Freelancers on Your Schedule",
  subtitle:
    "Our platform allows you to hire freelancers according to your project timeline. Stay updated with their availability and track milestones effortlessly. The best solution for managing freelancer schedules and deadlines, ensuring top-notch project delivery",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE YOUR PROJECT ",
  title: "Talented Freelancers to Fulfill Your Project Needs",
  subtitle:
    "Choose from a pool of skilled and vetted freelancers tailored to your project requirements. Our platform ensures you find the right match for your tasks with easy-to-use scheduling and communication tools",
  link: "#",
};

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;
