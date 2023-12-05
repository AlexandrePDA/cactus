"use server";

import { put } from "@vercel/blob";

export const uploadFile = async (formData: FormData) => {
  const file = formData.get("file") as File;
  const fileName = file.name;

  const blob = await put(fileName, file, {
    access: "public",
  });

  return blob.url;
};
