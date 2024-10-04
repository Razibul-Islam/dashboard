import { Plus, SquarePen, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
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
import CategoryInput from "../ui/CategoryInput";

export default function AllProduct() {
  return (
    <div className="w-full p-5 pt-0">
      <h4 className="text-lg font-semibold mb-4">Products</h4>
      <div className="block lg:flex items-center justify-between bg-[#f6f6f6] p-5 rounded-md">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="btnPrimary hover:bg-[#1c64f2]/90 ml-auto w-full md:w-auto"
              size={"lg"}
            >
              <Plus className="scale-75" /> Add Product
            </Button>
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
                <p>Product SKU</p>
                <Input placeholder="Product SKU" className="max-w-[700px]" />
              </div>
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Product Barcode</p>
                <Input
                  placeholder="Product Barcode"
                  className="max-w-[700px]"
                />
              </div>
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Category</p>
                <CategoryInput />
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
                <p>Product Slug</p>
                <Input placeholder="Product Slug" className="max-w-[700px]" />
              </div>
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Product Slug</p>
                <CategoryInput />
              </div>
            </div>
            <Button className="btnPrimary hover:bg-[#1c64f2]/90 w-full flex-wrap">
              Add product
            </Button>
          </SheetContent>
        </Sheet>
      </div>
      <div className="lg:flex space-y-3 lg:space-y-0 items-center justify-between bg-[#f6f6f6] p-5 rounded-md mt-3 gap-5">
        <Input
          type="text"
          placeholder="Search Product"
          className="h-12 text-lg"
        />
        <Select>
          <SelectTrigger className="h-12 text-lg">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="h-12 text-lg">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table className="mt-5 bg-[#f6f6f6] p-5 rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead>PRODUCT NAME</TableHead>
            <TableHead>CATEGORY</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>SALE PRICE</TableHead>
            <TableHead>STOCK</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>PUBLISHED</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
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
                Selling
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
                  <SheetContent className="w-4/5">
                    <SheetHeader>
                      <SheetTitle>Edit Product</SheetTitle>
                      <SheetDescription>
                        Add your product and necessary information from here
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-4 my-5">
                      <div className="flex items-center justify-between w-full">
                        <p>Product Title/Name</p>
                        <Input
                          placeholder="Product Title/Name"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Product Description</p>
                        <Textarea
                          placeholder="Product Description"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Product Images</p>
                        <Input type="file" className="max-w-[700px]" />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Product SKU</p>
                        <Input
                          placeholder="Product SKU"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Product Barcode</p>
                        <Input
                          placeholder="Product Barcode"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Category</p>
                        <CategoryInput />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Product Price</p>
                        <Input
                          placeholder="Product Price"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Sale Price</p>
                        <Input
                          placeholder="Sale Price"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Product Quantity</p>
                        <Input
                          placeholder="Product Quantity"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Product Slug</p>
                        <Input
                          placeholder="Product Slug"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Product Slug</p>
                        <CategoryInput />
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
                Selling
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
