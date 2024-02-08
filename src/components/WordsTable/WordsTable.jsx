import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getAllWords } from "../../redux/Words/wordsSelectors";
import { nanoid } from "nanoid";
import { HeaderCellStyled, HeaderTableStyled } from "./WordsTable.styled";

const columns = [
  {
    id: "_id",
    accessorKey: "en",
    header: "Word",
    cell: (props) => {
    return <p>{props.getValue()}</p>},
  },
  {
    id: "_id",
    accessorKey: "ua",
    header: "Translation",
    cell: (props) => <p>{props.getValue()?.name}</p>,
  },
  {
    id: "_id",
    accessorKey: "category",
    header: "Category",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    id: "_id",
    accessorKey: "progress",
    header: "Progress",
    cell: (props) => <p>{props.getValue()}</p>,
  },
//   {
//     id: "_id",
//     accessorKey: "",
//     header: "",
//     cell: (props) => <p>{props.getValue()}</p>,
//   },
];

const WordsTable = () => {
  const allWords = useSelector(getAllWords);
  const data = useMemo(()=> allWords, [allWords]);
  console.log(data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

//   console.log(table.getHeaderGroups());
//   console.log(table.getRowModel());
  return (
    <div>
      <div className="table" width={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <HeaderTableStyled key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <HeaderCellStyled key={nanoid()} width={header.getSize()}>{header.column.columnDef.header}</HeaderCellStyled>
            ))}
          </HeaderTableStyled>
        ))}
        {
            table.getCoreRowModel().rows.map(row => {
            return <div key={row.id}>
                {row.getVisibleCells().map(cell => {
                return <div key={nanoid()} width={cell.column.getSize()}>
                    {
                        flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                        )
                    }
                </div>
                })}
            </div>})
        }
      </div>
    </div>
  );
};

export default WordsTable;
