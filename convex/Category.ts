import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getCategores =  query({
  handler: async (ctx) => {
    console.log("Write and test your query function here!");
    return await ctx.db.query("categories").take(10);
  },
})


// save Category


export const createCategory = mutation({
  args: {
    name: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    const categoryId = await ctx.db.insert("categories", {
      name: args.name,
      description: args.description,
      createdAt: Date.now(), // optional, for tracking
    });

    return categoryId; // return the ID so frontend can use it
  },
});