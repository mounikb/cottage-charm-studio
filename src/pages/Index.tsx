import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import TopicCard from "@/components/TopicCard";
import { Button } from "@/components/ui/button";

const topics = [
  { category: "Reading", title: "Why I read 50 books a year", description: "It started as a challenge and became the best habit of my life." },
  { category: "Movies", title: "Films that changed how I see the world", description: "A quiet collection of stories that stayed with me." },
  { category: "Code", title: "Building in public — what I learned", description: "Shipping imperfect things is better than never shipping at all." },
  { category: "Travel", title: "Three weeks in Japan with no plan", description: "Sometimes the best trips are the ones you don't plan." },
  { category: "Music", title: "Albums I return to every year", description: "Some records never stop revealing new things." },
  { category: "Writing", title: "On keeping a journal for 10 years", description: "A small practice that quietly changed everything." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Hero copy */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-3xl md:text-4xl text-muted-foreground leading-[1.2]"
            >
              Hey there, welcome to{" "}
              <span className="text-foreground font-medium">Leaflet</span> 🌸
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-2xl md:text-3xl text-muted-foreground leading-[1.3]"
            >
              A place to grow your{" "}
              <span className="text-foreground underline decoration-primary/30 underline-offset-4">
                digital garden
              </span>{" "}
              🌱 — share what you love, what you're learning, and what makes you{" "}
              <em className="text-foreground not-italic font-medium">you</em>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-xl md:text-2xl text-muted-foreground leading-[1.4]"
            >
              No code needed. Just pick a name, plant some cards, and share your corner of the internet with the world.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-xl md:text-2xl text-muted-foreground leading-[1.4]"
            >
              Everyone deserves a{" "}
              <span className="text-foreground underline decoration-primary/30 underline-offset-4">
                beautiful space online
              </span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex gap-3 pt-2"
            >
              <Button variant="cottage" size="lg">
                Plant your garden →
              </Button>
              <Button variant="cottage-outline" size="lg">
                Explore gardens
              </Button>
            </motion.div>
          </div>

          {/* Right — Topic cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((topic, i) => (
              <TopicCard key={topic.category} {...topic} index={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
