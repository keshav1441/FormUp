import React from "react";
import FormBuilder from "@/components/FormBuilder"; // Adjust the import according to your structure
import { GetFormById } from "@/action/form";


async function BuilderPage({ params }: {
    params: {
      id: string;
    };
  }) {
    const { id } =await params;
    const form = await GetFormById(Number(id));
    if (!form) {
      throw new Error("Form not found");
    }
    return <FormBuilder form={form} />;
}

export default BuilderPage;
