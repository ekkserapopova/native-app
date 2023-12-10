import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    documents: [],
    document: {},
};

export const documentSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {
        setDocuments: (state, { payload }) => {
            console.log('setDocuments');
            state.documents = payload;
            console.log(payload)
        },
        setDocument: (state, { payload }) => {
            console.log('setDocument');
            state.document = payload;
        },
        resetDocument: (state) => {
            console.log('resetDocument');
            state.document = {};
        },
    },
});

export const documentReducer = documentSlice.reducer;

export const { setDocuments, setDocument, resetDocument } = documentSlice.actions;