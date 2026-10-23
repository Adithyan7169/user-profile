
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const UserCard = ({ user, index }) => (
  <Col md={4} className="mb-3">
    <Card>
      <Card.Body>
        <p>Sl. No.: {index + 1}</p>

        <Card.Img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} style={{ width: "100px" }}/>

        <Card.Title>
          {user.name.first} {user.name.last}
        </Card.Title>

        <p>Email: {user.email}</p>

        <p>Gender: {user.gender}</p>

        <p>Country: {user.location.country}</p>
      </Card.Body>
    </Card>
  </Col>
);

export default UserCard;
