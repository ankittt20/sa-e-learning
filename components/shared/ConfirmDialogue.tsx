import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

interface ConfirmDialogueProps {
  title: string;
  alertMsg: string;
  onConfirm: () => void;
}

const ConfirmDialogue = ({
  title,
  alertMsg,
  onConfirm,
}: ConfirmDialogueProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          type="button"
          className="ml-2 bg-accent-danger text-primary-100"
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-primary-100">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{alertMsg}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            <Button
              type="button"
              className="ml-2 bg-accent-blue text-primary-100"
            >
              Confirm
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialogue;
