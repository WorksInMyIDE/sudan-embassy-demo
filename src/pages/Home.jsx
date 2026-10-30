import Hero from "../components/Hero";
import Consular from "../components/Consular";
import Visa from "../components/Visa";
import Relations from "../components/Relations";
import Notices from "../components/Notices";
import Contact from "../components/Contact";

export default function Home({ t }) {
  return (
    <>
      <Hero t={t} />
      <Consular t={t} />
      <Visa t={t} />
      <Relations t={t} />
      <Notices t={t} />
      <Contact t={t} />
    </>
  );
}