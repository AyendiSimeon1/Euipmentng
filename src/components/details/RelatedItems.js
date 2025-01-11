
export default function RelatedItem  ({ items })  {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold">Related Items</h3>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow">
            <img src={item.image} alt={item.title} className="w-full rounded-lg" />
            <h4 className="mt-2 font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.price.toLocaleString()} NGN</p>
          </div>
        ))}
      </div>
    </div>
  );
};
