export default function RelatedItem({ items }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg sm:text-xl font-semibold">Related Items</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-4">
        {items.map((item, index) => (
          <div key={index} className="p-3 sm:p-4 bg-white rounded-lg shadow">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 sm:h-40 object-cover rounded-lg"
            />
            <h4 className="mt-2 font-semibold text-sm sm:text-base">{item.title}</h4>
            <p className="text-xs sm:text-sm text-gray-600">
              {item.price.toLocaleString()} NGN
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}