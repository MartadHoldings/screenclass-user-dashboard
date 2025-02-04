import { HeroSection, GradeLevel, VideoLibrary } from "../sections";
export const Home = () => {
  return (
    <section className="min-h-screen w-full font-poppins">
      <HeroSection />
      <GradeLevel />
      <VideoLibrary />
    </section>
  );
};
