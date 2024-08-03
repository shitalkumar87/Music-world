import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

 

export default function Home() {
  return (
      <main  className="min-h-screen  bg-black[0.96] antialiased bg-grid-white/[0.02] border-white">
   
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <TestimonialCard/>
        <UpcomingWebinar/>
        <Instructors/>
        <Footer/>
      </main>
  );
}
