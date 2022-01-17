import {Outlet} from "react-router-dom";
import { UserNavBar } from "../../components/navbar";

function User() {
    const elements = (
      <div className="flex-container">
        < UserNavBar/>
        <Outlet />
      </div>
    );
    return elements;
  }
  
  export default User;