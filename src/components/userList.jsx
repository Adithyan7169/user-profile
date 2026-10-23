import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import UserCard from "./userCard";

const UserList = () => {
  const { users, loading } = useSelector(
    (state) => state.users
  );


  if (users.length === 0) {
    return <p>No users generated yet.</p>;
  }

  return (
    <Row className="mt-3">
      {users.map((user, index) => (
        <UserCard key={user.login.uuid} user={user} index={index}/>
      ))}
    </Row>
  );
};

export default UserList;
