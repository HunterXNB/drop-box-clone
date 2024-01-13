import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface AppState {
  isDeleteModalOpen: boolean;
  isRenameModalOpen: boolean;
  fileId: string | null;
  filename: string;
}

const initialState: AppState = {
  fileId: "",
  filename: "",
  isDeleteModalOpen: false,
  isRenameModalOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsDeleteModal(state, action: PayloadAction<boolean>) {
      state.isDeleteModalOpen = action.payload;
    },
    setIsRenameModal(state, action: PayloadAction<boolean>) {
      state.isRenameModalOpen = action.payload;
    },
    setFileId(state, action: PayloadAction<string | null>) {
      state.fileId = action.payload;
    },
    setFilename(state, action: PayloadAction<string>) {
      state.filename = action.payload;
    },
  },
});

export const { setFileId, setFilename, setIsDeleteModal, setIsRenameModal } =
  appSlice.actions;

export default appSlice.reducer;
