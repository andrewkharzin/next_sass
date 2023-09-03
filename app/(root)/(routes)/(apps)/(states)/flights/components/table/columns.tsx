"use client"

import { ColumnDef } from "@tanstack/react-table";
import { FlightType } from '@/types/apps/flight'; // Import the FlightType
import { MoreHorizontal } from "lucide-react"
import { Separator } from "@/components/ui/separator"


import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge, badgeVariants } from "@/components/ui/badge"



export const columns: ColumnDef<FlightType>[] = [
    {
        id: "airline",
        header: "Airline",
        cell: ({ row }) => {
            const airline = row.original.airline;
            const airlineLogo = airline.resolvedArlLogo;
            const BASE_URL = "http://127.0.0.1:8000";

            return (
                <div className="flex items-center space-x-3">

                    <Avatar>
                        <AvatarImage src={`${BASE_URL}${airline.resolvedArlLogo}`} />
                        <AvatarFallback>{airline.codeIataAirline}</AvatarFallback>
                    </Avatar>

                    <div>
                        <span className="text-orange-600 font-bold">{row.original.airline.codeIataAirline}</span>
                        <Badge variant="outline">{row.original.flightNumber}</Badge>
                        <Separator className="bg-slate-300/20" />
                        <div className="font-light text-xs">
                            {airline.nameAirline}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "flightDate",
        header: "Date/Time",
        cell: ({ row }) => {
            const date = row.original.flightDate;
            const time = row.original.flightTime;
            function formatDate(inputDate) {
                const dateParts = inputDate.split('-'); // Split the input date into parts
                if (dateParts.length !== 3) {
                    return 'Invalid Date'; // Return an error message for invalid input
                }

                const day = dateParts[2];
                const month = dateParts[1];

                // Define an array to map month numbers to their three-letter abbreviations
                const monthAbbreviations = [
                    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
                ];

                // Get the three-letter abbreviation for the month
                const monthAbbreviation = monthAbbreviations[parseInt(month, 10) - 1];

                return `${day}/${monthAbbreviation}`;
            }
            function formatTime(inputTime) {
                const timeParts = inputTime.split(':'); // Split the input time into parts
                if (timeParts.length !== 3) {
                    return 'Invalid Time'; // Return an error message for invalid input
                }

                const hour = timeParts[0];
                const minute = timeParts[1];

                return `${hour}:${minute}`;
            }

            return (
                <>
                    <div className="flex items-center">
                        <span className="text-xs text-gray-500">
                            <p className="py-1 border-primary font-normal text-sm">
                                Date:
                                <span className="badge fontt-bold text-green-500 rounded-l-sm badge-sm">
                                    {" "}
                                    {formatDate(row.original.flightDate)}
                                </span>
                            </p>
                        </span>
                    </div>
                    <Separator className="bg-slate-300/20" />
                    <span className="text-xs text-gray-500">
                        <p className="py-1 border-primary font-normal text-sm">
                            Time:
                            <span className="badge fontt-bold text-green-500 rounded-l-sm badge-sm">
                                {" "}
                                {formatTime(row.original.flightTime)}
                            </span>
                        </p>
                    </span>
                </>
            );
        },
    },
    {
        accessorKey: "aircraftType",
        header: "Aircraft",
        cell: ({ row }) => {
            const aircraft_type = row.original.aircraftType;
            const registration = row.original.registrationNumber;


            return (
                <>
                    <div className="flex items-center">
                        <span className="text-xs text-gray-500">
                            <p className="py-1 border-primary font-normal text-sm">
                                <span className="badge text-primary rounded-l-sm badge-sm">
                                    {" "}
                                    {aircraft_type}
                                </span>
                            </p>
                        </span>
                    </div>
                    <Separator className="bg-slate-300/20" />
                    <span className="text-xs text-gray-500">
                        <p className="py-1 border-primary font-normal text-sm">
                            REG:
                            <span className="font-bold text-red-600 rounded-l-sm badge-sm">
                                {" "}
                                {registration}
                            </span>
                        </p>
                    </span>
                </>
            );
        },

    },


    {
        accessorKey: "stateStatus",
        header: "States",
        cell: ({ row }) => {
            const handling = row.original.handStatus;
            const state = row.original.stateStatus;
            const tripfile = row.original.tripStatus;


            return (
                <>
                    <div className="flex items-center">
                        <span className="text-xs text-gray-500">
                            <p className="py-1 border-primary font-normal text-sm">
                                Handling:
                                <span className="badge font-bold text-green-500 rounded-l-sm badge-sm">
                                    {" "}
                                    {handling}
                                </span>
                            </p>
                        </span>
                    </div>
                    <Separator className="bg-slate-300/20" />
                    <span className="text-xs text-gray-500">
                        <p className="py-1 border-primary font-normal text-sm">
                            State:
                            <span className="badge font-bold text-green-500 rounded-l-sm badge-sm">
                                {" "}
                                {state}
                            </span>
                        </p>
                    </span>
                </>
            );
        },

    },

    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Flight</DropdownMenuItem>
                        <DropdownMenuItem>View TripFile</DropdownMenuItem>
                        <DropdownMenuItem>View Project</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
