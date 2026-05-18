import { CheckCircle2 } from 'lucide-react';

const strengths = ['Experienced software consultants', 'Agile delivery model', 'Secure and scalable architecture', 'Transparent communication', 'Post-launch support', 'Cost-effective delivery'];

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="font-semibold text-blue-700">Why D2Eminence</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A practical partner for software delivery and support</h2>
          <p className="mt-5 leading-8 text-slate-600">We combine consulting, engineering, cloud, and production support experience to help businesses launch faster, reduce risk, and maintain stable platforms after go-live.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"><CheckCircle2 className="h-5 w-5 flex-none text-red-600" /><span className="font-medium text-slate-700">{item}</span></div>)}
        </div>
      </div>
    </section>
  );
}
