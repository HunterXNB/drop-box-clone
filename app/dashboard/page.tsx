import DropzoneComp from "@/components/Dropzone";
import TableWrapper from "@/components/table/TableWrapper";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

async function Dashboard() {
  const { userId } = auth();
  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timeStamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullname,
    type: doc.data().type,
    size: doc.data().size,
    dwonloadURL: doc.data().downloadURL,
  }));
  return (
    <div className="border-t">
      <DropzoneComp />
      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
