import { ListGroup, ListGroupItem ,Button} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Menus = () => {
   
  return (
    <ListGroup>
      {/* <ListGroupItem tag='a' href='/' action>Home</ListGroupItem>
      <ListGroupItem tag='a' href='/add-course' action>Add Course</ListGroupItem>
      <ListGroupItem tag='a' href='/view-courses' action>View Courses</ListGroupItem>
      <ListGroupItem tag='a' href='#!' action>About</ListGroupItem>
      <ListGroupItem tag='a' href='#!' action>Contact</ListGroupItem> */}
      <Link  className='list-group-item list-group-itrm-action' tag='a' to='/' action>Home</Link>
      <Link  className='list-group-item list-group-itrm-action' tag='a' to='/add-course' action>Add Course</Link>
      <Link  className='list-group-item list-group-itrm-action' tag='a' to='/view-courses' action>View Courses</Link>
      <Link  className='list-group-item list-group-itrm-action' tag='a' to='/about' action>About</Link>
      <Link  className='list-group-item list-group-itrm-action' tag='a' to='/contact' action>Contact</Link>
      
    </ListGroup>
    
  );
};
