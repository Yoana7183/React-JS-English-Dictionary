import React, { useState, useEffect } from 'react';
import Word from "./components/Word";
import Input from "./components/Input";
import Header from "./components/Header";
import './App.css';


function App() {
	let [word, setWord] = useState([])

	var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

	async function fetchWord(value) {
		await fetch(url + value)
			.then(response => response.json())
			.then(data => setWord(data))

	}
	console.log(word);



	return (
		<div className="App">
			<Header />
			<Input fetchWord={fetchWord} />
			<Word word={word} />
		</div>
	);
}

export default App;
