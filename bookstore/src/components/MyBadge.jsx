import { Badge } from "react-bootstrap";

const MyBadge = (props) => (
  <h5>
    <Badge className="my-badge" variant={props.color}>€ {props.price}</Badge>
  </h5>
);

export default MyBadge;
