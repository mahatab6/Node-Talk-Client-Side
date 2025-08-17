const CategoriesSection = ({ setSearch }) => {
  const categories = [
    "Programming",
    "Self Improvement",
    "Data Science",
    "Writing",
    "Relationships",
    "Technology",
    "Politics",
    "ReduxToolkit",
    "FullStack",
  ];

  return (
    <div className="">
    <h2 className="text-2xl font-bold mb-6">Recommended topics</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSearch(cat)}
            className="bg-white text-black px-4 py-2 rounded-lg hover:cursor-pointer shadow hover:bg-primary hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
