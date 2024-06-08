"use client";
import { useGetSinglePetQuery } from "@/redux/api/petApi"; // Adjust path as needed
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Image from "next/image";
import Loading from "@/app/loading";
import { useState } from "react";
import AdoptPetModal from "../components/AdoptPetModal"; // Ensure this is correctly imported

interface TParams {
  petId: string;
}

const PetDetails = ({ params }: { params: TParams }) => {
  const { data: pet, isLoading } = useGetSinglePetQuery(params.petId);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  console.log(pet);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container maxWidth="md" sx={{ display: "flex", mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "800px", // Fixed height
                overflow: "hidden",
                pt: 4,
                padding: 1,
              }}
            >
              <Image
                src={pet.photo}
                alt="pet"
                width={600}
                height={700}
                objectFit="contain" // Cover property
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {pet.name}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1">
                      Species: {pet.species}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1">Breed: {pet.breed}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1">Age: {pet.age}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1">Size: {pet.size}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1">
                      <LocationOnIcon /> {pet.location}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
                  {pet.description}
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Temperament: {pet.temperament}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Medical History: {pet.medicalHistory}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Adoption Requirements: {pet.adoptionRequirements}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <CardActions
              sx={{
                justifyContent: "space-between",
                px: 2,
                paddingBottom: "20px",
              }}
            >
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                }}
                variant="outlined"
              >
                Adopt the {pet.species}
              </Button>
            </CardActions>
          </Grid>
        </Container>
      )}

      <AdoptPetModal
        id={pet?.id as string}
        refetch={undefined}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      />
    </>
  );
};

export default PetDetails;
