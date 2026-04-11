"use client";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const phone = "917012420156";
    const text = `Hello Raizan Ice Cream Hub! 🍨 I'm interested in GLAZE products.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:inline">WhatsApp</span>
    </button>
  );
};

export default FloatingWhatsApp;
