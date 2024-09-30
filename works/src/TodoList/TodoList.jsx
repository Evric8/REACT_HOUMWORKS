import { useState, useEffect } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import TodoForm from "../TodoForm/TodoForm";
import { cloneDeep } from "lodash";
import TodoItems from "../TodoItems/TodoItems";
import storageService from "../utils/StorageService";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const saveTodo = async (data) => {
    try {
      const saveData = await storageService.saveItem(data);
      const todosCopy = cloneDeep(todos);
      todosCopy.push(saveData);
      setTodos(todosCopy);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async ({ id: itemId }) => {
    const { id } = await storageService.deleteItem(itemId);
    if (id) {
      const updatedData = todos.filter((item) => item.id !== id);
      setTodos(updatedData);
    }
  };


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await storageService.getData();
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <Box component="section" sx={{ p: 4 }}>
      <h1 className="text-center">TodoList</h1>
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={5}>
            <TodoForm onSubmit={saveTodo} />
          </Grid>
          <Grid size={7}>
            <TodoItems todos={todos} Item={Item} handleRemove={handleRemove} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TodoList;