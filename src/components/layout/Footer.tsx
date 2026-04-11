const Footer = () => {
  return (
    <footer className="border-t border-pink-100 bg-pink-50">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-bold text-pink-600">
              Raizan Ice Cream Hub
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Premium scoops, joyful moments, and the sweetest flavors in town.
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            © 2026 Raizan Ice Cream Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
