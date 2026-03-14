import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cottage.jpg";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="py-16 px-6 md:px-12 max-w-5xl mx-auto"
    >
      <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-paper">
        <img
          src={heroImage}
          alt="A cozy desk with journal, wildflowers and tea"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <p className="text-center text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-4 font-medium">
        Your quiet corner of the internet
      </p>
    </motion.div>
  );
};

export default HeroImage;
