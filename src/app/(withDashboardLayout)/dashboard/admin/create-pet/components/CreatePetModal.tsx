import RFileUploader from "@/components/Forms/RFileUploader";
import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RSelect from "@/components/Forms/RSelect";
import RModal from "@/components/shared/RModal/RModal";
import { useCreatePetMutation } from "@/redux/api/petApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreatePetModal = ({ open, setOpen }: TProps) => {
  const [CreatePet] = useCreatePetMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);

    // console.log(data);

    try {
      const res = await CreatePet(data).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("Pet created successfully!!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <RModal open={open} setOpen={setOpen} title="create a pet">
      <RForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput
              name="name"
              label="name"
              type="string"
              fullWidth={true}
              required={true}
            />
          </Grid>
          <Grid item md={6}>
            <RInput
              name="species"
              label="species"
              type="string"
              fullWidth={true}
              required={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput
              name="breed"
              label="breed"
              type="string"
              fullWidth={true}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput
              name="age"
              label="age"
              type="number"
              fullWidth={true}
              required={true}
            />
          </Grid>
          <Grid item md={6}>
            <RInput
              name="size"
              label="size"
              type="string"
              fullWidth={true}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput
              name="photo"
              label="photo"
              type="string"
              fullWidth={true}
              required={true}
            />
          </Grid>
          <Grid item md={6}>
            <RInput
              name="location"
              label="location"
              type="string"
              fullWidth={true}
              required={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={12}>
            <RInput
              name="description"
              label="description"
              type="string"
              fullWidth={true}
              required={true}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <RInput
              name="adoptionRequirements"
              label="adoptionRequirements"
              type="string"
              fullWidth={true}
              required={true}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput
              name="temperament"
              label="temperament"
              type="string"
              fullWidth={true}
              required={true}
            />
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
            <RInput
              name="medicalHistory"
              label="medicalHistory"
              type="string"
              fullWidth={true}
              required={true}
            />
          </Grid>
          {/* upload file */}

          {/* <Grid item md={6}>
            <RFileUploader name="file" label="FileUpload" />
          </Grid>
        */}
        </Grid>

        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </RForm>
    </RModal>
  );
};

export default CreatePetModal;
