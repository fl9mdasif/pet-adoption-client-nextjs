"use client";
import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RSelect from "@/components/Forms/RSelect";
import RModal from "@/components/shared/RModal/RModal";
import { useUpdatePetMutation } from "@/redux/api/petApi";
import {
  useChangePasswordMutation,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { removeUser } from "@/services/auth.services";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  // id: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
};

const ChangePassWordModal = ({ open, setOpen, refetch }: TProps) => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const [changePassword] = useChangePasswordMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const { newPassword, confirm_password: confirmPassword } = values;

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredentials = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };

      const data = modifyPayload(userCredentials);
      // console.log("cng", data);

      const res: any = await changePassword(data);
      console.log("res", res);

      if (res?.data?.id) {
        toast.success("Password updated successfully!!");
        setOpen(false);
        removeUser();
        router.push("/login");
        router.refresh();
        // const data
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <RModal open={open} setOpen={setOpen} title="Update Password">
      <RForm onSubmit={handleFormSubmit}>
        {error && (
          <Box>
            <Typography
              sx={{
                backgroundColor: "red",
                padding: "1px",
                borderRadius: "2px",
                color: "white",
                marginTop: "5px",
              }}
            >
              {error}
            </Typography>
          </Box>
        )}

        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput
              name="oldPassword"
              label="oldPassword"
              type="string"
              fullWidth={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput
              name="newPassword"
              label="newPassword"
              type="string"
              fullWidth={true}
              // Set error prop for Material-UI styling
            />
          </Grid>
          <Grid item md={6}>
            <RInput
              name="confirm_password"
              label="confirm_password"
              type="string"
              fullWidth={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {error ? (
            <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
          ) : (
            ""
          )}
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Update Password
        </Button>
      </RForm>
    </RModal>
  );
};

export default ChangePassWordModal;
