import { Code2, Cloud, ShieldCheck, BarChart3 } from 'lucide-react';

const services = [
  { icon: Code2, title: 'Custom Software Development', text: 'Scalable web, mobile, and enterprise applications built around your business workflows.' },
  { icon: Cloud, title: 'Cloud & DevOps Consulting', text: 'Cloud migration, CI/CD automation, infrastructure modernization, and release reliability.' },
  { icon: ShieldCheck, title: 'Production Support & SRE', text: 'Monitoring, incident response, application stability, performance tuning, and operational excellence.' },
  { icon: BarChart3, title: 'Data & Analytics Solutions', text: 'Dashboards, reporting platforms, ETL pipelines, and business intelligence solutions.' },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-semibold text-red-600">What We Do</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">End-to-end software consultancy services</h2>
        <p className="mt-4 text-slate-600">From idea to deployment and long-term support, we help you deliver dependable digital products.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-700"><Icon className="h-7 w-7" /></div>
            <h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
