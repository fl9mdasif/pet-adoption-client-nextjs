import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// import facebookIcon from "@/assets/landing_page/facebook.png";
// import instagramIcon from "@/assets/landing_page/instagram.png";
// import twitterIcon from "@/assets/landing_page/twitter.png";
// import linkedIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Link href="/about-us" color="#fff">
            About
          </Link>
          <Link href="/pets" color="#fff">
            Available Pets
          </Link>
          <Link href="/dashboard" color="#fff">
            Dashboard
          </Link>
        </Stack>

        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box sx={{ border: "1px dashed lightgray" }}></Box>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024{" "}
            <Link href="https://www.linkedin.com/in/fl9mdasif/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Visit My LinkedIn
              </a>
              fl9mdasif
            </Link>{" "}
            . All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              ET
            </Box>{" "}
            Adoption Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
