import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { generateUser } from "./features/users/userSlice";
import UserList from "./components/userList";

const App = () => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state) => state.users
  );

  return (
    <Container className="mt-4">
      <h2>Random User Generator</h2>

      <Button onClick={() => dispatch(generateUser())} disabled={loading} >
        {loading ? "Loading..." : "Generate Random User"}
      </Button>
      <p className="mt-3">
        Total Users: {users.length}
      </p>
      {error && <p>{error}</p>}
      <UserList />
    </Container>
  );
};

export default App;
