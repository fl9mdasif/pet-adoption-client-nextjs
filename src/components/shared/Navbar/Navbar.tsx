"use client";

import { getUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  // const [userRole, setUserRole] = useState("");

  // useEffect(() => {
  //   const { role } = getUserInfo() as any;
  //   setUserRole(role);
  // }, []);

  // console.log(userRole);

  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/authButton"),
    { ssr: false }
  );

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            ET
          </Box>{" "}
          Place
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/pets">
            Pets
          </Typography>
          <Typography component={Link} href="/dashboard">
            Dashboard
          </Typography>
          <Typography component={Link} href="/about-us">
            About Us
          </Typography>
        </Stack>

        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
