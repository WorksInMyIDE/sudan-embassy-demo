export default function Consular({ t }) {
  const c = t.consular;
  return (
    <section id="consular" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="mb-3 font-serif text-3xl font-semibold">{c.title}</h2>
        <p className="mb-7 max-w-xl text-gray-600">{c.lead}</p>

        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.cards.map(([title, text]) => (
            <div key={title} className="border bg-white p-6">
              <h3 className="mb-2 font-serif text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>

        {c.faqs.map(([question, answer]) => (
          <details key={question} className="border-b py-3">
            <summary className="cursor-pointer font-semibold">{question}</summary>
            <p className="mt-2 max-w-2xl text-gray-600">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}