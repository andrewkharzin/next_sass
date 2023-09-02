"use client";

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FLIGHTS } from '@/graphql/query/flights';
import { FlightType } from '@/types/apps/flight'; // Import the FlightType
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const dynamic = "force-dynamic";


function FlightsTable() {
  const { loading, error, data } = useQuery(GET_FLIGHTS);
  // const { loading, error, data } = useSuspenseQuery(GET_FLIGHTS);

  // Check if data is loading
  if (loading) {
    console.log('Loading flight data...'); // Add this console.log statement
    return <p>Loading...</p>;
  }

  // Handle errors
  if (error) {
    console.error('Error loading flight data:', error.message);
    return <p>Error: {error.message}</p>;
  }

  // Data loaded successfully
  const flights: FlightType[] = data.flights;

  return (
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-sm text-left'>Airline</TableHead>
            <TableHead className='text-sm text-left'>Flight number</TableHead>
            <TableHead className='text-sm text-left'>AC Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {flights.map((flight) => (
            <TableRow key={flight.id}>
              <TableCell className="font-bold text-orange-600 uppercase">{flight.airline.codeIataAirline}</TableCell>
              <TableCell className="font-medium">{flight.flightNumber}</TableCell>
              <TableCell className="font-medium">{flight.aircraftType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}

export default FlightsTable;