import { motion } from "framer-motion";
import { BookOpen, Feather, Leaf } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Plant your ideas",
    description: "Start with a seed — a thought, a bookmark, a sketch. Watch it grow into something meaningful over time.",
  },
  {
    icon: BookOpen,
    title: "Curate, don't perform",
    description: "No likes, no followers. Just a quiet space to collect the things that matter to you.",
  },
  {
    icon: Feather,
    title: "Write at your own pace",
    description: "No publishing pressure. Add a sentence today, a paragraph next week. Your garden grows with you.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-center mb-16"
      >
        <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
          How it works
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
          Grown slowly, made by hand.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
          A digital garden isn't a blog. It's a living collection of ideas — messy, evolving, and entirely yours.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="bg-card p-8 rounded-lg shadow-paper text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-accent mb-5">
              <feature.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif text-xl text-foreground">{feature.title}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
