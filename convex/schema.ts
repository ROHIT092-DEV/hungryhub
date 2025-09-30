import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// @snippet start schema
export default defineSchema({
  Products: defineTable({
    // userid: v.id("users"),
    categoryId: v.id("categories"),
    name: v.string(),
    description: v.string(),
    price: v.number(),
    imageUrl: v.optional(v.string()),
    // imageUrl:v.string(),
    isAvailable: v.boolean(),
    createdAt: v.number(),
  }).index("by_category", ["categoryId"]),


// Category

categories: defineTable({
    name: v.string(),
    description: v.string(),
    // description: v.optional(v.string()),
    createdAt: v.number(),
  })


});


