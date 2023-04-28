import { useGetAllUsersQuery } from '../services/users'
import { CircularProgress, Grid } from "@mui/material";
import { Link } from 'react-router-dom';
const UserList = () => {
  const { isLoading, isError, data } = useGetAllUsersQuery();

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
    <Grid container spacing={2}>
      {data.map((data) => (
        <Grid item key={data.id}>
          <p>{data.name}</p>
          <Link to={`users/${data.id}`}>
          <button>View</button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
