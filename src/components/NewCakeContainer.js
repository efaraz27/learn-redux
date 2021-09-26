import React, {useState} from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {

    const [quantity, setQuantity] = useState(0)

  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <input type='text' value={quantity} onChange={e => setQuantity(e.target.value)}></input>
      <button onClick={() => props.buyCake(quantity)}>Buy {quantity} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (quantity) => dispatch(buyCake(quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
