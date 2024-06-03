"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/actions/registerUser";
import { storeUserInfo } from "@/services/auth.services";
import RInput from "@/components/Forms/RInput";
import RForm from "@/components/Forms/RForm";
import { FieldValues } from "react-hook-form";
import { loginUser } from "@/services/actions/loginUser";
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

interface IUserData {
  name: string;
  email: string;
  password: string;
  contactNumber: string;
  address: string;
}

const UserRegSchema = z.object({
  name: z.string({
    required_error: "name is required!",
  }),
  email: z
    .string({
      required_error: "Valid Email is required!",
    })
    .email(),
  password: z.string().min(6, "Must be at least 6 characters"),
  contactNumber: z.string(),

  address: z.string({
    required_error: "address is required!",
  }),
});

const RegisterPage = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleSubmit = async (values: FieldValues) => {
    try {
      const res = await registerUser(values);
      // console.log("res", res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await loginUser({
          password: values.password,
          email: values.email,
        });
        // console.log("regis", result);
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
          router.refresh();
        } else {
          setError(res.message);
          // console.log(res);
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
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
                User Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <RForm
              onSubmit={handleSubmit}
              resolver={zodResolver(UserRegSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <RInput
                    name="name"
                    label="Name"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <RInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <RInput
                    name="password"
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <RInput
                    name="contactNumber"
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <RInput
                    name="address"
                    label="Address"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                // required={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account?
                <Box component="p" fontWeight={400} color="blue">
                  <Link href="/login">Login</Link>
                </Box>
              </Typography>
            </RForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
