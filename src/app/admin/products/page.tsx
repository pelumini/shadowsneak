import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import { MoreHorizontal, UserIcon } from "lucide-react";
import Image from "next/image";

const ProductsPage = () => {
  const data: any = [];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button asChild className="flex items-center gap-x-2 bg-orange-600">
          <Link href="/dashboard/products/create">
            <span className="font-semibold">Add Product</span>
          </Link>
        </Button>
      </div>

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-neutral-200 text-gray-900">
                  <tr className="">
                    <th
                      scope="col"
                      className="px-6 py-3 text-start font-medium"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start font-medium"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start font-medium"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start font-medium"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start font-medium"
                    >
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-end font-medium">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      John Brown
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      45
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      New York No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      New York No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      New York No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      New York No. 1 Lake Park
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
