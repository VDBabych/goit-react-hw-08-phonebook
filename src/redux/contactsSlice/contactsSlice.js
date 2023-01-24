import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'utils/mockApi';

export const requestGetContacts = createAsyncThunk(
  'contacts/requestGetContacts',
  async (_, thunkApi) => {
    try {
      const data = await getContacts();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const requestAddContact = createAsyncThunk(
  'contacts/requestAddContacts',
  async (contact, thunkApi) => {
    try {
      const data = await addContact(contact);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const requestDeleteContact = createAsyncThunk(
  'contacts/requestDeleteContact',
  async (id, thunkApi) => {
    try {
      const data = await deleteContact(id);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  contacts: [],
  isLoading: false,
  error: '',
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(requestAddContact.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(requestAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
        console.log(state.contacts);
      })
      .addCase(requestAddContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(requestDeleteContact.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(requestDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          el => el.id !== action.payload.id
        );
        console.log(state.contacts);
      })
      .addCase(requestDeleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(requestGetContacts.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(requestGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
        console.log(state.contacts);
      })
      .addCase(requestGetContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
