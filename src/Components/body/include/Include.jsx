import Card from "./Card1";
import { arr } from "../../../utils/mockdata";
const Include = () => {
  
  return (
    <div className="include">
      <h3 className="heading">This course will includes:</h3>
      <div className="include1">
        {arr.map((inc) => (
          <Card key = {inc.key}  resdata={inc}/>
        ))}
        ;
      </div>
    </div>
  );
};

export default Include;
