// src/components/forms/FormSubCategoryPage.jsx

import { Link, useParams } from "react-router-dom";

const subCategories = {
  "government-exams": [
    { title: "SSC", slug: "ssc" },
    { title: "UPSC", slug: "upsc" },
    { title: "Railway", slug: "railway" },
  ],
  admissions: [
    { title: "Engineering", slug: "engineering" },
    { title: "Medical", slug: "medical" },
  ],
};

export default function FormSubCategoryPage() {
  const { mainCategory: categorySlug  } = useParams();
  const list = subCategories[categorySlug] || [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-white capitalize">
        {categorySlug?.replace("-", " ")}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {list.map((item) => (
          <Link
            key={item.slug}
            to={`/forms/${categorySlug}/${item.slug}`}
            className="rounded-xl p-5 bg-[#0B0E1A] border border-[#1E293B] hover:border-[#8FFFC7] transition"
          >
            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}