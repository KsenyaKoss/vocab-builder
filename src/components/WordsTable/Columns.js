export const columns = [
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