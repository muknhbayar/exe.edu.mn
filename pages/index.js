import react from "react";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Program from "../components/Program";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";




export default function Home() {
  return (
    <>
    <Navbar/>
    {/* <Header/> */}
    <Carousel/>
    <Program/>
    <About/>
    <News/>
    <Counter/>
    <Testimonials/>
    <Footer/>
    
     
     {/* <hr/> */}
    <div></div>
    
   
     <hr/>
    <div></div>



    </>
  

  );
}
