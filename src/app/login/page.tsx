"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import RForm from "@/components/Forms/RForm";
import RInput from "@/components/Forms/RInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import { loginSchema } from "@/utils/interface";

export type ValidationSchemaType = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handelSubmit = async (values: any) => {
    try {
      const res = await loginUser(values);
      // console.log("res", res);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
        router.refresh();
      } else {
        setError(res.message);
        // console.log(res);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Navbar />
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login User
              </Typography>
            </Box>
          </Stack>

          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          <Box>
            <RForm
              onSubmit={handelSubmit}
              resolver={zodResolver<any>(
                loginSchema as unknown as ValidationSchemaType
              )}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <RInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <RInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
              </Grid>

              {/* <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography> */}

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Dont have an account?{" "}
                <Typography component="p" fontWeight={400} color="blue">
                  <Link href="/register">Create an account</Link>
                </Typography>
              </Typography>
            </RForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
