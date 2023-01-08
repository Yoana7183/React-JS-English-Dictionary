import React, { useState } from 'react';
import Word from "./components/Word";
import Input from "./components/Input";
import Header from "./components/Header";


function App() {
	let [word, setWord] = useState([])

	const fetchWord = (value) => {
		var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
		var urle = url + value
		fetch(urle)
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



	return (
		<div className="App">
			<Header />
			<Input fetchWord={fetchWord} />
			<Word word={word} />

		</div>
	);
}

export default App;
