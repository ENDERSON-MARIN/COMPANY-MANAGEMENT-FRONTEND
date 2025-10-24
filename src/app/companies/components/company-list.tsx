"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCompanies } from "@/hooks/queries/use-get-companies";

export function CompanyList() {
  const { data: companies, isLoading, isError } = useGetCompanies();

  if (isLoading) {
    return <div>Carregando empresas...</div>;
  }

  if (isError) {
    return <div>Ocorreu um erro ao buscar as empresas.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>CNPJ</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies?.map((company) => (
          <TableRow key={company.id}>
            <TableCell>{company.name}</TableCell>
            <TableCell>{company.cnpj}</TableCell>
            <TableCell>{company.email}</TableCell>
            <TableCell>{company?.phone}</TableCell>
            <TableCell>{company?.address}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
