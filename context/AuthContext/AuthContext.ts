import React, { createContext, useContext, useState } from "react";
import { AuthContextType } from "./AuthContext.types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
