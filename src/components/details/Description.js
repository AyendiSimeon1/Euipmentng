
export default function Description ({ equipment }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Description</h3>
      <p className="text-gray-600">{equipment.description}</p>
    </div>
  );
};

