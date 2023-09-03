"use client";

import { useQuery } from '@apollo/client';
import { GET_FLIGHTS } from '@/graphql/query/flights';
import { columns } from "./components/table/columns"
import { FlightType } from '@/types/apps/flight'; // Import the FlightType
import { DataTable } from "./components/table/data-table"
import { Progress } from "@/components/ui/progress"


export const dynamic = "force-dynamic";


export default function FlightPage() {
  const BASE_URL = "http://127.0.0.1:8000";
  const { loading, error, data } = useQuery(GET_FLIGHTS);
  // const { loading, error, data } = useSuspenseQuery(GET_FLIGHTS);

  // Check if data is loading
  if (loading) {
    console.log('Loading flight data...'); // Add this console.log statement
    return <Progress value={76} />
  }

  // Handle errors
  if (error) {
    console.error('Error loading flight data:', error.message);
    return <p>Error: {error.message}</p>;
  }


  // Data loaded successfully
  const flights: FlightType[] = data.flights;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={flights} />
    </div>
  )
}