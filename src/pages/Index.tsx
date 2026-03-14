import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import TopicCard from "@/components/TopicCard";
import FeaturesSection from "@/components/FeaturesSection";
import QuoteSection from "@/components/QuoteSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import botanicalStem from "@/assets/botanical-stem.png";
import heroImage from "@/assets/hero-cottage.jpg";
import botanicalStem from "@/assets/botanical-stem.png";

const topics = [
  { category: "Reading", title: "Why I read 50 books a year", description: "It started as a challenge and became the best habit of my life.", size: "tall" as const },
  { category: "Movies", title: "Films that changed how I see the world", description: "A quiet collection of stories that stayed with me.", size: "default" as const },
  { category: "Travel", title: "Three weeks in Japan with no plan", description: "Sometimes the best trips are the ones you don't plan.", size: "default" as const },
  { category: "Code", title: "Building in public — what I learned", description: "Shipping imperfect things is better than never shipping at all.", size: "default" as const },
  { category: "Music", title: "Albums I return to every year", description: "Some records never stop revealing new things.", size: "default" as const },
  { category: "Writing", title: "On keeping a journal for 10 years", description: "A small practice that quietly changed everything.", size: "tall" as const },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Editorial centered headline */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-10">
        {/* Floating botanical accent */}
        <motion.img
          src={botanicalStem}
          alt=""
          aria-hidden
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.3, rotate: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="hidden lg:block absolute left-[48%] top-4 w-20 pointer-events-none select-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Your digital garden awaits
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground mt-6 leading-[0.95] tracking-[-0.03em]"
            >
              Grow your
              <br />
              <span className="text-primary italic">ideas</span> here.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg md:text-xl text-muted-foreground mt-8 max-w-xl leading-relaxed"
            >
              Leaflet is a quiet corner of the internet where you can collect, write, 
              and share the things that matter — no algorithms, no noise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-3 mt-10"
            >
              <Button variant="cottage" size="lg">
                Plant your garden →
              </Button>
              <Button variant="cottage-outline" size="lg">
                Explore gardens
              </Button>
            </motion.div>
          </div>

          {/* Right — Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-paper">
              <img
                src={heroImage}
                alt="A cozy desk with journal, wildflowers and tea"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-3 text-center font-medium">
              Your quiet corner of the internet
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento grid of topics */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
            What people are growing
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(160px,auto)]">
          {topics.map((topic, i) => (
            <TopicCard key={topic.category} {...topic} index={i} />
          ))}
        </div>
      </section>

      {/* Hero Image */}
      <HeroImage />

      {/* Features / How it works */}
      <FeaturesSection />

      {/* Quote */}
      <QuoteSection />

      {/* CTA */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
