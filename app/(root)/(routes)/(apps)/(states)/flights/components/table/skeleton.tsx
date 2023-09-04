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
import { Badge, badgeVariants } from "@/components/ui/badge"
import { Skeleton } from '@/components/ui/skeleton';



export const dynamic = "force-dynamic";


function Loading() {

    return (

        <table>
            <thead>
                <tr>
                    <th>
                        <Skeleton className='h-6 w-30 bg-gray-700' />
                    </th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 7 }, (_, i) => i + 1).map((id) => (
                    <tr key={id}>
                        <td>
                            <Skeleton className="h-10 w-full bg-gray-600" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Loading;