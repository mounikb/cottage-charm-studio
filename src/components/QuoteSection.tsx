import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <motion.blockquote
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <p className="font-serif text-2xl md:text-3xl text-foreground leading-[1.4] italic">
          "The garden is a metaphor for the mind — you don't need to show everything at once.
          Let things bloom when they're ready."
        </p>
        <footer className="mt-6">
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
            — A fellow gardener
          </span>
        </footer>
      </motion.blockquote>
    </section>
  );
};

export default QuoteSection;
