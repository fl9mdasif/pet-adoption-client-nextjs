// import { getAllPet } from "@/services/actions/petActions";

import {
  Avatar,
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
import assets from "@/assets";
import Navbar from "@/components/shared/Navbar/Navbar";

const page = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pets`);
  // const data = await res.json();

  // // console.log("pet", data);

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        {/* about us */}
        <Box sx={{ display: "flex", flexDirection: "row", mt: 3, mb: 5 }}>
          <Box
            sx={{
              position: "relative",
              width: "50%",
              height: "400px", // Fixed height
              overflow: "hidden",
              pt: 4,
              mt: 4,
              padding: 1,
            }}
          >
            <Image
              src={assets.images.adopt2}
              alt="pet"
              layout="fill"
              objectFit="cover" // Cover property
            />
          </Box>
          <Box
            sx={{
              mt: 4,
              width: "50%",
              height: "400px", // Fixed height
              overflow: "hidden",
              pt: 4,
              padding: 1,
            }}
          >
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  About Our Adoption Agency
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
                  Welcome to our Pet Adoption Agency! Our mission is to find
                  loving homes for pets in need. We believe every animal
                  deserves a second chance at happiness, and we are dedicated to
                  making that happen. Our team is passionate about animal
                  welfare and works tirelessly to ensure the well-being of all
                  pets in our care.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* our missions video */}
        <Box sx={{ display: "flex", flexDirection: "row", mt: 3, mb: 5 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 aspect ratio
                overflow: "hidden",
                mb: 2,
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/exampleVideo1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Typography variant="body1" paragraph>
              Our mission is to rescue, rehabilitate, and rehome pets in need.
              We work closely with local shelters, volunteers, and foster homes
              to provide a safe haven for animals while they wait for their
              forever families. We also strive to educate the public about
              responsible pet ownership and the importance of spaying and
              neutering.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              How You Can Help
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 aspect ratio
                overflow: "hidden",
                mb: 2,
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/exampleVideo2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Typography variant="body1" paragraph>
              There are many ways you can support our efforts. You can adopt a
              pet, volunteer your time, or make a donation. Every contribution,
              no matter how small, makes a big difference in the lives of the
              animals we care for. Together, we can make the world a better
              place for pets in need.
            </Typography>
          </Grid>
        </Box>

        {/* our teams */}
        <Box>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Meet Our Team
            </Typography>
            <Grid />
            <Grid item key={"doctor.id"} md={4}>
              <Card
                sx={{
                  width: "300px",
                }}
              >
                <Box>
                  <Image
                    src={assets.images.doctors}
                    alt="doctor"
                    width={500}
                    height={100}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {"doctor.name"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {"doctor.qualification"}, {"doctor.designation"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    <LocationOnIcon /> {"doctor.address"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Card sx={{ mt: 2 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar
                      alt="John Doe"
                      src="/path/to/john-doe.jpg" // Replace with your profile picture URL
                      sx={{ width: 80, height: 80 }}
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h5" gutterBottom>
                      John Doe
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Position: Senior Veterinarian
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Email: john.doe@example.com
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Bio: John is a seasoned veterinarian with a passion for
                      animal health and welfare. He ensures that all our pets
                      receive the best medical care possible and is an advocate
                      for animal rights.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default page;
