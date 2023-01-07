import React, { useState, useEffect } from 'react';
import Word from "./components/Word";
import Input from "./components/Input";
import Header from "./components/Header";


function App() {
   

	let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello'
	let [word, setWord] = useState([])

	let fetchWord = () => {
		fetch(url)
			.then(r => {
				if (r.ok) {
					return r.json()
				}
			})
			.then(word => {
				setWord(word)
				console.dir(word);
			})
			.catch(err => console.warn(err));
	}

	useEffect(fetchWord,[])

  return (
    <div className="App">
      <Header />
      <Input />
      <Word word={word} />

    </div>
  );
}

export default App;
