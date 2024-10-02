import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name: "counter",
    initialState: {
      count: 0,
      test: "En text"
    },
    reducers: {
        //Skapa en action som kallas för increment - Som sköter logik för att öka count
      increment: (state,action) => {
        console.log("Incrementing by 1");
        console.log(action);
        state.count = state.count + action.payload;
      },
      decrement: (state) => {
        if(state.count !== 0) {
            state.count -= 1;
        }

      }
    }
  });

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
