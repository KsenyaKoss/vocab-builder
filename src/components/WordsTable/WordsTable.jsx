import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getAllWords } from "../../redux/Words/wordsSelectors";
import { nanoid } from "nanoid";
import {
  CellStyled,
  HeaderCellStyled,
  HeaderTableStyled,
  RowsWrpStyled,
  TableWrp,
} from "./WordsTable.styled";
import { ReactComponent as Ukraine } from "../../assets/images/ukraine.svg";
import { ReactComponent as Ukingdom } from "../../assets/images/united kingdom.svg";
import useMediaRules from "../../hooks/useMediaRules";

const columns = [
  {
    id: "en",
    accessorKey: "en",
    header: "Word",
    cell: (props) => {
      return <p>{props.getValue()}</p>;
    },
  },
  {
    id: "ua",
    accessorKey: "ua",
    header: "Translation",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    id: "category",
    accessorKey: "category",
    header: "Category",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    id: "progress",
    accessorKey: "progress",
    header: "Progress",
    cell: (props) => <p>{props.getValue()}</p>,
  },
    {
      id: "...",
      accessorKey: "",
      header: "",
      cell: (props) => <p>{props.getValue()}</p>,
    },
];

const WordsTable = () => {
  const { isMobile } = useMediaRules();
  const allWords = useSelector(getAllWords);
  const data = useMemo(() => allWords, [allWords]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableWrp>
      <div className="table" width={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <HeaderTableStyled key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <HeaderCellStyled key={header.id} width={header.getSize()}>
                <>
                  {header.column.columnDef.header}
                  {(!isMobile && header.column.columnDef.header === "Word") ? <Ukingdom /> : ""}
                  {(!isMobile && header.column.columnDef.header === "Translation") ? <Ukraine /> : ""}
                </>
              </HeaderCellStyled>
            ))}
          </HeaderTableStyled>
        ))}
        {table.getCoreRowModel().rows.map((row) => {
          console.log(row);
          return (
            <RowsWrpStyled key={row.id}>
              {row.getVisibleCells().map((cell) => {
                
                return (
                  <CellStyled key={cell.id} width={cell.column.getSize()}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </CellStyled>
                );
              })}
            </RowsWrpStyled>
          );
        })}
      </div>
    </TableWrp>
  );
};

export default WordsTable;
