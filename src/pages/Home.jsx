import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets-logo.png';

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-red-200/40 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">Software Consultancy • Cloud • Support • Digital Transformation</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Reliable technology solutions for growing businesses</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">D2Eminence helps organizations design, build, modernize, and support secure software platforms that improve operations and accelerate growth.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-700/20 hover:bg-blue-800">Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 hover:border-blue-300 hover:text-blue-700">Explore Services</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-200 ring-1 ring-slate-200">
            <div className="flex justify-center border-b border-slate-100 pb-8"><img src={logo} alt="D2Eminence" className="h-36 w-auto" /></div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{['Web Apps', 'Cloud Migration', 'DevOps', 'Data Platforms'].map((item) => <div key={item} className="rounded-2xl bg-slate-50 p-4 text-center font-semibold text-slate-700">{item}</div>)}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
