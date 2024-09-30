import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom"; //

const TodoSeparateItem = ({ title, body, id, onRemove }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title + ', id=' + id}
        </Typography>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={() => navigate(`/todo/${id}`)}>
          Details
        </Button>
        <Button size="small" variant="outlined" onClick={() => onRemove({id})}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoSeparateItem;