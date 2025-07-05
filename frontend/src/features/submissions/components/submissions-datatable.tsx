import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Submission } from "../types/submission";
import { format } from "date-fns";

interface Props {
  data: Submission[];
}

export function SubmissionsDatatable({ data }: Props) {
  return (
    <div className="w-full max-w-4xl overflow-x-auto rounded-lg border border-gray-200">
      <Table className="min-w-full bg-white">
        <TableHeader>
          <TableRow className="bg-primary hover:bg-primary/90 text-white">
            {["ID", "Nome", "E-mail", "Mensagem", "Data de Cadastro"].map(header => (
              <TableHead
                key={header}
                className="text-xs font-medium text-white uppercase tracking-wider"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map(entry => (
            <TableRow key={entry.id}>
              <TableCell>{entry.id}</TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.email}</TableCell>
              <TableCell className="max-w-xs truncate" title={entry.message}>
                {entry.message}
              </TableCell>
              <TableCell>
                {format(entry.createdAt.replace(" ", "T") + "Z", "dd/MM/yyyy 'às' HH:mm")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
