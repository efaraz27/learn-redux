import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function HooksCakeContainer() {
  const dispatch = useDispatch();
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  return (
    <div>
      <h2>Number of Ice Creams: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
}
export default HooksCakeContainer;