"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useMediaQuery } from 'react-responsive';

const getRowColor = (row) => {
    const flightNumber = row.original.flightNumber;
    // Define your conditions and corresponding colors here
    if (flightNumber.startsWith("")) {
        return { backgroundColor: "bg-primary/10" }; // Green background for flight numbers starting with "AA"
    }
    // Add more conditions and colors as needed
    return {}; // Default to no additional styling
};
const getCellStyles = (cell) => {
    const cellContent = cell.value; // Assuming the cell content is in the 'value' property
    // Define your conditions and corresponding cell styles here
    if (cellContent === 'flightNumber') {
        return {
            backgroundColor: 'red',
            color: 'white',
        };
    }
    // Add more conditions and styles as needed
    return {};
};


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    // Columns to conditionally hide
    const columnsToHideOnSmallScreen = ['tripStatus', 'handStatus', 'stateStatus'];


    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder

                                            ? null
                                            //      : columnsToHideOnSmallScreen.includes(header.column.id) && isSmallScreen
                                            //   ? null // Hide the header on small screens
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                style={getRowColor(row)}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        style={getCellStyles(cell)}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
