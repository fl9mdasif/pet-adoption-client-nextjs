"use client";

import { Avatar, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import UpdateUserProfile from "./components/UpdateUserProfileModal";
import ChangePassWordModal from "./components/ChangePasswordModal";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import assets from "@/assets";
import Loading from "@/app/loading";

const ProfileManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModal2Open, setIsModal2Open] = useState<boolean>(false);

  const { data: user, isLoading, refetch } = useGetMyProfileQuery({});

  // console.log("user", user);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>My profile-management</h1>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Avatar
                alt="avatar"
                src={assets.images.userImg} // Fallback image
                sx={{ width: 150, height: 150, mx: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">{user.name}</Typography>
              <Typography variant="body1" color="text.secondary">
                {user.role}: {user.email}
              </Typography>

              <Typography variant="body2">{user.contactNumber}</Typography>
              <Typography variant="body2">{user.address}</Typography>
            </Grid>
          </Grid>

          <Stack
            sx={{
              my: "30px",
            }}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Button variant="outlined" onClick={() => setIsModalOpen(true)}>
              Update Profile
            </Button>
            <Button variant="outlined" onClick={() => setIsModal2Open(true)}>
              Change Password
            </Button>
          </Stack>

          <UpdateUserProfile
            id={user?.id as string}
            open={isModalOpen}
            setOpen={setIsModalOpen}
            refetch={refetch}
          />

          <ChangePassWordModal
            // id={user?.id as string}
            open={isModal2Open}
            setOpen={setIsModal2Open}
            refetch={undefined}
          />
        </div>
      )}
    </>
  );
};

export default ProfileManagement;
