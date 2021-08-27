import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  properties: [],
  status: "idle",
  error: null,
};

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async () => {
    const response = await fetch("http://localhost:8000/properties");
    const data = await response.json();
    return data;
  }
);

export const addNewProperty = createAsyncThunk(
  "porperties/addNewProperty",
  async (initialProperty) => {
    const response = await fetch("http://localhost:8000/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(initialProperty),
    });

    const data = await response.json();
    return data;
  }
);

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProperties.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProperties.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.properties = state.properties.concat(action.payload);
    },
    [fetchProperties.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addNewProperty.fulfilled]: (state, action) => {
      state.properties.push(action.payload);
    },
  },
});

export const { propertyAdded } = propertiesSlice.actions;
export const selectAllProperties = (state) => state.properties.properties;

export default propertiesSlice.reducer;
