"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, XIcon } from "lucide-react";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useState } from "react";

import Image from "next/image";
import { createProduct } from "@/actions";
import { productSchema } from "@/lib/zodSchemas";
import Buttons from "@/components/Buttons";
import { categories } from "@/types";
import { UploadDropzone } from "@/lib/uplaodthing";
import { useRouter } from "next/navigation";

const ProductCreatePage = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const [lastResult, action] = useFormState(createProduct, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Button size="icon" onClick={() => router.back()}>
          <ChevronLeft size={20} />
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New Product</h1>
      </div>
      <form action={action} id={form.id} onSubmit={form.onSubmit}>
        <Card className="mt-5">
          <CardHeader className="bg-neutral-200 text-gray-900">
            <CardDescription className="text-black">
              In this form you can create your product
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <Label>Name</Label>
                <Input
                  type="text"
                  key={fields.name.key}
                  name={fields.name.name}
                  defaultValue={fields.name.initialValue}
                  className="w-full"
                  placeholder="Product Name"
                />
                <p className="text-red-500">{fields.name.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Description</Label>
                <Textarea
                  key={fields.description.key}
                  name={fields.description.name}
                  defaultValue={fields.description.initialValue}
                  placeholder="Write your description right here..."
                />
                <p className="text-red-500">{fields.description.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Price</Label>
                <Input
                  key={fields.price.key}
                  name={fields.price.name}
                  defaultValue={fields.price.initialValue}
                  type="number"
                  placeholder="$55"
                />
                <p className="text-red-500">{fields.price.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Featured Product</Label>
                <Switch
                  key={fields.isFeatured.key}
                  name={fields.isFeatured.name}
                  defaultValue={fields.isFeatured.initialValue}
                />
                <p className="text-red-500">{fields.isFeatured.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Status</Label>
                <Select
                  key={fields.status.key}
                  name={fields.status.name}
                  defaultValue={fields.status.initialValue}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-red-500">{fields.status.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Category</Label>
                <Select
                  key={fields.category.key}
                  name={fields.category.name}
                  defaultValue={fields.category.initialValue}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-red-500">{fields.category.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Images</Label>
                <input
                  type="hidden"
                  value={images}
                  key={fields.images.key}
                  name={fields.images.name}
                  defaultValue={fields.images.initialValue as any}
                />
                {images.length > 0 ? (
                  <div className="flex gap-5">
                    {images.map((image, index) => (
                      <div key={index} className="relative w-[100px] h-[100px]">
                        <Image
                          height={100}
                          width={100}
                          src={image}
                          alt="Product Image"
                          className="w-full h-full object-cover rounded-lg border"
                        />

                        <button
                          onClick={() => handleDelete(index)}
                          type="button"
                          className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-lg text-white"
                        >
                          <XIcon className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      setImages(res.map((r) => r.url));
                    }}
                    onUploadError={() => {
                      alert("Something went wrong");
                    }}
                  />
                )}

                <p className="text-red-500">{fields.images.errors}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Buttons text="Create Product" />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default ProductCreatePage;
