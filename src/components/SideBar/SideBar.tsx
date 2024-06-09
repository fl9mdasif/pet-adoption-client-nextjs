/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { UserRole } from "@/types";
import SidebarItem from "./SideBarItems";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";
import { drawerItems } from "@/utils/drawerItems";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const [userRole, setUserRole] = useState<any>("");
  const router = useRouter();

  console.log(userRole);

  useEffect(() => {
    const user = getUserInfo() as any;
    setUserRole(user);
    if (!user) {
      router.push("/login");
    }
  }, []);

  // console.log(userRole);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          Pet Adoption
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole?.role as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
