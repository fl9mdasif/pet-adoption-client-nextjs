"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Stack,
  Skeleton,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import Navbar from "@/components/shared/Navbar/Navbar";
import Link from "next/link";
import Loading from "../loading";

const AllPets = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const query = {
    searchTerm: searchTerm || undefined,
    species: species || undefined,
    breed: breed || undefined,
    size: size || undefined,
  };

  // useEffect(() => {

  //   const newQuery = { searchTerm, species, breed, size };
  //   setQuery(newQuery);
  // }, [searchTerm, species, breed, size]);

  const { data: pets, isLoading, refetch } = useGetAllPetsQuery(query);

  // console.log(pets);

  return (
    <>
      <Navbar />
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Our available pet for adoption
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{ mt: 2 }}
          >
            Access to expert physicians and surgeons, advanced technologies
          </Typography>
          <Typography component="p" fontSize={18} fontWeight={400}>
            and top-quality surgery facilities right here.
          </Typography>

          <Stack
            sx={{
              my: "30px",
            }}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <TextField
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              placeholder="search pets"
            />
            <TextField
              sx={{
                width: "100px",
              }}
              select
              label="Species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              size="small"
              fullWidth={false}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="bird">Bird</MenuItem>
              <MenuItem value="cat">Cat</MenuItem>
              <MenuItem value="dog">Dog</MenuItem>
              <MenuItem value="horse">Horse</MenuItem>
              <MenuItem value="goat">Goat</MenuItem>
            </TextField>

            <TextField
              sx={{
                width: "100px",
              }}
              select
              label="Breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              size="small"
              fullWidth={false}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="mixed">Mixed</MenuItem>
              <MenuItem value="deshi">Deshi</MenuItem>
            </TextField>

            <TextField
              sx={{
                width: "100px",
              }}
              select
              label="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              size="small"
              fullWidth={false}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="large">Large</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="small">Small</MenuItem>
            </TextField>
          </Stack>
        </Box>

        <Container sx={{ margin: "30px auto" }}>
          <Grid container spacing={2}>
            {isLoading ? (
              <Loading />
            ) : (
              pets.map((pet: any) => (
                <Grid item key={pet.id} md={4}>
                  <Card
                    sx={{
                      height: "400px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "200px", // Fixed height
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={pet.photo}
                        alt="pet"
                        width={400}
                        height={300}
                        objectFit="contain" // Cover property
                      />
                    </Box>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {pet.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {pet.species}, {pet.breed}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mt={1}>
                        <LocationOnIcon /> {pet.location}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        justifyContent: "space-between",
                        px: 2,
                        paddingBottom: "20px",
                      }}
                    >
                      <Button>Adopt Now</Button>
                      <Link href={`/pets/${pet.id}`}>View Details</Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
              }}
            >
              View ALL
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AllPets;
