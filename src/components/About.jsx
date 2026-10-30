import ImagePlaceholder from "./ImagePlaceholder";

const facts = [
  ["Representing", "Republic of the Sudan"],
  ["Accredited to", "Republic of Ghana"],
  ["Location", "Accra"],
  ["Languages", "Arabic, English"],
  ["Ministry", "Ministry of Foreign Affairs, Khartoum"],
];

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-2">
        <div>
          <h2 className="mb-3 font-serif text-3xl font-semibold cursor-default">The Embassy</h2>
          <p className="mb-4 cursor-default">
            The Embassy of the Republic of the Sudan in Accra represents the Government of the Sudan in Ghana. It promotes friendly relations, supports political, economic and cultural cooperation, and provides consular assistance to Sudanese citizens living in or travelling through Ghana.
          </p>
          <p>The Embassy also assists Ghanaian and other nationals who wish to travel to, trade with, or study in the Sudan.</p>
        </div>

        <div>
          <ImagePlaceholder label="Embassy building" ratio="16 / 10" className="mb-5" />
          <div className="border bg-white p-6">
            <h3 className="mb-3 font-serif text-xl font-semibold cursor-default">Mission at a glance</h3>
            <ul>
              {facts.map(([label, value]) => (
                <li key={label} className="flex cursor-default justify-between gap-4 border-b py-2 last:border-0">
                  <span className="font-semibold">{label}</span>
                  <span className="text-right text-gray-600">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}