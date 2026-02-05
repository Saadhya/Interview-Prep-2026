import type React from "react";
import { useAppSelector } from "../../../../instagram-clone/src/store";

const MyComp: React.FC = () => {
  const count = useAppSelector((state) => state.counter);
  return (
    <div>
      <h1>my comp : {count}</h1>
    </div>
  );
};

export default MyComp;
