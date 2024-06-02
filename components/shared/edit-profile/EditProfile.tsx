"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getUserById, changePassword } from "@/actions/profile.actions";

type Props = {
  session?: any;
};

const EditProfile = ({ session }: Props) => {
  const [user, setUser] = useState<any>(null);
  const [phone, setPhone] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(session?.user?.id);
        setUser(res);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    if (session?.user?.id) {
      fetchUser();
    }
  }, [session?.user?.id]);

  const handleSave = async () => {
    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password Do Not Match");
      return;
    }

    try {
      const userId = session?.user?.id;
      if (userId) {
        await changePassword(userId, currentPassword, newPassword);
        alert("Password Changed Successfully");
        window.location.reload();
      } else {
        alert("User Not Authenticated!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="pt-10 px-4 space-y-6 md:px-6">
      <header className="space-y-1.5">
        <div className="flex items-center space-x-4">
          <img
            src={user?.profilePicture ?? ""}
            alt="Avatar"
            width="96"
            height="96"
            className="border rounded-full"
          />
          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 capitalize">
              {user?.category}
            </p>
          </div>
        </div>
      </header>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={user?.name ?? ""} disabled />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={user?.email ?? ""} disabled />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="Enter your phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                placeholder="Enter your current password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                placeholder="Enter your new password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                placeholder="Confirm your new password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Button className="btn" size="lg" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
