import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (quantity = 1) => {
  return {
    type: BUY_CAKE,
    payload: quantity,
  };
};
