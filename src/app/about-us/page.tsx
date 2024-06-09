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
        <Box
          sx={{ display: "flex", gap: 2, flexDirection: "row", mt: 3, mb: 5 }}
        >
          <Box
            sx={{
              position: "relative",
              width: "50%",
              height: "400px", // Fixed height
              overflow: "hidden",
              pt: 4,
              mt: 4,
              mr: 4,
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
              // overflow: "hidden",
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

        <Box
          sx={{ display: "flex", gap: 2, flexDirection: "row", mt: 3, mb: 5 }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "400px",
                height: "170px", // 16:9 aspect ratio
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

                width: "400px",
                height: "170px", // 16:9 aspect ratio
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
            <Typography
              sx={{ textAlign: "center", mt: 5, mb: 3 }}
              variant="h4"
              gutterBottom
            >
              Meet Our Team
            </Typography>
            <Grid />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mb: 9,
              }}
            >
              {/* 1 */}
              <Card
                sx={{
                  width: "330px",
                }}
              >
                <Box
                  sx={{
                    // position: "relative",
                    mt: 3,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src={assets.images.ceo}
                    alt="ceo"
                    objectFit="cover" // Cover property
                    height={100}
                    width={100}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MD Asif Al Azad
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    CEO & Founder
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    asifalazadami2021@gmail.com 01605855875
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    <LocationOnIcon /> {"Mirpur 2, Dhaka 1216"}
                  </Typography>
                </CardContent>
              </Card>

              {/* 2 */}
              <Card
                sx={{
                  width: "330px",
                }}
              >
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    justifyContent: "center",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src={assets.images.manager}
                    alt="ceo"
                    height={100}
                    width={100}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    AL Imran
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manager
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    alimran3344@gmail.com 01605866554
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    <LocationOnIcon /> {"Mirpur 2, Dhaka 1216"}
                  </Typography>
                </CardContent>
              </Card>

              {/* 3 */}
              <Card
                sx={{
                  width: "330px",
                }}
              >
                <Box
                  sx={{
                    // position: "relative",
                    mt: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    overflow: "hidden",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src={assets.images.ex_director}
                    alt="ceo"
                    height={100}
                    width={100}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Aronno Ezaz
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Executive Director
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    aronno@gmail.com 01705657893
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    <LocationOnIcon /> {"Mirpur 2, Dhaka 1216"}
                  </Typography>
                </CardContent>
              </Card>
              {/* 4 */}
              <Card
                sx={{
                  width: "330px",
                }}
              >
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100px",
                    overflow: "hidden",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src={assets.images.fund_mng}
                    alt="ceo"
                    height={100}
                    width={100}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mohibul Emon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Fund Manager
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    emon@gmail.com 01784854346
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    <LocationOnIcon /> {"Mirpur 2, Dhaka 1216"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default page;
