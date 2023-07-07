
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Map from "../components/Googlemaps";
import Navbar from '../components/Navbar';

const Dashboard = () => {
  // Sample data for calculations

  const [token, setToken] = useState(null);

  const units = [
    { id: 1, milesDriven: 100, cost: 50, impression: 500 },
    { id: 2, milesDriven: 150, cost: 75, impression: 700 },
    { id: 1, milesDriven: 170, cost: 50, impression: 550 },
    { id: 2, milesDriven: 154, cost: 75, impression: 720 },
    { id: 2, milesDriven: 140, cost: 75, impression: 780 },
    
    // Add more units as needed
  ];
  const campaign = {
    aadt: 1000,
    secondsSpent: 600,
    ratePerMile: 0.5,
    cost: 1000,
  };

  // Calculate aggregate metrics
  const totalImpressions = units.reduce((sum, unit) => sum + unit.impression, 0);
  const aggregateCPM = ((campaign.cost / totalImpressions) * 1000).toFixed(2);
  // console.log(aggregateCPM);
  const milesDriven = units.reduce((sum, unit) => sum + unit.milesDriven, 0);
  const costOfCampaign = milesDriven * campaign.ratePerMile;
  const ratePerMile = campaign.ratePerMile;

  
const authenticateOptions = {
  mode: 'no-cors',
  method: 'POST',
  url: 'https://api.truckercloud.com/api/v4/authenticate',
  headers: { accept: '*/*', 'content-type': 'application/json' },
  data: {password: 'changeme', userName: 'truckable'},
};

const carriersOptions = {
  mode: 'no-cors',
  method: 'GET',
  url: 'https://api.truckercloud.com/api/v4/carriers',
  headers: { accept: 'application/json', Authorization: '' }, // Update the authToken here
};

const fetchData = async () => {
  try {
    // Authenticate request
    const authResponse = await axios.request(authenticateOptions);
    const authToken = authResponse.data.token;
    console.log('Authentication Response:', authResponse.data);

    // Update carriersOptions with authToken
    carriersOptions.headers.Authorization = authToken;

    // Carriers request
    const carriersResponse = await axios.request(carriersOptions);
    console.log('Carriers Response:', carriersResponse.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();



  return (
    <div className='p-7 bg-[#F7F7F7] h-fit'>
        <Navbar/>
        <div className="flex p-6 bg-[#FFFFFF] rounded">
        <div className="w-1/3 bg-[#FFFFFF]">
        <div className="mb-4">
          {/* Campaign Metrics */}
          <h2 className="text-lg font-bold mb-6">Campaign Metrics</h2>
          <table className="w-[95%] mb-4 text-[14px]">
            <tbody>
              <tr className=''>
                <td className="py-2 border-b text-[#797979] border-[#E3E3E3]">Aggregate CPM </td>
                <td className="py-2 border-b text-[#000000] font-semibold absolute left-100">{aggregateCPM}</td>
              </tr>
              <tr className=''>
                <td className="py-2 border-b text-[#797979]">Total Impressions</td>
                <td className="py-2 border-b text-[#000000] font-semibold absolute left-100">{totalImpressions}</td>
              </tr>
              <tr className=''>
                <td className="py-2 border-b text-[#797979]">Rate per Mile</td>
                <td className="py-2 text-[#000000] font-semibold border-b absolute left-100">{ratePerMile}</td>
              </tr>
              <tr className=''>
                <td className="py-2 border-b text-[#797979]">Miles Driven</td>
                <td className="py-2 border-b text-[#000000] font-semibold absolute left-100">{milesDriven}</td>
              </tr>
              <tr className=''>
                <td className="py-2 text-[#797979]">Cost of the Campaign</td>
                <td className="py-2 text-[#000000] font-semibold">{costOfCampaign}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Units */}
        <div>
          <h2 className="text-lg font-bold mb-6">Units</h2>
          <table className="w-[90%] mb-4">
            <thead>
              <tr className='bg-[#F0F0F0] text-[14px] text-[#797979]'>
                <th className="py-2 ">Unit</th>
                <th className="py-2 ">Miles Driven</th>
                <th className="py-2 ">Cost</th>
                <th className="py-2 ">Impression</th>
                <th className="py-2 ">CPM</th>
              </tr>
            </thead>
            <tbody>
              {units.map((unit) => (
                <tr key={unit.id} className='text-center'>
                  <td className="py-2 border-b">{unit.id}</td>
                  <td className="py-2 border-b">{unit.milesDriven}</td>
                  <td className="py-2 border-b">{unit.cost}</td>
                  <td className="py-2 border-b">{unit.impression}</td>
                  <td className="py-2 border-b">{(unit.cost / unit.impression * 1000).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <button onClick={getCarriers} >
            Get Carriers
          </button>

          <button onClick={getVehicles} >
            Get Vehicles
          </button>

          <button onClick={getDrivers} >
            Get Drivers
          </button> */}
        </div>
      </div>

      {/* Map area */}
      <div className="w-2/3 bg-[#FFFFFF]">
        {/* Map component */}
        <Map/>
      </div>
    </div>
    </div>
   
  );
};

export default Dashboard;
