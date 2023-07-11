import { useEffect, useState } from 'react';

function CarriersPage() {
  const [carriers, setCarriers] = useState([]);

  useEffect(() => {
    const fetchCarriers = async () => {
      try {
        const res = await fetch('/api/carriers');
        const data = await res.json();
        setCarriers(data.content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarriers();
  }, []);

  return (
    <div>
      <h1>Carriers</h1>
      {carriers && carriers.length > 0 ? (
        carriers.map((carrier) => (
          <div key={carrier.carrierInfo.carrierId}>
            <h2>{carrier.carrierInfo.carrierName}</h2>
          </div>
        ))
      ) : (
        <p>No carriers found.</p>
      )}
    </div>
  );
}

export default CarriersPage;
