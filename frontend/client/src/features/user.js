import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const register = createAsyncThunk(
  'users/register',
  async ({username, email, password}, thunkAPI) => {
    const body = JSON.stringify({
      username: username, 
      email: email, 
      password: password
    });
  

  try {
    const response = await fetch('/api/users/register',{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    });

    const data = await response.json();

    if(response.status === 200) {
      return data;
    }else{
      return thunkAPI.rejectWithValue(data);
    }

  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }

});

const initialState = { 
  isAuthenticated: false,
  user: null,
  loading: false,	
  registered: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetRegistered: state => {
      state.registered = false;
    }
  },
  extraReducers: builder =>{
    builder
      .addCase(register.pending, state =>{
      state.loading = true;
      })
      .addCase(register.fulfilled, state =>{
        state.loading = false;
        state.registered = true;
      })
      .addCase(register.rejected, state =>{
        state.loading = false;
      })
  }
})

export const { resetRegistered } = userSlice.actions
export default userSlice.reducer