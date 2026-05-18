import logo from '../assets-logo.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
        <div className="flex items-center gap-3"><img src={logo} alt="D2Eminence" className="h-10 w-auto" /><span>© 2010 D2Eminence. All rights reserved.</span></div>
        <div className="flex gap-5"><NavLink to="/services" className="hover:text-blue-700">Services</NavLink><NavLink to="/about" className="hover:text-blue-700">About</NavLink><NavLink to="/contact" className="hover:text-blue-700">Contact</NavLink></div>
      </div>
    </footer>
  );
}
