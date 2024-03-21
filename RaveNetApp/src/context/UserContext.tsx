import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from 'react';

// Define the User interface
interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
}

// Define the UserContextType interface
interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Create the UserContext
const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

// Create the useUserContext hook
export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};
