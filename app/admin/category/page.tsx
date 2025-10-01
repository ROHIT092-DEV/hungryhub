"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import ProgressLoader from "@/components/Loader";

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

  const Categories = useQuery(api.Category.getCategores);

  if (Categories === undefined) {
    return (
      <div className="text-gray-500">
        <ProgressLoader />
      </div>
    );
  }

  if (Categories.length === 0) {
    return <p className="text-gray-500">No Categories available.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold py-2 text-center">New category</h2>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-4 border rounded-md w-full max-w-md "
        >
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

      {/* category List */}

      {/* table */}

      <div className="overflow-x-auto pt-10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="p-2">
                <input
                  type="checkbox"
                  // checked={selected.length === categories.length}
                  // onChange={toggleSelectAll}
                />
              </th>
              <th className="p-2">Name</th>
              <th className="p-2">Description</th>
              <th className="p-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {Categories.map((c) => (
              <tr key={c._id} className="border-t hover:bg-gray-50 transition">
                <td className="p-2">
                  <input
                    type="checkbox"
                    // checked={selected.includes(c._id)}
                    // onChange={() => toggleSelect(c._id)}
                  />
                </td>
                <td className="p-2 font-medium">{c.name}</td>
                <td className="p-2 text-gray-600">{c.description}</td>
                <td className="p-2">
                  {new Date(c.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* table end */}
    </div>
  );
}
