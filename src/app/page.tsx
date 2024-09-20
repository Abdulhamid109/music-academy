import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/whychooseus";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import Footer from "@/components/Footer";
import Instructor from "@/components/instructor"

export default function Home() {
  return (
    <main className="min-h-screen antialiased">

    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonials />
    <Instructor/>
    <Footer />
    </main>
  );
}
