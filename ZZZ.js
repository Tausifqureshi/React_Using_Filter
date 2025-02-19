    // Increment quantity

    // incrementQuantity: (state, action) => {
    //   // return {
    //   //   ...state,    // Pura state ko copy karo
    //   //   cart: state.cart.map((item) => { // Cart mein jo bhi items hain unko map karo
    //   //     if (item.id === action.payload) { // Agar item ka id action.payload ke barabar hai toh us item ka quantity increment karo
    //   //       return { ...item, quantity: item.quantity + 1 }; // Item ko copy karke quantity increment karo
    //   //     }

    //   //     return item; // Agar item ka id action.payload ke barabar nahi hai toh us item ko as it is return karo
    //   //   }),
    //   // };
    //   state.cart = state.cart.map((item) => { // Cart mein jo bhi items hain unko map karo
    //     if (item.id === action.payload) { // Agar item ka id action.payload ke barabar hai toh us item ka quantity increment karo
    //       return { ...item, quantity: item.quantity + 1 }; // Item ko copy karke quantity increment karo
    //     }
    //     return item; // Agar item ka id action.payload ke barabar nahi hai toh us item ko as it is return karo
    //   });
    // },



