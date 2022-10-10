import React, { useState, createContext } from "react";

interface GameCardContext {
  newAdCreated: boolean;
  setNewAdCreated: React.Dispatch<React.SetStateAction<boolean>>
}

interface GameCardProvider {
  children: React.ReactNode
}

export const GameCardContext = createContext({} as GameCardContext)

export function GameCardProvider({ children }: GameCardProvider) {
  const [newAdCreated, setNewAdCreated] = useState<boolean>(false);

  return (
    <GameCardContext.Provider value={{ newAdCreated, setNewAdCreated }}>
      {children}
    </GameCardContext.Provider>
  );
}
