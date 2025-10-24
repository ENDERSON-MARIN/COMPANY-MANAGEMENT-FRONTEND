"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Company } from "@/_types/company";

import CompaniesTableActions from "./table-actions";

export const companiesTableColumns: ColumnDef<Company>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Nome",
  },
  {
    id: "cnpj",
    accessorKey: "cnpj",
    header: "CNPJ",
  },
  {
    id: "email",
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "phone",
    accessorKey: "phone",
    header: "Telefone",
  },
  {
    id: "address",
    accessorKey: "address",
    header: "Endereço",
  },
  {
    id: "actions",
    cell: (params) => {
      const company = params.row.original;
      return <CompaniesTableActions company={company} />;
    },
  },
];
