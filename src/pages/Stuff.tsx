import { Plus, SquarePen, Trash2 } from "lucide-react";
import img from "@/assets/product-1-1.jpg";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Stuff() {
  return (
    <div className="w-full p-5 pt-0">
      <h4 className="text-lg font-semibold mb-4">Products</h4>

      <div className="flex flex-wrap md:flex-nowrap items-center justify-between bg-[#f6f6f6] p-5 rounded-md mt-3 gap-5">
        <Input
          type="text"
          placeholder="Search Stuff"
          className="h-12 text-lg"
        />
        <Select>
          <SelectTrigger className="h-12 text-lg">
            <SelectValue placeholder="Select Stuff Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="btnPrimary hover:bg-[#1c64f2]/90 ml-auto w-full md:w-auto"
              size={"lg"}
            >
              <Plus className="scale-75" /> Add Stuff
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full lg:w-4/5 overflow-auto">
            <SheetHeader>
              <SheetTitle>Add Stuff</SheetTitle>
              <SheetDescription>
                Add your product and necessary information from here
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 my-5">
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Name</p>
                <Input placeholder="Name" className="max-w-[700px]" />
              </div>

              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Stuff Images</p>
                <Input type="file" className="max-w-[700px]" />
              </div>

              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Email</p>
                <Input placeholder="Eamil" className="max-w-[700px]" />
              </div>

              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Contact Number</p>
                <Input placeholder="Phone Number" className="max-w-[700px]" />
              </div>
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Joining Date</p>
                <Input
                  placeholder="Sale Price"
                  type="date"
                  className="max-w-[700px]"
                />
              </div>
              <div className="flex items-center justify-between w-full flex-wrap">
                <p>Stuff Role</p>
                <Select>
                  <SelectTrigger className="max-w-[700px]">
                    <SelectValue placeholder="Stuff Roll" />
                  </SelectTrigger>
                  <SelectContent className="max-w-[700px]">
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="CEO">CEO</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                    <SelectItem value="Acountant">Acountant</SelectItem>
                    <SelectItem value="Driver">Driver</SelectItem>
                    <SelectItem value="SecurityGuard">
                      Security Guard
                    </SelectItem>
                    <SelectItem value="DelivaryPerson">
                      Delivary Person
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="btnPrimary hover:bg-[#1c64f2]/90 w-full">
              Add Stuff
            </Button>
          </SheetContent>
        </Sheet>
      </div>
      <Table className="mt-5 bg-[#f6f6f6] p-5 rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead>NAME</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>CONTACT</TableHead>
            <TableHead>JOINING DATE</TableHead>
            <TableHead>ROLE</TableHead>
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
                <p className="text-sm">Razibul Islam</p>
              </div>
            </TableCell>
            <TableCell>
              <p className="text-sm">amrinder02.2000@gmail.com</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">8765432197</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">Oct 1, 2024</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">Admin</p>
            </TableCell>
            <TableCell>
              <Badge variant={"destructive"} className="rounded-full">
                Inactive
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
                      <SheetTitle>Add Stuff</SheetTitle>
                      <SheetDescription>
                        Add your product and necessary information from here
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-4 my-5">
                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Name</p>
                        <Input placeholder="Name" className="max-w-[700px]" />
                      </div>

                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Stuff Images</p>
                        <Input type="file" className="max-w-[700px]" />
                      </div>

                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Email</p>
                        <Input placeholder="Eamil" className="max-w-[700px]" />
                      </div>

                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Contact Number</p>
                        <Input
                          placeholder="Phone Number"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Joining Date</p>
                        <Input
                          placeholder="Sale Price"
                          type="date"
                          className="max-w-[700px]"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full flex-wrap">
                        <p>Stuff Role</p>
                        <Select>
                          <SelectTrigger className="max-w-[700px]">
                            <SelectValue placeholder="Stuff Roll" />
                          </SelectTrigger>
                          <SelectContent className="max-w-[700px]">
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="CEO">CEO</SelectItem>
                            <SelectItem value="Manager">Manager</SelectItem>
                            <SelectItem value="Acountant">Acountant</SelectItem>
                            <SelectItem value="Driver">Driver</SelectItem>
                            <SelectItem value="SecurityGuard">
                              Security Guard
                            </SelectItem>
                            <SelectItem value="DelivaryPerson">
                              Delivary Person
                            </SelectItem>
                          </SelectContent>
                        </Select>
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
        </TableBody>
      </Table>
    </div>
  );
}
