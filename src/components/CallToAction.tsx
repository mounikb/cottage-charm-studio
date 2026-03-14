import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="bg-card rounded-lg shadow-paper p-12 md:p-16"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          Ready to start growing?
        </h2>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
          Your garden is waiting. No algorithms, no noise — just you and your ideas, growing at their own pace.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Button variant="cottage" size="lg">
            Plant your garden →
          </Button>
          <Button variant="cottage-outline" size="lg">
            See examples
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
