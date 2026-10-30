export default function Contact({ t }) {
  const c = t.contact;
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
        <div>
          <h2 className="mb-3 font-serif text-3xl font-semibold">{c.title}</h2>
          <ul>
            {c.rows.map(([label, value]) => (
              <li key={label} className="flex gap-4 border-b py-2">
                <span className="w-28 shrink-0 font-semibold">{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="self-start border bg-white p-6">
          <h3 className="mb-2 font-serif text-xl font-semibold">{c.hoursTitle}</h3>
          <ul>
            {c.hours.map(([day, time]) => (
              <li key={day} className="flex justify-between border-b py-2">
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-gray-600">{c.bring}</p>
        </div>
      </div>
    </section>
  );
}