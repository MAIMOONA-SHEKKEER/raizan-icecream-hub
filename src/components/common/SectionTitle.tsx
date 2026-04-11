type SectionTitleProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
};

const SectionTitle = ({
  badge,
  title,
  description,
  align = "left",
}: SectionTitleProps) => {
  const alignClass =
    align === "center" ? "text-center" : align === "right" ? "text-right" : "";

  return (
    <div className={alignClass}>
      {badge && (
        <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
