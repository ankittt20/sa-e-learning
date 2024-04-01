"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { AlertDestructive } from "./alerts/DangerAlert";
import { addSuperAdmin } from "@/actions/super-admin";

const AddUserDialogue = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "cpassword":
        setCpassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (password !== cpassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!name || !email || !password || !cpassword || !role) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    const data = {
      name,
      email,
      password,
      role,
    };
    const res = await addSuperAdmin(data);
    if (res.success) {
      setName("");
      setEmail("");
      setPassword("");
      setCpassword("");
      setRole("");
    } else {
      setError(res.msg);
    }
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-accent-blue text-[#fff]">Add Admin</Button>
      </DialogTrigger>
      <DialogContent className="bg-accent-secondary sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Admin</DialogTitle>
          <DialogDescription>
            You can add the super admin and the admin here.
          </DialogDescription>
          <div>{error && <AlertDestructive message={error} />}</div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <Input
              id="name"
              placeholder="John Doe"
              value={name}
              name="name"
              className="col-span-3"
              onChange={hanldeChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right">
              Email
            </label>
            <Input
              id="email"
              placeholder="john@gmail.com"
              className="col-span-3"
              value={email}
              name="email"
              onChange={hanldeChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="password" className="text-right">
              Password
            </label>
            <Input
              id="password"
              className="col-span-3"
              type="password"
              value={password}
              name="password"
              onChange={hanldeChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="cpassword" className="text-right">
              Confirm Password
            </label>
            <Input
              id="cpassword"
              className="col-span-3"
              type="password"
              value={cpassword}
              name="cpassword"
              onChange={hanldeChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Select
              onValueChange={(e) => {
                setRole(e);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="super-admin">Super Admin</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-accent-blue"
            onClick={handleSubmit}
            disabled={loading}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialogue;
