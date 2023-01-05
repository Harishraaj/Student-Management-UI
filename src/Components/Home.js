import { useNavigate } from "react-router-dom";
import Graph from "./Graph";
import "./Home.css"
function Home()
{
    return(
       
            <div className="content">
                <h2>Student Management System</h2>
                <br/>
                <Graph/>
            </div>
      
    );
}
export default Home;