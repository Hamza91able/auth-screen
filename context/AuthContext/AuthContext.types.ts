export type AuthContextType = {
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
};
