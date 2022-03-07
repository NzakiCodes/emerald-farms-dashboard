import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isLoggedIn: boolean;
    userId: string;
    token: string;
}

const initialState: AuthState = {
    isLoggedIn: false,
    userId: '',
    token: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ userId: string, token: string }>) => {
            state.isLoggedIn = true;
            state.userId = action.payload.userId;
            state.token = action.payload.token;
        }
    },
    extraReducers: {
        // Add extra reducers here
    }

});

export const { login } = authSlice.actions;
export default authSlice.reducer;
