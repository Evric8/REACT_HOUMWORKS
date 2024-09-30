import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import storageService from "../utils/StorageService";
import { Button, TextField, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const TodoItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await storageService.getData();
      const foundTodo = data.find((item) => item.id === parseInt(id));
      setTodo(foundTodo);
      setLoading(false);
    };
    fetchTodo();
  }, [id]);

  const handleDelete = async () => {
    await storageService.deleteItem(parseInt(id));
    navigate("/");
  };

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await storageService.deleteItem(parseInt(id));
    await storageService.saveItem(todo);
    alert("Todo item updated successfully!");
    navigate("/");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Box component="section" sx={{ p: 4 }}>
      <h2 className="text-center">Edit Todo</h2>
      <br />

      <Grid container spacing={2}>
        <TextField
          name="title"
          label="Title"
          value={todo.title}
          onChange={handleChange}
        />
        <TextField
          name="description"
          label="Description"
          value={todo.description}
          onChange={handleChange}
          multiline/>
        <Button variant="outlined" size="small" onClick={handleSave}>
          Change + Save
        </Button>
        <Button variant="outlined" size="small" onClick={handleDelete}>
          Delete
        </Button>
      </Grid>
    </Box>
  );
};

export default TodoItemDetails;