"use server";

import prisma from "@/lib/prisma";
import { productSchema } from "@/lib/zodSchemas";
import { currentUser } from "@clerk/nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export async function createProduct(prevState: unknown, formData: FormData) {
  const user = await currentUser();
  console.log("user", user);

  if (!user) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, { schema: productSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim())
  );

  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenUrls,
      category: submission.value.category,
      isFeatured: submission.value.isFeatured === true ? true : false,
    },
  });

  redirect("/admin/products");
}
