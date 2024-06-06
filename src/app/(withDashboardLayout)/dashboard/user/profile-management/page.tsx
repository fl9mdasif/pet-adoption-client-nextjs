"use client";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import UpdateUserProfile from "./components/UpdateUserProfileModal";

type TUser = {
  id: string;
  name: string;
  role: string;
  email: string;
  iat: string;
  exp: string;
};
const ProfileManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [user, setUser] = useState<TUser>();

  useEffect(() => {
    const userInfo: TUser = getUserInfo();

    setUser(userInfo);
  }, []);

  return (
    <div>
      <h1>profile-management</h1>
      <h1>Welcome {user?.name}</h1>

      <Button variant="outlined" onClick={() => setIsModalOpen(true)}>
        Update Profile
      </Button>

      <UpdateUserProfile
        id={user?.id as string}
        open={isModalOpen}
        setOpen={setIsModalOpen}
        refetch={undefined}
      />
    </div>
  );
};

export default ProfileManagement;
