type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

const TestimonialCard = ({ name, role, quote }: TestimonialCardProps) => {
  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
      <div className="text-3xl">💬</div>
      <p className="mt-4 text-sm leading-7 text-zinc-600">“{quote}”</p>

      <div className="mt-6">
        <h4 className="text-base font-semibold text-zinc-900">{name}</h4>
        <p className="text-sm text-pink-600">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
