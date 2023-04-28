import { useGetUserByIdQuery } from "../services/users";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
const User = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetUserByIdQuery(id);
  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return "something went wrong";
  }
  if (data) {
    console.log(data);
  }

  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
};

export default User;
