import { createContext, useReducer } from 'react';

// export const Store = createContext(); //provides a way to share data between
// // components without having to pass props down
// // through the component tree.

// const initialState = {
//   cart: {
//     cartItems: [],
//   },
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case 'CART_ADD_ITEM':
//       // add to cart
//       const newItem = action.payload;
//       const existItem = state.cart.cartItems.find(
//         (item) => item._id === newItem._id
//       );
//       const cartItems = existItem
//         ? state.cart.cartItems.map(
//             (item) => (item._id === existItem._id ? newItem : item) //newItem update quantity
//           )
//         : [...state.cart.cartItems, newItem];
//       return { ...state, cart: { ...state.cart, cartItems } };
//     //   return {
//     //     ...state,
//     //     cart: {
//     //       ...state.cart,
//     //       cartItems: [...state.cart.cartItems, action.payload],
//     //     },
//     //   };
//     default:
//       return state;
//   }
// }

// export function StoreProvider(props) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = { state, dispatch };
//   return <Store.Provider value={value}>{props.children} </Store.Provider>;
// }
//StoreProvider() = tempat simpanan
//The Store.Provider component is used to
// provide the value prop to all descendant components
// that consume the Store context. The props.children syntax
// is used to pass any child components of the StoreProvider
// component to the Store.Provider component.

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      // add to cart

      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      return { ...state, cart: { ...state.cart, cartItems } };
    // return {
    //   ...state,
    //   cart: {
    //     ...state.cart,
    //     cartItems: [...state.cart.cartItems, action.payload],
    //   },
    // };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children} </Store.Provider>;
}
