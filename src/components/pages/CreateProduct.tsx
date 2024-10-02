import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export default function CreateProduct() {
  return (
    <div className="w-full p-5">
      <h4 className="text-lg font-semibold mb-4">Products</h4>
      <form className="mt-5 bg-[#f6f6f6] p-5 rounded-md">
        <div className="grid grid-cols-3 gap-3">
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="name">Product Name</Label>
            <Input type="text" id="name" placeholder="Add Product Title" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="price">Price</Label>
            <Input type="number" id="price" placeholder="Add Product Price" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              id="quantity"
              placeholder="Add Product Quantity"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Food Category" />
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
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="brand">Brand</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Category First, From Category Field" />
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
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="picture">Product Main Image (276 * 276)</Label>
            <Input id="picture" type="file" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="picture">Upload Multiple Image (376 * 376)</Label>
            <Input id="picture" type="file" />
          </div>
        </div>
        <div className="mt-5">
          <Label htmlFor="discription">Description</Label>
          <Textarea
            id="discription"
            className="h-28 mt-2"
            placeholder="Add Product Details"
          />
        </div>
        <Button className="mt-5 btnPrimary hover:bg-[#1c64f2]/90">Save</Button>
      </form>
    </div>
  );
}
