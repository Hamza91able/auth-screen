import { User } from "@/constants/user.type";

export type AuthContextType = {
  login: (email: string, password: string) => void;
  logout: (clearStorage: boolean) => void;
  register: (name: string, email: string, password: string) => void;
  user: User;
  getLoggedInUser: () => Promise<User | null>;
};
