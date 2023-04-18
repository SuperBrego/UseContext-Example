import './App.css'
import CharCard from './Pages/Card/CharCard'
import { useState } from 'react';
import { MyCharContext } from './Context/CharacterContext';
import { Character } from './Types/Character';
import { Character1 } from './Database/ReadyCharacters';


function App() {
  const [character, setCharacter] = useState<Character>(Character1);

  const setAbility = (id: number, rank: number) => {
    let tempCharacter: Character = character;
    let index: number = tempCharacter.abilities.findIndex(elem => elem.id === id);
    if(index === -1) return;
    tempCharacter.abilities[index].rank = rank;
    setCharacter({...tempCharacter});
  }

  return (
    <div className="App">
      <MyCharContext.Provider value={{ character, setAbility }}>
        <CharCard />
      </MyCharContext.Provider>
    </div>
  );
}


export default App
