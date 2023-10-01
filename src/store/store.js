import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./apiSlice";
import cartSlice from "./cartSlice";

 const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer, 
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});
export default store;




































// function pushNums(arr1, arr2) {
//     const arr12 = [];
//     const arr22 = [];

//     for (let i = 0; i < arr1.length; i++) {
//         let found = false;
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             arr12.push(arr1[i]);
            
//         }
//     }

//     for (let i = 0; i < arr2.length; i++) {
//         let found = false;
//         for (let j = 0; j < arr1.length; j++) {
//             if(arr2[i] === arr1[j]) {
//                 found = true;
//                 break
//             }
            
//         }
//         if(!found) {
//             arr22.push(arr2[i]);
//         }
        
//     }



//     console.log(arr12);
//     console.log(arr22);
// }

// pushNums([1, 2, 3, 4, 5], [4, 6, 7, 8, 9]);