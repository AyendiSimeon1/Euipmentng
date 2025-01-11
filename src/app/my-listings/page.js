const ListingsPage = () => {
    const listings = [
      {
        id: 1,
        title: "Steel Pipelines Cables",
        location: "Port Harcourt, Rumukola",
        unreadOffers: 2,
        totalOffers: 24,
        cost: "20,000,000",
        isNegotiable: true,
        make: "Port Harcourt, Rumukola",
        brand: "Port Harcourt, Rumukola",
        color: "Port Harcourt, Rumukola",
        yearOfManufacture: "Port Harcourt, Rumukola"
      },
  
      {
        id: 2,
        title: "Steel Pipelines Cables",
        location: "Port Harcourt, Rumukola",
        unreadOffers: 2,
        totalOffers: 24,
        cost: "20,000,000",
        isNegotiable: true,
        make: "Port Harcourt, Rumukola",
        brand: "Port Harcourt, Rumukola",
        color: "Port Harcourt, Rumukola",
        yearOfManufacture: "Port Harcourt, Rumukola"
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-5xl mx-auto py-8">
          <h1 className="text-2xl font-semibold mb-6 px-4">My Listings</h1>
          
          <div className="space-y-4">
            {listings.map((equipment) => (
              <EquipmentCard key={equipment.id} equipment={equipment} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ListingsPage;