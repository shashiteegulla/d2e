const steps = [
  ['01', 'Discover', 'Understand your goals, systems, users, and constraints.'],
  ['02', 'Design', 'Create architecture, roadmap, UX, and implementation plan.'],
  ['03', 'Build', 'Deliver iteratively with quality checks and demos.'],
  ['04', 'Support', 'Monitor, improve, and keep your platform reliable.'],
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl"><p className="font-semibold text-red-600">How We Work</p><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Simple, transparent delivery process</h2></div>
      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {steps.map(([step, title, text]) => <div key={step} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><div className="text-4xl font-black text-blue-100">{step}</div><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}
      </div>
    </section>
  );
}
