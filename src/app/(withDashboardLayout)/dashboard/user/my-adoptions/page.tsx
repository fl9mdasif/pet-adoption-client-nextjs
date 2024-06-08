"use client";

import Loading from "@/app/loading";
import { useGetMyAdoptionsQuery } from "@/redux/api/userApi";

const MyAdoptions = () => {
  const { data: myAdoptions, isLoading } = useGetMyAdoptionsQuery({});

  if (isLoading) {
    <Loading />;
  }
  console.log(myAdoptions);
  return (
    <div>
      <h1>my-adoptions</h1>
    </div>
  );
};

export default MyAdoptions;
