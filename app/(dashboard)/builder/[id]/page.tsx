import React from "react";
import FormBuilder from "@/components/FormBuilder"; // Adjust the import according to your structure
import { GetFormById } from "@/action/form";

export default async function BuilderPage({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params;
  const form = await GetFormById(Number(id)); 
  if (!form){
      throw new Error("Form not found")
  }

return (
  <FormBuilder form={form}/>
);
}
