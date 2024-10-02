/* eslint-disable @typescript-eslint/no-explicit-any */
import { X } from "lucide-react";
import { useState, KeyboardEvent } from "react";

const CategoryInput: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input) {
      e.preventDefault();
      setTags([...tags, input]);
      setInput("");
    }
  };

  const handleDelete = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 max-w-[700px]">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm mr-2 flex items-center"
        >
          {tag}
          <button
            onClick={() => handleDelete(index)}
            className="ml-2 text-red-500"
          >
            <X />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border-none outline-none w-full"
        placeholder="Add Category"
      />
    </div>
  );
};

export default CategoryInput;
