import RForm from "@/components/Forms/RForm";
import RSelect from "@/components/Forms/RSelect";
import RModal from "@/components/shared/RModal/RModal";
import { useUpdateUserByAdminMutation } from "@/redux/api/userApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  id: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
};

const UpdateUserModal = ({ open, setOpen, id, refetch }: TProps) => {
  const [updateUserByAdmin, { isLoading }] = useUpdateUserByAdminMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    console.log(data);

    try {
      const res = await updateUserByAdmin({ id, data }).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("User updated successfully!!");
        setOpen(false);
        refetch();
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <RModal open={open} setOpen={setOpen} title="update user role and status">
      <RForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <RSelect
              name="role"
              label="role"
              size="medium"
              fullWidth={true}
              options={[
                { label: "USER", value: "USER" },
                { label: "ADMIN", value: "ADMIN" },
              ]}
              // required
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <RSelect
              name="status"
              label="status"
              size="medium"
              fullWidth={true}
              options={[
                { label: "ACTIVE", value: "ACTIVE" },
                { label: "BLOCKED", value: "BLOCKED" },
              ]}
              // required
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

export default UpdateUserModal;
