import { GetFormContentByUrl } from "@/action/form";
import { FormElementInstance } from "@/components/FormElements";
import FormSubmitComponent from "@/components/FormSubmitComponent";
import React from "react";

// Ensure you await the `params` object before using it
async function SubmitPage({ params }: { params: { formUrl: string } }) {
  // Await the params object to properly access the formUrl
  const { formUrl } = await params;  // await params

  const form = await GetFormContentByUrl(formUrl);

  if (!form) {
    throw new Error("Form not found");
  }

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return <FormSubmitComponent content={formContent} />;
}

export default SubmitPage;
