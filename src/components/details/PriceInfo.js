import { ChartArea, PhoneCall } from "lucide-react";
import { ChartNetworkIcon } from "lucide-react";
export default function PriceInfo ({ price, negotiable }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">Cost</h3>
      <p className="text-2xl font-semibold mt-2">{price.toLocaleString()} NGN</p>
      <p className="text-sm text-gray-600">{negotiable ? 'Negotiable' : 'Fixed Price'}</p>
      <button className="mt-4 w-full bg-gray-500 text-white py-2 rounded-full flex items-center justify-center space-x-2">
        <span>Contact Owner</span>
        <PhoneCall size={20} />
        </button>

        <button className="mt-2 w-full border border-gray-300 py-2 rounded-full flex items-center justify-center space-x-2">
        <span>Start a Chat</span>
        <ChartArea size={20} />
        </button>
    </div>
  );
};


