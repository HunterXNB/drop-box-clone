"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { setIsDeleteModal } from "@/store/appSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useUser } from "@clerk/nextjs";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

function DeleteModal() {
  const { user } = useUser();
  const { fileId, isDeleteModalOpen } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  async function deleteFile() {
    if (!user || !fileId) return;
    const toastId = toast.loading("Deleting...");
    const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);
    await deleteObject(fileRef)
      .then(async () => {
        console.log("Deleted");
        deleteDoc(doc(db, "users", user.id, "files", fileId))
          .then(async () => {
            console.log("Database updated");
          })
          .finally(() => {
            dispatch(setIsDeleteModal(false));
            toast.success("Successfully Deleted.", {
              id: toastId,
            });
          });
      })
      .catch((error) => {
        toast.error("Failed to Delet the File.", {
          id: toastId,
        });
        console.log(error);
      });
  }
  return (
    <Dialog
      open={isDeleteModalOpen}
      onOpenChange={(isOpen) => {
        dispatch(setIsDeleteModal(isOpen));
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete?</DialogTitle>
          <DialogDescription>
            This action cannoy be undone. This will permanently delete your
            file!
          </DialogDescription>
        </DialogHeader>
        <div className="flex space-x-2 py-3">
          <Button
            size={"sm"}
            className="px-3 flex-1"
            variant={"ghost"}
            onClick={() => dispatch(setIsDeleteModal(false))}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>
          <Button
            type="submit"
            size={"sm"}
            className="px-3 flex-1"
            variant={"destructive"}
            onClick={() => {
              deleteFile();
            }}
          >
            <span className="sr-only">Delete</span>
            <span>Delete</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteModal;
