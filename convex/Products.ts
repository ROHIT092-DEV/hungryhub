import { query } from "./_generated/server";
import { v } from "convex/values";

export const getProducts =  query({
  handler: async (ctx) => {
    console.log("Write and test your query function here!");
    return await ctx.db.query("Products").take(10);
  },
})

