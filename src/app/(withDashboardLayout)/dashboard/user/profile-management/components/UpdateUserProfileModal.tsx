import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RSelect from "@/components/Forms/RSelect";
import RModal from "@/components/shared/RModal/RModal";
import { useUpdatePetMutation } from "@/redux/api/petApi";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  id: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
};

const UpdateUserProfile = ({ open, setOpen, id, refetch }: TProps) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(id);
    const data = modifyPayload(values);
    // console.log("up", data);
    try {
      const res = await updateUser({ id, data }).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("User profile updated successfully!!");
        setOpen(false);
        // refetch();
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <RModal open={open} setOpen={setOpen} title="update a pet">
      <RForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput name="name" label="name" type="string" fullWidth={true} />
          </Grid>
          <Grid item md={6}>
            <RInput name="email" label="email" type="email" fullWidth={true} />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput
              name="contactNumber"
              label="contactNumber"
              type="contactNumber"
              fullWidth={true}
            />
          </Grid>

          <Grid item md={6}>
            <RInput
              name="address"
              label="address"
              type="address"
              fullWidth={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}></Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Update
        </Button>
      </RForm>
    </RModal>
  );
};

export default UpdateUserProfile;
