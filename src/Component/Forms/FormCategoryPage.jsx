// src/components/forms/FormCategoryPage.jsx

import { Link } from "react-router-dom";

const categories = [
  {
    title: "Government Exams",
    slug: "government-exams",
    description: "UPSC, SSC, Banking, Railway and more",
  },
  {
    title: "Admissions",
    slug: "admissions",
    description: "College & Entrance application forms",
  },
  {
    title: "Certificates",
    slug: "certificates",
    description: "Income, Caste, Domicile certificates",
  },
];

export default function FormCategoryPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#5D9CFF] to-[#8FFFC7] bg-clip-text text-transparent">
        Browse Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/forms/${cat.slug}`}
            className="rounded-2xl p-6 bg-gradient-to-br from-[#11162A] to-[#0B0E1A] border border-[#1E293B] hover:border-[#5D9CFF] transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {cat.title}
            </h3>
            <p className="text-sm text-gray-400">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}