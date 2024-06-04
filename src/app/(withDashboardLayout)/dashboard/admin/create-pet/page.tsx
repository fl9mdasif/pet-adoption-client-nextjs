"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

import CreatePetModal from "./components/CreatePetModal";

const CreatePets = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button variant="outlined" onClick={() => setIsModalOpen(true)}>
          Create Pet
        </Button>

        <CreatePetModal open={isModalOpen} setOpen={setIsModalOpen} />

        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      {/* {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )} */}
    </Box>
  );
};

export default CreatePets;
