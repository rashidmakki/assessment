import { RootState } from "@/redux/store";

export const getUsers = (state:RootState) => state.dashboard.users;