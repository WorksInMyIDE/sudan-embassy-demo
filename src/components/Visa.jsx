export default function Visa({ t }) {
  const v = t.visas;
  return (
    <section id="visas" className="py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
        <div>
          <h2 className="mb-3 font-serif text-3xl font-semibold">{v.title}</h2>
          <p className="mb-4">{v.intro}</p>
          <details open className="border-b py-3">
            <summary className="cursor-pointer font-semibold">{v.reqTitle}</summary>
            <ul className="mt-2 list-disc ps-5 text-gray-600">
              {v.req.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </details>
          <details className="border-b py-3">
            <summary className="cursor-pointer font-semibold">{v.procTitle}</summary>
            <p className="mt-2 text-gray-600">{v.proc}</p>
          </details>
        </div>

        <div className="self-start border bg-white p-6">
          <h3 className="mb-2 font-serif text-xl font-semibold">{v.beforeTitle}</h3>
          <p className="mb-3 text-sm text-gray-600">{v.before}</p>
          <ul>
            {v.types.map((type) => (
              <li key={type} className="flex justify-between border-b py-2 text-sm last:border-0">
                <span>{type}</span>
                <span>{v.leadTime}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}