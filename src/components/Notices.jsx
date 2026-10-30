export default function Notices({ t }) {
  const n = t.notices;
  return (
    <section id="notices" className="py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
        <div>
          <h2 className="mb-3 font-serif text-3xl font-semibold">{n.title}</h2>
          <ul>
            {n.items.map(([title, text]) => (
              <li key={title} className="border-b py-4">
                <p className="text-sm text-gray-500">{n.date}</p>
                <p className="font-semibold">{title}</p>
                <p className="text-gray-600">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="self-start border bg-white p-6">
          <h3 className="mb-2 font-serif text-xl font-semibold">{n.linksTitle}</h3>
          <ul className="list-disc ps-5 text-gray-600">
            {n.links.map((link) => <li key={link}>{link}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}