import React, { useState } from "react";
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

interface ProductInput {
  weight: number | string;
  price: number | string;
}

const CreateProduct: React.FC = () => {
  const [productInputs, setProductInputs] = useState<ProductInput[]>([
    { weight: "", price: "" },
  ]);

  const handleAddInputs = () => {
    setProductInputs((prevInputs) => [
      ...prevInputs,
      { weight: "", price: "" },
    ]);
  };

  const handleWeightChange = (index: number, value: string) => {
    const newInputs = [...productInputs];
    newInputs[index].weight = value;
    setProductInputs(newInputs);
  };

  const handlePriceChange = (index: number, value: string) => {
    const newInputs = [...productInputs];
    newInputs[index].price = value;
    setProductInputs(newInputs);
  };
  return (
    <div className="w-full p-5 pt-0">
      <h4 className="text-lg font-semibold mb-4">Products</h4>
      <form className="mt-5 bg-[#f6f6f6] p-5 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-start gap-3">
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="name">Product Name</Label>
            <Input type="text" id="name" placeholder="Add Product Title" />
          </div>
          <div className="flex flex-col items-center">
            {productInputs.map((input, index) => (
              <div key={index} className="flex items-center gap-4 mb-5">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor={`productWeight-${index}`}>
                    Product Weight
                  </Label>
                  <Input
                    type="number"
                    id={`productWeight-${index}`}
                    value={input.weight}
                    onChange={(e) => handleWeightChange(index, e.target.value)}
                    placeholder="Add Product Weight"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor={`price-${index}`}>Price</Label>
                  <Input
                    type="number"
                    id={`price-${index}`}
                    value={input.price}
                    onChange={(e) => handlePriceChange(index, e.target.value)}
                    placeholder="Add Product Price"
                  />
                </div>
              </div>
            ))}
            <Button
              type="button"
              className="btnPrimary hover:bg-[#1c64f2]/90"
              onClick={handleAddInputs}
            >
              Add Price
            </Button>
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
};
export default CreateProduct;
