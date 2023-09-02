import React from 'react';
import FlightsTable  from "./components/flight-table";


export const dynamic = "force-dynamic";


function FlightsPage() {
  
  return (
    <div>
      <FlightsTable />
    </div>
  );
}

export default FlightsPage;