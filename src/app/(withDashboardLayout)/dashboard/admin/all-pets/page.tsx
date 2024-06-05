"use client";
import Loading from "@/app/loading";
import { useDeletePetMutation, useGetAllPetsQuery } from "@/redux/api/petApi";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import UpdatePetModal from "./components/UpdatePetModal";
import { useState } from "react";
import { toast } from "sonner";

const AllPets = () => {
  const { data, isLoading, refetch } = useGetAllPetsQuery({});

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [getId, setId] = useState("");

  const [deletePet] = useDeletePetMutation();

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  const handleDelete = async (id: string) => {
    try {
      const res = await deletePet(id).unwrap();
      if (res?.id) {
        toast.success("Pet deleted successfully!!!");
        refetch();
      }
    } catch (err: any) {
      console.error(err.message);
    }
    console.log(id);
  };

  const handleUpdate = (id: string) => {
    setIsModalOpen(true);
    setId(id);
    console.log({ getId });
  };

  const columns: GridColDef[] = [
    {
      field: "Photo",
      headerName: "Photo",
      // flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image
              src={row.photo}
              width={40}
              height={40}
              // rounded={50}
              alt="img"
            />
          </Box>
        );
      },
    },
    { field: "name", headerName: "Name", width: 140 },
    { field: "species", headerName: "Species", width: 100 },
    { field: "breed", headerName: "breed", width: 100 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "healthStatus", headerName: "healthStatus", width: 100 },

    {
      field: "action1",
      headerName: "Update",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button variant="outlined" onClick={() => handleUpdate(row.id)}>
              Update
            </Button>
            <UpdatePetModal
              id={getId}
              open={isModalOpen}
              setOpen={setIsModalOpen}
            />
          </Box>
        );
      },
    },

    // delete
    {
      field: "action",
      headerName: "Delete",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <h1>All pets</h1>

      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default AllPets;
