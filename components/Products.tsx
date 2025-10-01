import { api } from '@/convex/_generated/api';
import {  useQuery } from 'convex/react'
import React from 'react'

export interface Product {
  _id: string; // Convex automatically generates an ID field
  _creationTime: number; // Convex adds this too
  categoryId: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  isAvailable: boolean;
  createdAt: number;
}


function Products() {
const products = useQuery(api.Products.getProducts);

if (products === undefined) {
    return <p className="text-gray-500">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-gray-500">No products available.</p>;
  }




  return (
    <div className='bg-gradient-to-br bg-red-100 via-green-100 to-pink-50 min-h-screen'>
      <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div
            key={product._id}
            className="p-4 bg-white rounded-2xl shadow-md border hover:shadow-lg transition"
          >
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
            )}
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-gray-900 font-bold mt-2">₹{product.price}</p>
            <span
              className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                product.isAvailable
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.isAvailable ? "Available" : "Out of Stock"}
            </span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Products