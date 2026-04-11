type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
};

const PageHero = ({ badge, title, description }: PageHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-orange-50 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700">
          {badge}
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
          {title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">{description}</p>
      </div>
    </section>
  );
};

export default PageHero;
