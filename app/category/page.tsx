"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function CreateCategoryForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Hook for mutation
  const createCategory = useMutation(api.Category.createCategory);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const id = await createCategory({ name, description });
      console.log("New category created with ID:", id);
      alert("Category created successfully!");
      setName("");
      setDescription("");
    } catch (err) {
      console.error("Error creating category:", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md w-full max-w-md">
      <h2 className="text-xl font-semibold">Create Category</h2>

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full border rounded-md p-2"
          placeholder="Enter category name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 w-full border rounded-md p-2"
          placeholder="Enter category description"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Create
      </button>
    </form>
    </div>
  );
}
