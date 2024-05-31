"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            left: "-90px",
            top: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="doctor1" />
        </Box>
        <Typography variant="h6" component="h1" fontWeight={600}>
          Welcome to PetHaven
        </Typography>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Find your
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          new best friend
        </Typography>
        <Typography sx={{ my: 4 }}>
          Browse pets from our network of over 14,500 shelters and rescues. We
          believe every animal deserves a second chance.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make appointment</Button>
          <Button variant="outlined">Contact us</Button>
        </Box>
      </Box>

      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "150px",
          }}
        >
          <Image
            src={assets.images.adopt3}
            width={440}
            height={840}
            alt="pet"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
