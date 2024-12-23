import { use } from "react";
import FormBuilder from "@/components/FormBuilder"; // Adjust the import according to your structure
import { GetFormById } from "@/action/form";

export default function BuilderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // Using the `use` hook to resolve the promise
  const form = use(GetFormById(Number(id))); // Assuming `GetFormById` is also a promise
  
  if (!form) {
    throw new Error("Form not found");
  }
  
  return <FormBuilder form={form} />;
}