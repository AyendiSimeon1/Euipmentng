import Image from 'next/image';

export default function Offers() {
  const offers = [
    {
      id: 1,
      companyName: 'Jackson and Family International',
      location: 'Port Harcourt, Rumuola',
      contactInfo: '+908367438930',
      proposedPrice: '20,000,000',
      total: '80,000,000',
      date: '21 January - 2 February',
    },
    {
      id: 2,
      companyName: 'Jackson and Family International',
      location: 'Port Harcourt, Rumuola',
      contactInfo: '+908367438930',
      proposedPrice: '20,000,000',
      total: '80,000,000',
      date: '21 January - 2 February',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 md:px-12">
      <h1 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-6">
        Offers for Steel Pipelines Cables
      </h1>
      <div className="space-y-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white shadow-md rounded-xl p-4 md:p-6 space-y-4"
          >
            <div className="flex items-start md:items-center md:space-x-4 flex-col md:flex-row">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <Image
                  src="/images/company-logo.png"
                  alt="Company Logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">
                  {offer.companyName}
                </h2>
                <p className="text-sm text-gray-500">{offer.location}</p>
                <p className="text-sm text-gray-500">{offer.contactInfo}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Proposed Price</p>
                <p className="text-lg font-medium text-gray-800">
                  {offer.proposedPrice} <span className="text-sm">Per day</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-lg font-medium text-gray-800">
                  {offer.date}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-2xl font-bold text-gray-900">
                {offer.total}{' '}
                <span className="text-base font-medium text-gray-600">
                  Per day
                </span>
              </p>
            </div>
            <div className="flex justify-between mt-4 space-x-2">
              <button className="bg-gray-900 text-white rounded-lg py-2 px-4 text-sm hover:bg-gray-700">
                Accept Offer
              </button>
              <button className="bg-gray-300 text-gray-800 rounded-lg py-2 px-4 text-sm hover:bg-gray-400">
                Reject Offer
              </button>
              <button className="border border-gray-400 text-gray-800 rounded-lg py-2 px-4 text-sm hover:border-gray-500">
                Contact Lessee
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}