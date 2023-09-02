import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const UserContext = createContext();

// Componente proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar el valor de los usuarios

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe ser usado dentro del UserProvider");
  }
  return context;
};
