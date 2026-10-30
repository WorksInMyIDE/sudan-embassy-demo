import ImagePlaceholder from "./ImagePlaceholder";

export default function Relations({ t }) {
  const r = t.relations;
  return (
    <section id="relations" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="mb-3 font-serif text-3xl font-semibold">{r.title}</h2>
        <p className="mb-7 max-w-xl text-gray-600">{r.lead}</p>
        <div className="grid gap-5 md:grid-cols-3">
          {r.cards.map(([title, text], i) => (
            <div key={title} className="border bg-white p-6">
              <ImagePlaceholder label={`Relations photo ${i + 1}`} ratio="3 / 2" className="mb-4" />
              <h3 className="mb-2 font-serif text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}