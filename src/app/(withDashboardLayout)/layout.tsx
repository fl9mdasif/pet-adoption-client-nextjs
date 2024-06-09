/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// import getUserInfo from "@/components/lib/"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const user = getUserInfo() as any;
    if (!user) {
      router.push("/login");
    }
  }, []);

  return <DashboardDrawer>{children} </DashboardDrawer>;
};

export default DashboardLayout;
