import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import TodoSeparateItem from "../TodoSeparateItem/TodoSeparateItem";

const TodoItems = ({ todos, Item, handleRemove }) => {
  return (
    <Box container>
      <div>
        <h2>Items</h2>
      </div>
      <Grid container spacing={2} >
        {!!todos.length &&
          todos.map((item, index) => {
            return (
              <Grid key={item.id} xs={4}>
                <TodoSeparateItem
                  title={item.title}
                  body={item.description}
                  id={item.id}
                  onRemove={handleRemove}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default TodoItems;