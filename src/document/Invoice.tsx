import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Invoice = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <h1 className="text-center font-bold">KTOKY</h1>
      <p className="text-center">London, london - 1230,England</p>
      <p className="text-center">0123456789</p>
      <p className="text-center my-10">razibulislam665@gmail.com</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-black">ITEM</TableHead>
            <TableHead className="font-bold text-black">QTY</TableHead>
            <TableHead className="font-bold text-black">AMOUNT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Wild King Salmo</TableCell>
            <TableCell className="font-bold text-black">1</TableCell>
            <TableCell className="font-bold text-black">$3.47</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ling Cod Steak</TableCell>
            <TableCell className="font-bold text-black">1</TableCell>
            <TableCell className="font-bold text-black">$3.47</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-between items-start">
        <div>
          <p className="font-bold">
            Payment Method: <span className="font-bold">Cash</span>
          </p>
          <p>
            Shipping Method: <span className="font-bold">UPS</span>
          </p>
          <p>
            No of Items: <span className="font-bold">2</span>
          </p>
          <p>
            Bill No: <span className="font-bold">10002</span>
          </p>
        </div>
        <div>
          <p>
            Gross Total: <span className="font-bold">$67.45</span>
          </p>
          <p className="border-b-2 border-black pb-3">
            Shipping Cost: <span className="font-bold">$15.00</span>
          </p>
          <p className="flex items-center justify-between">
            Total: <span className="font-bold">$73.45</span>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <p>
          Vat Number: <span className="font-bold">145645</span>
        </p>
        <p>
          Date: <span className="font-bold">12/10/2003</span>
        </p>
      </div>
    </div>
  );
};

export default Invoice;
