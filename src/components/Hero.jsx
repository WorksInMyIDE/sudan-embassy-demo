import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero({ t }) {
  const h = t.hero;
  return (
    <div className="relative overflow-hidden bg-green-900 text-white">
      <div className="absolute inset-y-0 inset-s-0 w-1/3 bg-green-700 opacity-40 [clip-path:polygon(0_0,100%_50%,0_100%)] rtl:-scale-x-100" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_320px] md:px-12 md:py-28">
        <div className="md:ps-16">
          <h1 className="mb-4 max-w-[15ch] font-serif text-4xl font-semibold md:text-5xl">{h.title}</h1>
          <p className="max-w-[46ch] text-green-100">{h.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#consular" className="bg-red-700 px-6 py-3 text-sm font-semibold hover:bg-red-800">{h.cta1}</a>
            <a href="#visas" className="border border-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-green-900">{h.cta2}</a>
          </div>
        </div>
        <aside className="border-t-4 border-red-700 bg-white p-6 text-gray-900">
          <ImagePlaceholder label="Ambassador portrait" ratio="4 / 5" className="mb-4 max-w-40" />
          <h3 className="font-serif text-xl font-semibold">{h.headTitle}</h3>
          <p className="mb-1">{h.headName}</p>
          <p className="text-sm text-gray-500">{h.headRole}</p>
        </aside>
      </div>
    </div>
  );
}