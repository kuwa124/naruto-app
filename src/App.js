import React from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import Pager from "./components/Pager";
import useCharacters from "./hooks/useCharacters";

const App = () => {
  const { characters, page, isLoading, handleNext, handlePrev } = useCharacters();

  return (
    <div className="container">
      {isLoading ? (
        <div>Now Loading...</div>
      ) : (
        <main>
          <CharacterList characters={characters} />
          <Pager 
            page={page} 
            handleNext={handleNext} 
            handlePrev={handlePrev} 
            isNextDisabled={characters.length < 15} 
          />
        </main>
      )}
    </div>
  );
};

export default App;