const Footer = () => {
  const date = new Date();
  return (
    <footer className="text-center py-6 text-sm text-neutral-600 dark:text-neutral-400 dark:bg-black bg-white">
      © {date.getFullYear()} Benmansour Mohamed Yacine. All rights reserved.
    </footer>
  );
};

export default Footer;
