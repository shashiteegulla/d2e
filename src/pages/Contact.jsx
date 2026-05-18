import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001').replace(/\/$/, '');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch(`${apiBaseUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data = { success: false, message: 'Unexpected server response.' };
      try {
        data = await response.json();
      } catch (parseError) {
        console.error(parseError);
      }

      if (response.ok && (data.success === true || data.success === 'true')) {
        setMessage('Email sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', company: '', project: '' });
      } else {
        setError(data.message || 'Failed to send email');
      }
    } catch (err) {
      setError('Failed to send email. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="font-semibold text-red-300">Contact Us</p><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Let’s discuss your software needs</h2>
          <p className="mt-5 leading-8 text-slate-300">Share your project requirements, support needs, or modernization goals. D2Eminence can help you plan the right technology path.</p>
          <div className="mt-8 space-y-4 text-slate-300"><p className="flex items-center gap-3"><Mail className="h-5 w-5 text-red-300" /> admin@d2-eminence.com</p><p className="flex items-center gap-3"><Phone className="h-5 w-5 text-red-300" /> +1 (800) 376-9159</p><p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-red-300" /> United States</p></div>
        </div>
        <form className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              placeholder="Company Name"
              required
            />
            <textarea
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="min-h-32 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              placeholder="Tell us about your project"
              required
            />
            {message && (
              <div className="rounded-2xl bg-green-100 p-3 text-green-700">
                {message}
              </div>
            )}
            {error && (
              <div className="rounded-2xl bg-red-100 p-3 text-red-700">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
