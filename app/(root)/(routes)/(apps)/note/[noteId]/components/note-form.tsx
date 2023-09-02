"use client"

import * as z from "zod";
import { Note, Category } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel, FormDescription } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator";
import { ImageUpload } from "@/components/image-upload";
import { Input } from "@/components/ui/input";
import { Wand2 } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";


const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    }),
    content: z.string().min(1, {
        message: "Content is required"
    }),
    src: z.string().min(1, {
        message: "Src is required"
    }),
    categoryId: z.string().min(1, {
        message: "Category is required"
    }),
})

interface NoteFormProps {
    categories: Category[];
    initialData: Note | null;
};

export const NoteForm = ({
    categories,
    initialData
}: NoteFormProps) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            title: "",
            content: "",
            src: "",
            categoryId: undefined,
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }
    return (
        <div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-10">
                    <div className="space-y-2 w-full col-span-2">
                        <div>
                            <h3 className="text-lg font-medium">
                                Note general
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                General information for Note

                            </p>
                            <Separator className="bd-primary/10" />

                        </div>
                        {/* <FormField
                            name="src"
                            render={({ field }) => (
                                <FormItem className="flex flex-col items-center justify-center space-y-4">
                                    <FormControl>
                                        <ImageUpload
                                            disabled={isLoading}
                                            onChange={field.onChange}
                                            value={field.value}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                name="title"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="col-span-2 md:col-span-1">
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input disabled={isLoading} placeholder="Enter title of note" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                       
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                    name="content"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Input disabled={isLoading} placeholder="Content of note..." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Add something to your note
                                        </FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                            />
                            <FormField
                                control={form.control}
                                name="categoryId"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select disabled={isLoading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger className="bg-background">
                                            <SelectValue defaultValue={field.value} placeholder="Select a category" />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                                        ))}
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Select a category for your AI
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <div>
                            <h3 className="text-lg font-medium">Configuration</h3>
                            <p className="text-sm text-muted-foreground">
                                Detailed instructions for AI Behaviour
                            </p>
                            </div>
                            <Separator className="bg-primary/10" />
                        </div>

                    </div>
                    <div className="w-full flex justify-center">
                        <Button size="lg" disabled={isLoading}>
                            {initialData ? "Edit your companion" : "Create your companion"}
                            <Wand2 className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </form>

            </Form>

        </div>
    )
}