import { MessageCircle } from "lucide-react"
export default function  OfferStats  ({ unreadOffers, totalOffers }) {
    <div className="space-y-1">
      <div className="flex items-center space-x-2">
        <MessageCircle className="h-4 w-4 text-gray-600" />
        <span className="text-sm text-gray-600">+{unreadOffers} Unread Offers</span>
      </div>
      <div className="flex items-center space-x-2">
        <MessageCircle className="h-4 w-4 text-gray-600" />
        <span className="text-sm text-gray-600">{totalOffers} Total Offers</span>
      </div>
    </div>
  };
  