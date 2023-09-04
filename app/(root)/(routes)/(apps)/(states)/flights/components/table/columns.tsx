"use client"

import { ColumnDef } from "@tanstack/react-table";
import React, { useState } from 'react';
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
import CustomModal from '../modal/modal-detail';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";




export const columns: ColumnDef<FlightType>[] = [
    {
        id: "airline",
        header: "Airline",
        cell: ({ row }) => {
            const airline = row.original.airline;
            const airlineLogo = airline.resolvedArlLogo;
            // const BASE_URL = "http://127.0.0.1:8000";
            const BASE_URL = "https://d734-109-248-76-78.ngrok-free.app";
            const [isOpen, setIsOpen] = useState(false);

            const handleOpen = () => setIsOpen(true);
            const handleClose = () => setIsOpen(false);

            return (
                <div className="flex items-center space-x-3">

                    <Avatar>
                        <AvatarImage src={`${BASE_URL}${airline.resolvedArlLogo}`} />
                        <AvatarFallback>{airline.codeIataAirline}</AvatarFallback>
                    </Avatar>

                    <div>
                        <span className="text-orange-600 text-sm font-bold">{row.original.airline.codeIataAirline}</span>
                        <Badge className="font-bold text-sm text-sky-600" variant="outline">
                            <span>{row.original.flightNumber}</span>
                            <CustomModal isOpen={isOpen} onClose={handleClose}>
                                 {/* Display the flight image */}
                                    <img src="data:image/jpeg;base64,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" alt="Flight" width="100%" />
                                    {/* Form Banner */}
                            SLOT MSG:<p className="text-xs fon-extralight text-orange-300">{row.original.slotMsg}</p>
                            <Separator className="bg-slate-800" />
                            </CustomModal>
                        </Badge>
                        <Separator className="bg-slate-300/20" />
                        <div className="font-light text-xs text-slate-400">
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
