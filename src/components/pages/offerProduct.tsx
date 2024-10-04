import { Plus, SquarePen, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import img from "@/assets/product-1-1.jpg";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Textarea } from "../ui/textarea";

export default function OfferProduct() {
  return (
    <div className="w-full p-5 pt-0">
      <h4 className="text-lg font-semibold mb-4">Offer Product</h4>
      <div className="mb-4 flex items-center justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="btnPrimary hover:bg-[#1c64f2]/90" size={"lg"}>
              <Plus className="scale-75" /> Add Offer
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full lg:w-4/5 overflow-auto">
            <SheetHeader>
              <SheetTitle>Add Offer</SheetTitle>
              <SheetDescription>
                Add your product and necessary information from here
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 my-5">
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Product Title/Name</p>
                <Input
                  placeholder="Product Title/Name"
                  className="max-w-[700px]"
                />
              </div>
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Product Description</p>
                <Textarea
                  placeholder="Product Description"
                  className="max-w-[700px]"
                />
              </div>
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Product Images</p>
                <Input type="file" className="max-w-[700px]" />
              </div>

              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Product Barcode</p>
                <Input
                  placeholder="Product Barcode"
                  className="max-w-[700px]"
                />
              </div>

              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Product Price</p>
                <Input placeholder="Product Price" className="max-w-[700px]" />
              </div>
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Sale Price</p>
                <Input placeholder="Sale Price" className="max-w-[700px]" />
              </div>
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Product Quantity</p>
                <Input
                  placeholder="Product Quantity"
                  className="max-w-[700px]"
                />
              </div>
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Product Barcode</p>
                <Input placeholder="Add parcentage" className="max-w-[700px]" />
              </div>
            </div>
            <Button className="btnPrimary hover:bg-[#1c64f2]/90 w-full">
              Add Offer
            </Button>
          </SheetContent>
        </Sheet>
      </div>
      <Input
        type="text"
        placeholder="Search Product"
        className="h-12 text-lg mb-3"
      />
      <Table className="mt-5 bg-[#f6f6f6] p-5 rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>PRODUCT NAME</TableHead>
            <TableHead>CATEGORY</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>SALE PRICE</TableHead>
            <TableHead>STOCK</TableHead>
            <TableHead>OFFER STATUS</TableHead>
            <TableHead>PUBLISHED</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <img
                  src={img}
                  alt="Product Image"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="text-sm">Cerelac Cornflakes</p>
              </div>
            </TableCell>
            <TableCell>
              <p className="text-sm">Baby Food</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">₹235.67</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">₹235.67</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">597</p>
            </TableCell>
            <TableCell>
              <Badge className="bg-[#1E429F] rounded-full hover:bg-[#1E429F]">
                20%
              </Badge>
            </TableCell>
            <TableCell>
              <Switch />
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Sheet>
                  <SheetTrigger>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SquarePen className="scale-75 cursor-pointer" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </SheetTrigger>
                  <SheetContent className="w-full lg:w-4/5 overflow-auto">
                    <SheetHeader>
                      <SheetTitle>Add Product</SheetTitle>
                      <SheetDescription>
                        Add your product and necessary information from here
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-4 my-5">
                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Product Title/Name</p>
                        <Input
                          placeholder="Product Title/Name"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Product Description</p>
                        <Textarea
                          placeholder="Product Description"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Product Images</p>
                        <Input type="file" className="max-w-[700px]" />
                      </div>

                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Product Barcode</p>
                        <Input
                          placeholder="Product Barcode"
                          className="max-w-[700px]"
                        />
                      </div>

                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Product Price</p>
                        <Input
                          placeholder="Product Price"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Sale Price</p>
                        <Input
                          placeholder="Sale Price"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Product Quantity</p>
                        <Input
                          placeholder="Product Quantity"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Product Barcode</p>
                        <Input
                          placeholder="Add parcentage"
                          className="max-w-[700px]"
                        />
                      </div>
                    </div>
                    <Button className="btnPrimary hover:bg-[#1c64f2]/90 w-full">
                      Save
                    </Button>
                  </SheetContent>
                </Sheet>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Trash2 className="scale-75 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <img
                  src={img}
                  alt="Product Image"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="text-sm">Cerelac Cornflakes</p>
              </div>
            </TableCell>
            <TableCell>
              <p className="text-sm">Baby Food</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">₹235.67</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">₹235.67</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">597</p>
            </TableCell>
            <TableCell>
              <Badge className="bg-[#1E429F] rounded-full hover:bg-[#1E429F]">
                10%
              </Badge>
            </TableCell>
            <TableCell>
              <Switch />
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SquarePen className="scale-75 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Trash2 className="scale-75 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
