"use client";
import Loading from "@/app/loading";
import { useDeletePetMutation, useGetAllPetsQuery } from "@/redux/api/petApi";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import {
  useDeleteAdoptionMutation,
  useGetAllAdoptionsQuery,
} from "@/redux/api/adoptionApi";
import AdoptPetModal from "@/app/pets/components/AdoptPetModal";
import UpdateAdoptionModal from "./components/AdoptionModal";
import RSelect from "@/components/Forms/RSelect";

const AllAdoptions = () => {
  const {
    data: allAdoptions,
    isLoading,
    refetch,
  } = useGetAllAdoptionsQuery({});

  const [deleteAdoption] = useDeleteAdoptionMutation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [getId, setId] = useState("");
  const [getPetId, setPetId] = useState("");

  if (isLoading) {
    return <Loading />;
  }
  // console.log(allAdoptions);

  const handleDelete = async (id: string, petId: string) => {
    try {
      const res = await deleteAdoption({ id, petId });
      if (res) {
        toast.success("adoption deleted successfully!!!");
        refetch();
      }
    } catch (err: any) {
      console.error(err.message);
    }
    // console.log(id);
  };

  const handleUpdate = (id: string) => {
    setIsModalOpen(true);
    setId(id);
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
    { field: "petName", headerName: "Pet Name", width: 100 },
    { field: "requesterEmail", headerName: "User email", width: 140 },
    { field: "requesterContactNo", headerName: "User contact", width: 100 },
    { field: "status", headerName: "Adoption-Status", width: 100 },
    { field: "petLocation", headerName: "petLocation", width: 100 },

    {
      field: "action1",
      headerName: "Update",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              aria-label="update status"
              onClick={() => {
                handleUpdate(row.id);
                setPetId(row.petId);
              }}
            >
              <EditNoteIcon />
            </IconButton>
          </Box>
        );
      },
    },

    // delete
    {
      field: "action2",
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
    <Box>
      <h1>All Adoptions</h1>

      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={allAdoptions} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}

      <UpdateAdoptionModal
        refetch={refetch}
        id={getId}
        petId={getPetId}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      />
    </Box>
  );
};

export default AllAdoptions;
