import zustandStorage from "@/utils/zustandStorage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
    isGuest: boolean;
  setIsGuest: (isGuest: boolean) => void;
  user: any;
  setUser: (user: any) => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      isGuest: false,
      setIsGuest: (isGuest) => set({ isGuest }),
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useUserStore;

