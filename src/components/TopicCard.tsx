import { motion } from "framer-motion";

interface TopicCardProps {
  category: string;
  title: string;
  description: string;
  index: number;
  size?: "default" | "tall" | "wide";
}

const TopicCard = ({ category, title, description, index, size = "default" }: TopicCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.07, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className={`group bg-card p-6 md:p-7 rounded-lg shadow-paper transition-colors duration-250 hover:bg-accent cursor-pointer flex flex-col justify-between ${
        size === "tall" ? "row-span-2" : ""
      } ${size === "wide" ? "col-span-2" : ""}`}
    >
      <div>
        <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
          {category}
        </span>
        <h3 className="font-serif text-lg text-foreground mt-2 leading-snug">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default TopicCard;
