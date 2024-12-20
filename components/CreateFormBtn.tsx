"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/hooks/use-toast"
import { formSchema, formSchemaType } from "@/schemas/form";
import { CreateForm } from "@/action/form";
import { useRouter } from 'next/navigation'


function CreateFormBtn() {
  const router = useRouter();
    const { toast } = useToast(); 
    const form = useForm<formSchemaType>({
      resolver: zodResolver(formSchema), 
      defaultValues: {
        name: "",
        description: "",
    }
    });
  
    async function onSubmit(values: formSchemaType) {
      try {
        const formId = await CreateForm(values);
        toast({
          title: "Success",
          description: "Form created successfully",
        });
        router.push(`/builder/${formId}`);
      } catch (error) {
        toast({
          title: "Error",
          description: "Something went wrong, please try again later",
          variant: "destructive",
        });
        console.error("Error creating form: ", error);
      }
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="group border border-primary/30 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4 bg-background">
          <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary"/>
          <p className="font-bold text-xl text-muted-foreground group-hover:text-primary">Create new form</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter form name"
                      {...field}
                      value={field.value || ""}
                      className={fieldState.invalid ? "border-red-500" : ""}
                      aria-invalid={fieldState.invalid ? "true" : "false"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      {...field}
                      value={field.value || ""}
                      className={fieldState.invalid ? "border-red-500" : ""}
                      aria-invalid={fieldState.invalid ? "true" : "false"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
            <Button
                disabled={form.formState.isSubmitting}
                className="w-full mt-4"
                type="submit"
              >
                {!form.formState.isSubmitting && <span>Save</span>}
                {form.formState.isSubmitting && (
                  <ImSpinner2 className="animate-spin" />
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtn;
