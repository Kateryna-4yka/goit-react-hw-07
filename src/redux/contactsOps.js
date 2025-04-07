import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://678951e42c874e66b7d86210.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", 
      async (_, thunkAPI) => {
        try {
      const response = await axios.get("/contacts");
      return response.data}
      catch (error) { return thunkAPI.rejectWithValue(error.message)}
    },
  )

  export const addContact = createAsyncThunk(
    "contacts/addContact", 
      async (newContact, thunkAPI) => {
        try {
      const response = await axios.post ("/contacts", newContact);
      return response.data}
      catch (error) { return thunkAPI.rejectWithValue(error.message)}
    },
  )

    export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", 
      async (contactID, thunkAPI) => {
        try {
      const response = await axios.delete (`/contacts/${contactID}`);
      return response.data}
      catch (error) { return thunkAPI.rejectWithValue(error.message)}
    },
  )