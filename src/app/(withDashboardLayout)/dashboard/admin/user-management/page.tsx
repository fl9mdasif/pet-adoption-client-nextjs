"use client";
import Loading from "@/app/loading";
import {
  useDeleteUserFromDBMutation,
  useGetAllUsersQuery,
} from "@/redux/api/userApi";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useState } from "react";
import { toast } from "sonner";
import UpdateUserModal from "./components/UpdateUserModal";

const UserManagement = () => {
  const { data, isLoading, refetch } = useGetAllUsersQuery({});
  const [deleteUserFromDB] = useDeleteUserFromDBMutation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [getId, setId] = useState("");

  if (isLoading) {
    return <Loading />;
  }
  // console.log("all-user", data);

  const handleDelete = async (id: string) => {
    // console.log(id);
    try {
      const res = await deleteUserFromDB(id).unwrap();
      if (res?.id) {
        toast.success("user deleted successfully!!!");
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
    console.log({ getId });
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 160 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "contactNumber", headerName: "Contact-Number", width: 100 },
    { field: "role", headerName: "Role", width: 100 },
    { field: "status", headerName: "User-Status", width: 100 },

    {
      field: "action2",
      headerName: "Update",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              aria-label="update"
              onClick={() => handleUpdate(row.id)}
            >
              <EditNoteIcon />
            </IconButton>
            
            <UpdateUserModal
              refetch={refetch}
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

  // console.log("all", data);
  return (
    <div>
      <h1>user management</h1>
      <Box>
        <h1>Total {data.length} User</h1>

        {!isLoading ? (
          <Box my={2}>
            <DataGrid rows={data} columns={columns} />
          </Box>
        ) : (
          <Loading />
        )}
      </Box>
    </div>
  );
};

export default UserManagement;
