import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaPlus } from "react-icons/fa";
import { addOffer } from "@/actions/admin.actions";

type Props = {};

const AddDiscount = (props: Props) => {
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [expiryDate, setExpiryDate] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
      <button
          
          className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm"
        >
          <FaPlus />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-primary-100 border-primary-100/70 text-[#000]">
        <DialogHeader>
          <DialogTitle>Add Discount</DialogTitle>
        </DialogHeader>
        <div className="flex space-x-4">
          <div>
            <Label htmlFor="discountCode">Discount Code</Label>
            <Input
              type="text"
              id="discountCode"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter Discount Code"
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="discountPercentage">Discount Percentage</Label>
            <Input
              type="number"
              id="discountPercentage"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(Number(e.target.value))}
              placeholder="Enter Discount %"
              className="mt-1"
              required
            />
          </div>
        </div>
        <div className="-mt-2 flex justify-between items-end">
          <div>
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              type="date"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="Enter Expiry Date"
              className="mt-1"
              required
            />
          </div>
          <DialogClose asChild>
            <Button
              className="btn"
              onClick={() =>
                addOffer(discountCode, discountPercentage, new Date(expiryDate))
              }
            >
              Add
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddDiscount;
