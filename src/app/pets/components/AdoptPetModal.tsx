import Loading from "@/app/loading";
import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import RSelect from "@/components/Forms/RSelect";
import RModal from "@/components/shared/RModal/RModal";
import { useCreateAdoptionMutation } from "@/redux/api/adoptionApi";
import {
  useGetMyProfileQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
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

const AdoptPetModal = ({ open, setOpen, id: petId, refetch }: TProps) => {
  const { data: user, isLoading } = useGetMyProfileQuery({});

  const [createAdoption] = useCreateAdoptionMutation();

  if (isLoading) {
    return <Loading />;
  }

  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(id);

    const adoptionCredentials: any = {
      petId: petId,
      petOwnershipExperience: values.petOwnershipExperience,
      requesterContactNo: values.requesterContactNo,
    };

    const data = modifyPayload(adoptionCredentials);
    console.log("adpt", data);
    try {
      const res = await createAdoption(data).unwrap();
      console.log("adpt re", res);
      if (res?.id) {
        toast.success("Adoption request create successfully!!");
        setOpen(false);
        refetch();
      }
    } catch (err: any) {
      console.error(err.message);
      //
    }
  };

  return (
    <RModal open={open} setOpen={setOpen} title="Create adoption">
      <RForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <RInput
              name="petOwnershipExperience"
              label="petOwnershipExperience"
              type="string"
              fullWidth={true}
            />

            <RInput
              name="requesterContactNo"
              label="requesterContactNo"
              type="string"
              fullWidth={true}
            />
          </Grid>

          <Grid container spacing={2}></Grid>
          <Button sx={{ mt: 1 }} type="submit">
            Update
          </Button>
        </Grid>
      </RForm>
    </RModal>
  );
};

export default AdoptPetModal;
