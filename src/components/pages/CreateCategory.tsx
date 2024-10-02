import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function CreateCategory() {
  return (
    <div className="w-full p-5">
      <h4 className="text-lg font-semibold mb-4">Create Category</h4>
      <form className="mt-5 bg-[#f6f6f6] p-5 rounded-md">
        <div className="grid grid-cols-3 gap-3 ">
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="CategoryName">Category Name</Label>
            <Input type="text" id="CategoryName" placeholder="Add Category" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="CategoryIcon">Category Icon</Label>
            <Input
              type="number"
              id="CategoryIcon"
              placeholder="Add Font Awesome Class"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="picture">
              Category Logo (use small logo .png file)
            </Label>
            <Input id="picture" type="file" />
          </div>
        </div>

        <Button className="mt-5 btnPrimary hover:bg-[#1c64f2]/90">Save</Button>
      </form>
    </div>
  );
}
