import logo from '../assets-logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" aria-label="Go to home page">
          <img src={logo} alt="D2Eminence logo" className="h-14 w-auto" />
        </NavLink>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <NavLink to="/services" className="hover:text-blue-700">Services</NavLink>
          <NavLink to="/about" className="hover:text-blue-700">About</NavLink>
          <NavLink to="/process" className="hover:text-blue-700">Process</NavLink>
          <NavLink to="/contact" className="hover:text-blue-700">Contact</NavLink>
        </nav>
        <NavLink to="/contact" className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800">Get Consultation</NavLink>
      </div>
    </header>
  );
}
