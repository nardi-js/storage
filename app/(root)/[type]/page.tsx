import { Models } from "node-appwrite";
import React from "react";

import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { getFile } from "@/lib/actions/file.action";
import { getFileTypesParams } from "@/lib/utils";

const page = async ({ params, searchParams }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";

  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";

  const types = getFileTypesParams(type) as FileType[];

  const files = await getFile({types, searchText, sort});
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>

        <div className="total-size-section">
          <p className="body-1">
            Total: <span className="h5">0 MB</span>
          </p>
        </div>

        <div className="sort-container">
          <p className="body-1 hidden text-light-200 sm:block">Sort by:</p>
          <Sort />
        </div>

        {/* Render the files */}
        {files.total > 0 ? (
          <section className="file-list">
            {files.documents.map((file: Models.Document) => (
              <Card key={file.$id} file={file} />
            ))}
          </section>
        ) : (
          <p className="empty-list">No files uploaded</p>
        )}
      </section>
    </div>
  );
};

export default page;
