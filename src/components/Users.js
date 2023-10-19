import { Link, Outlet, useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";

export const Users = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter')==='active'
  return (
    <div>
      <nav style={{padding:20,fontSize:20}}>
        <Link to="1">User 1</Link>
        <Link to="2" style={{marginLeft:8}}>User 2</Link>
        <Link to="3" style={{marginLeft:8}}>User 3</Link>
      </nav>

      <Outlet />
      <div>
        <Button color='success' onClick={()=>setSearchParams({filter:'active'})}>Active Users</Button>
        <Button color='success' onClick={()=>setSearchParams({})}>Reset Filter</Button>
      </div>
      {
        showActiveUsers?<h2>showing active users</h2>:<h2>showing all users</h2>
      }
    </div>
  );
};
