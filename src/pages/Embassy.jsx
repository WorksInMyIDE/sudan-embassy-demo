import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";

export default function Embassy({ t }) {
  const e = t.embassy;
  return (
    <>
      <div className="bg-green-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-12">
          <h1 className="mb-3 font-serif text-4xl font-semibold md:text-5xl">{t.nav.embassy}</h1>
          <p className="max-w-[55ch] text-green-100">{e.sub}</p>
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-12">
          <div>
            <h2 className="mb-3 font-serif text-3xl font-semibold">{e.aboutTitle}</h2>
            <p className="mb-4">{e.p1}</p>
            <p>{e.p2}</p>
          </div>
          <ImagePlaceholder label="Embassy building" ratio="16 / 10" />
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-[260px_1fr] md:px-12">
          <div>
            <ImagePlaceholder label="Ambassador portrait" ratio="4 / 5" />
            <p className="mt-3 font-serif text-xl font-semibold">{t.hero.headTitle}</p>
            <p>{t.hero.headName}</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-3xl font-semibold">{e.msgTitle}</h2>
            <p>{e.msg}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <h2 className="mb-7 font-serif text-3xl font-semibold">{e.funcTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {e.funcs.map(([title, text]) => (
              <div key={title} className="border bg-white p-6">
                <h3 className="mb-2 font-serif text-xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-12">
          <div className="border bg-white p-6">
            <h3 className="mb-3 font-serif text-xl font-semibold">{e.glanceTitle}</h3>
            <ul>
              {e.facts.map(([label, value]) => (
                <li key={label} className="flex justify-between gap-4 border-b py-2 last:border-0">
                  <span className="font-semibold">{label}</span>
                  <span className="text-end text-gray-600">{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-serif text-xl font-semibold">{e.visitTitle}</h3>
            <ImagePlaceholder label="Map or entrance photo" ratio="16 / 9" className="mb-4" />
            <p className="mb-4">{e.address}</p>
            <Link to="/#contact" className="inline-block bg-red-700 px-6 py-3 text-sm font-semibold text-white hover:bg-red-800">
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}