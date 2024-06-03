// import { getAllPet } from "@/services/actions/petActions";

const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pets`);
  const data = await res.json();

  console.log("pet", data);

  return <div>about</div>;
};

export default page;
