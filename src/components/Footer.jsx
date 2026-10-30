import { Link } from "react-router-dom";

export default function Footer({ t }) {
  return (
    <footer className="bg-green-900 py-10 text-sm text-green-100">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-10 px-5">
        <div>
          <p className="font-semibold">{t.brand.name}</p>
          <p>{t.brand.city}</p>
        </div>
        <div className="flex flex-col">
          <Link to="/embassy" className="hover:underline">{t.nav.embassy}</Link>
          <Link to="/#consular" className="hover:underline">{t.nav.consular}</Link>
          <Link to="/#visas" className="hover:underline">{t.nav.visas}</Link>
          <Link to="/#contact" className="hover:underline">{t.nav.contact}</Link>
        </div>
        <p className="max-w-xs">{t.footer}</p>
      </div>
    </footer>
  );
}