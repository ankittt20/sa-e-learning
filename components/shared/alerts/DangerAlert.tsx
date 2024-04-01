import { CgDanger } from "react-icons/cg";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDestructive({ message }: { message: string }) {
  return (
    <Alert variant="destructive">
      <CgDanger className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
