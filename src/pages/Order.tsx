import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Printer, ZoomIn } from "lucide-react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Pdf from "@/document/Pdf";
import { Link } from "react-router-dom";

const Order: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });
  const View = () => {
    console.log("View");
  };
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
            <TableHead>PRODUCT NAME</TableHead>
            <TableHead>PRODUCT CODE</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>OLD PRICE</TableHead>
            <TableHead>STOCK</TableHead>
            <TableHead>ACTION</TableHead>
            <TableHead>INVOICE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <p className="text-sm">Toronja Rosada Organica</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">#64c787693fe946438df057e5</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">$25</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">$28</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">76</p>
            </TableCell>
            <TableCell>
              <Select>
                <SelectTrigger className="h-12 text-lg">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Shipping">Shipping</SelectItem>
                  <SelectItem value="InProduction">In Production</SelectItem>
                  <SelectItem value="OrderPlaced">Order Placed</SelectItem>
                  <SelectItem value="Delevered">Delevered</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger onClick={() => handlePrint()} asChild>
                      <Printer className="scale-75 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Print Receipt</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <Link to="/dashboard/invoice">
                      <TooltipTrigger onClick={() => View()} asChild>
                        <ZoomIn className="scale-75 cursor-pointer" />
                      </TooltipTrigger>
                    </Link>
                    <TooltipContent>
                      <p>View Invoice</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="hidden">
        <Pdf ref={contentRef} />
      </div>
    </div>
  );
};
export default Order;
