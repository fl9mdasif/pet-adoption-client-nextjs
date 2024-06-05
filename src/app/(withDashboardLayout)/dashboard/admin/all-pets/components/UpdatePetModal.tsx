import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RSelect from "@/components/Forms/RSelect";
import RModal from "@/components/shared/RModal/RModal";
import { useUpdatePetMutation } from "@/redux/api/petApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  id: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdatePetModal = ({ open, setOpen, id }: TProps) => {
  const [updatePet] = useUpdatePetMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    console.log(id);
    const data = modifyPayload(values);
    console.log(data);
    try {
      const res = await updatePet({ id, data }).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Pet updated successfully!!");
        setOpen(false);
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
            <RInput
              name="species"
              label="species"
              type="string"
              fullWidth={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput name="breed" label="breed" type="string" fullWidth={true} />
          </Grid>
          <Grid item md={6}>
            <RSelect
              name="healthStatus"
              label="healthStatus"
              size="medium"
              fullWidth={true}
              options={[
                { label: "VACCINATED", value: "VACCINATED" },
                { label: "EUTERED", value: "EUTERED" },
              ]}
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput name="age" label="age" type="number" fullWidth={true} />
          </Grid>
          <Grid item md={6}>
            <RInput name="size" label="size" type="string" fullWidth={true} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput
              name="location"
              label="location"
              type="string"
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

export default UpdatePetModal;
