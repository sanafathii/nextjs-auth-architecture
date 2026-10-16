import { create } from "zustand";
import { userSession } from "../_types/auth.types";

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

interface SessionState {
  session: userSession | null;
  status: AuthStatus;
  clearSession: () => void;
  updateSession: () => void;
}

const fetchSessionFromApi = async () => {
  try {
    const response = await fetch("/api/auth/session");

    if (response.ok) {
      const data = await response.json();
      return data
        ? { session: data, status: "authenticated" as AuthStatus }
        : { session: null, status: "unauthenticated" as AuthStatus };
    }

    return { session: null, status: "unauthenticated" as AuthStatus };
  } catch {
    return { session: null, status: "unauthenticated" as AuthStatus };
  }
};

export const useSessionStore = create<SessionState>((set) => ({
  session: null,
  status: "loading" as AuthStatus,
  clearSession: () => set({ session: null, status: "unauthenticated" }),
  updateSession: async () => {
    const { session, status } = await fetchSessionFromApi();
    set({ session, status });
  },
}));

if (typeof window !== "undefined") {
  useSessionStore.getState().updateSession();
}
