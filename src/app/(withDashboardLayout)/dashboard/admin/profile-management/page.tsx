"use client";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";

const ProfileManagement = () => {
  // const router = useRouter();
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = getUserInfo();

    setUser(userInfo);
  }, []);

  // console.log(user);

  return <>hi</>;
};

export default ProfileManagement;
