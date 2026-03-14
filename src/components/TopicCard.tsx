import { motion } from "framer-motion";

interface TopicCardProps {
  category: string;
  title: string;
  description: string;
  index: number;
}

const TopicCard = ({ category, title, description, index }: TopicCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.05, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className="group bg-card p-6 rounded-lg shadow-paper transition-colors duration-250 hover:bg-accent cursor-pointer"
    >
      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
        {category}
      </span>
      <h3 className="font-serif text-lg text-foreground mt-2 leading-snug">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default TopicCard;
