import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CategoryTagInput = ({ onChange }) => {
  const [categories, setCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    // Add category on Enter or comma
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addCategory();
    }
  };

  const addCategory = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !categories.includes(trimmedValue)) {
      setCategories([...categories, trimmedValue]);
      setInputValue("");
      onChange([...categories, trimmedValue]);
    }
  };

  const removeCategory = (categoryToRemove) => {
    const updatedCategories = categories.filter(
      (category) => category !== categoryToRemove
    );
    setCategories(updatedCategories);
    onChange(updatedCategories);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">Categories:</label>

      <div className="flex mb-2">
        <input
          type="text"
          className="flex-grow px-3 py-2 border rounded-l focus:outline-none focus:ring-blue-500"
          placeholder="Type and press Enter to add categories..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={addCategory}
          className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-1 text-sm bg-gray-100 rounded-full"
          >
            <span className="mr-1 font-medium text-blue-600">#{category}</span>
            <button
              onClick={() => removeCategory(category)}
              className="ml-1 text-gray-500 hover:text-red-600"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTagInput;
