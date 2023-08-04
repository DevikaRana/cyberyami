import "./body.css";
import {Overview} from "./Overview"
import { Intro } from "./intro";
import Include from "./include/Include";
import Division from "./include/Division";


const Body = () => {
  return (
    <div className="body">
     <Intro/>
     <br />
     <br />
     <br />
     <Division/>
     <Overview/>
     <Include />

     
    </div>
  );
};
export default Body;
