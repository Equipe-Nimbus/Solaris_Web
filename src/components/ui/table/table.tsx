import { BaseEntity } from "@/types/types";
import { cnMerge } from "@/utils/cnMerge";
import React from "react";

const TableElement = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-x-auto">
        <table
            ref={ref}
            className={cnMerge('w-full min-w-[700px] text-sm', className)}
            {...props}
        />
    </div>
));
TableElement.displayName = 'Table';

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cnMerge('[&_tr]:border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableHeaderRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cnMerge(
            'border-b border-neutral-600',
            className,
        )}
        {...props}
    />
));
TableHeaderRow.displayName = 'TableHeaderRow';

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cnMerge(
            'h-10 px-2 text-left align-middle font-bold text-neutral-500',
            className,
        )}
        {...props}
    />
));
TableHead.displayName = 'TableHead';

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cnMerge('[&_tr:last-child]:border-0', className)}
        {...props}
    />
));
TableBody.displayName = 'TableBody';

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cnMerge(
            'transition-colors odd:bg-neutral-800 even:bg-neutral-700/15 hover:bg-neutral-700/50',
            className,
        )}
        {...props}
    />
));
TableRow.displayName = 'TableRow';

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cnMerge(
            'px-2 py-6 align-middle text-neutral-300 font-medium',
            className,
        )}
        {...props}
    />
));
TableCell.displayName = 'TableCell';

export {
    TableElement,
    TableHeader,
    TableHeaderRow,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
}

type TableColumns<T> = {
    title: string;
    field: keyof T;
    Cell?({ entry }: { entry: T }): React.ReactElement;
}

type TableProps<T> = {
    data: T[];
    columns: TableColumns<T>[];
}

export default function Table<T extends BaseEntity>({ data, columns }: TableProps<T>) {
    return (
        <>
            <TableElement>
                <TableHeader>
                    <TableHeaderRow>
                        {columns.map((column, index) => (
                            <TableHead key={column.title + index}>{column.title}</TableHead>
                        ))}
                    </TableHeaderRow>
                </TableHeader>
                <TableBody>
                    {data.map((entry, entryIndex) => (
                        <TableRow key={entry?.id || entry?.id_requisicao || entryIndex}>
                            {columns.map(({ Cell, field, title }, columnIndex) => (
                                <TableCell key={title + columnIndex}>
                                    {Cell ? <Cell entry={entry} /> : `${entry[field]}`}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </TableElement>
        </>
    )
}