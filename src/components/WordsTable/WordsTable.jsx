import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getAllWords } from "../../redux/Words/wordsSelectors";
import {
  CellStyled,
  HeaderTableStyled,
  RowsWrpStyled,
  TableStyled,
  TableWrp,
} from "./WordsTable.styled";
import { ReactComponent as Ukraine } from "../../assets/images/ukraine.svg";
import { ReactComponent as Ukingdom } from "../../assets/images/united kingdom.svg";
import useMediaRules from "../../hooks/useMediaRules";

 


const WordsTable = () => {
  const { isMobile } = useMediaRules();
  const allWords = useSelector(getAllWords);
  const data = useMemo(() => allWords, [allWords]);

  const columns = useMemo(() => {
    const baseColumns = [
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

    
    if (!isMobile) {
      baseColumns.splice(2, 0, {
        id: "category",
        accessorKey: "category",
        header: "Category",
        cell: (props) => <p>{props.getValue()}</p>,
      });
    }

    return baseColumns;
  }, [isMobile]);


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableWrp>
      <TableStyled className="table" width={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <HeaderTableStyled key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <CellStyled key={header.id} width={header.getSize()}>
                <>
                  {header.column.columnDef.header}
                  {(!isMobile && header.column.columnDef.header === "Word") ? <Ukingdom /> : ""}
                  {(!isMobile && header.column.columnDef.header === "Translation") ? <Ukraine /> : ""}
                </>
              </CellStyled>
            ))}
          </HeaderTableStyled>
        ))}
        {table.getCoreRowModel().rows.map((row) => {
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
      </TableStyled>
    </TableWrp>
  );
};

export default WordsTable;
