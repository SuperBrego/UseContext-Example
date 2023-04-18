import { createContext, useContext } from "react";
import { Character1 } from "../Database/ReadyCharacters";
import { Character } from "../Types/Character";

type CharProps = {
    character: Character,
    setAbility: (id: number, rank: number) => void
}

export const MyCharContext = createContext<CharProps>({
    character: Character1,
    setAbility: (id: number, rank: number) => {}
});
  
export const useGlobalCharContext = () => useContext(MyCharContext);