import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="w-full py-5 px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-8">
        <span className="font-serif text-lg font-medium text-foreground bg-card px-4 py-1.5 rounded-lg shadow-paper">
          Leaflet
        </span>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gardens</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Topics</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
        <Button variant="cottage" size="sm">Sign up</Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
