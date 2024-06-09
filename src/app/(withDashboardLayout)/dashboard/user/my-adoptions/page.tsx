"use client";

import Loading from "@/app/loading";
import { useGetMyAdoptionsQuery } from "@/redux/api/userApi";

import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { useDeleteAdoptionMutation } from "@/redux/api/adoptionApi";

const MyAdoptions = () => {
  const { data: myAdoptions, isLoading, refetch } = useGetMyAdoptionsQuery({});
  const [deleteAdoption] = useDeleteAdoptionMutation();

  const handleDelete = async (id: string, petId: string) => {
    try {
      const res = await deleteAdoption({ id, petId });

      console.log(res);
      if (res) {
        toast.success("adoption deleted successfully!!!");
        refetch();
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  // console.log(myAdoptions);

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
    { field: "petName", headerName: "PetName", width: 160 },
    { field: "petLocation", headerName: "Pet-Location", width: 130 },
    { field: "status", headerName: "Adoption-status", width: 100 },

    // delete
    {
      field: "action",
      headerName: "Delete",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton
            onClick={() => handleDelete(row.id, row.petId)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <div>
      <h1>My Adoptions</h1>
      <Box>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid rows={myAdoptions} columns={columns} />
          </Box>
        ) : (
          <Loading />
        )}
      </Box>
    </div>
  );
};

export default MyAdoptions;
