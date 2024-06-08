import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RSelect from "@/components/Forms/RSelect";
import RModal from "@/components/shared/RModal/RModal";
import { useUpdateAdoptionStatusMutation } from "@/redux/api/adoptionApi";

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

const UpdateAdoptionModal = ({ open, setOpen, id, refetch }: TProps) => {
  const [updateAdoptionStatus] = useUpdateAdoptionStatusMutation({});

  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(id);
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await updateAdoptionStatus({ id, data }).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Adoption Status updated successfully!!");
        setOpen(false);
        refetch();
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <RModal open={open} setOpen={setOpen} title="update a pet">
      <RForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <RSelect
              name="status"
              label="Adoption Status"
              size="medium"
              fullWidth={true}
              options={[
                { label: "PENDING", value: "PENDING" },
                { label: "REJECTED", value: "REJECTED" },
                { label: "APPROVED", value: "APPROVED" },
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

export default UpdateAdoptionModal;
