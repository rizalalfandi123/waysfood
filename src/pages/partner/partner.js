import {Outlet} from "react-router-dom";
import { PartnerNavBar } from "../../components/navbar";

function Partner() {
    const elements = (
      <div className="flex-container">
<PartnerNavBar/>
        <Outlet />
      </div>
    );
    return elements;
  }
  
  export default Partner;