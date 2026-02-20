import { create } from "zustand";
import api from "../services/api";
import type { SignIn } from "../types/user";
import toast from "react-hot-toast";
import type { AuthUser } from "../types/auth";

interface AuthState {
  authUser: AuthUser | null;
  isCheckingAuth: boolean;
  isSignIn: boolean;
  isSignUp: boolean;
  isUpdatingProfile: boolean;
  onlineUser: string[];

  signUp: (data: { fullName: string; email: string; password: string }) => Promise<boolean>;
  signIn: (data: SignIn) => Promise<boolean>;
  logOut: () => Promise<void>;
  updateProfile: (data: unknown) => Promise<void>;
  checkAuth: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSignIn: false,
  isSignUp: false,
  isUpdatingProfile: false,
  onlineUser: [],

  // SIGN UP
  signUp: async (data) => {
    set({ isSignUp: true });

    try {
      const response = await api.post<AuthUser>("/user/signup", data);

      set({ authUser: response.data });
      toast.success("Account Created Successfully!");

      return true;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "SignUp failed");
      return false;
    } finally {
      set({ isSignUp: false });
    }
  },

  // SIGN IN
  signIn: async (data) => {
    set({ isSignIn: true });

    try {
      const response = await api.post<AuthUser>("/user/login", data);

      set({ authUser: response.data });
      toast.success("SignIn Successfully!!");

      return true;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login Failed");
      return false;
    } finally {
      set({ isSignIn: false });
    }
  },

  //  LOG OUT
  logOut: async () => {
    try {
      const response = await api.post("/user/logout");

      set({ authUser: null });
      toast.success(response.data.message);
    } catch (error) {
      console.log("Logout Error", error);
    }
  },

  //  UPDATE PROFILE
  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });

    try {
      const response = await api.put<AuthUser>("/user/profile", data);

      set({ authUser: response.data });
      toast.success("Profile Updated!");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Update Failed");
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  // CHECK AUTH
  checkAuth: async () => {
    try {
      const response = await api.get<AuthUser>("/user/check");

      set({ authUser: response.data });
    } catch (error) {
      console.log("CheckAuth Error", error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));

export default useAuthStore;