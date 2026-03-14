const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg font-medium text-foreground">Leaflet</span>
          <span className="text-muted-foreground text-sm">🌸</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
        </div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          Made with care, 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
