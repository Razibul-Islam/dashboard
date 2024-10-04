import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Customer() {
  return (
    <div className="w-full p-5 pt-0">
      <h4 className="text-lg font-semibold mb-4">Customer</h4>

      <Input
        type="text"
        placeholder="Search by Phone,Email,"
        className="h-12 text-lg mb-3"
      />
      <Table className="mt-5 bg-[#f6f6f6] p-5 rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead>EMAIL</TableHead>
            <TableHead>PHONE</TableHead>
            <TableHead>PAYMENT ID</TableHead>
            <TableHead>ORDER DATE</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <p className="text-sm">orgado@example.com</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">0727039184</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">pi_3OScgxJEv4PTYAsP0E9WrfV6</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">29 Dec 11.50 AM</p>
            </TableCell>
            <TableCell>
              <Button className="btnPrimary hover:bg-[#1c64f2]/90">
                See Status
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
