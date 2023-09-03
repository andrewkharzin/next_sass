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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge , badgeVariants} from "@/components/ui/badge"



export const dynamic = "force-dynamic";


function FlightsTable() {
  const BASE_URL = "http://127.0.0.1:8000";
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
              <TableCell>
                <div className="flex items-center space-x-3">
                      
                          <Avatar>
                            <AvatarImage src={`${BASE_URL}${flight.airline.resolvedArlLogo}`} />
                            <AvatarFallback>{flight.airline.codeIataAirline}</AvatarFallback>
                          </Avatar>
                        
                        <div>
                          <Badge variant="outline">{flight.flightNumber}</Badge>

                          <div className="font-light text-xs">
                            {flight.airline.nameAirline}
                          </div>
                        </div>
                </div>
              </TableCell>
              <TableCell className="font-medium">{flight.flightNumber}</TableCell>
              <TableCell className="font-medium">{flight.aircraftType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}

export default FlightsTable;