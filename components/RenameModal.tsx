"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { setIsRenameModal } from "@/store/appSlice";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import toast from "react-hot-toast";

function RenameModal() {
  const { user } = useUser();
  const { fileId, filename, isRenameModalOpen } = useAppSelector(
    (state) => state
  );

  const [input, setInput] = useState(filename);
  const dispatch = useAppDispatch();
  async function renameFile() {
    if (!user || !fileId) return;
    const toastId = toast.loading("Renaming...");
    await updateDoc(doc(db, "users", user.id, "files", fileId), {
      filename: input,
    });
    toast.success("Renamed Successfully", {
      id: toastId,
    });
    setInput("");
    dispatch(setIsRenameModal(false));
  }
  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => dispatch(setIsRenameModal(isOpen))}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-2">Rename the File</DialogTitle>
          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key == "Enter") renameFile();
            }}
          />
          <div className="flex justify-end space-x-2 py-3">
            <Button
              size={"sm"}
              className="px-3"
              variant={"ghost"}
              onClick={() => dispatch(setIsRenameModal(false))}
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              size={"sm"}
              className="px-3"
              onClick={() => renameFile()}
            >
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default RenameModal;
