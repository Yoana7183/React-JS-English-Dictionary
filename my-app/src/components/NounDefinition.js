import { useState } from "react"
import Synonyms from "./Synonyms"
import Antonyms from "./Antonyms"
const NounDefinition = ({ word }) => {

  let synonyms = word.meanings[0].synonyms
  let antonyms = word.meanings[0].antonyms

  let definition = word.meanings[0].definitions[0].definition
  if (word.meanings[0].partOfSpeech === "noun") {
    console.log('is noun');

    if (definition === undefined) {
      return (
        <div className="noNoun">
          There is no noun definition for this word
        </div>
      )

    }

    if (synonyms.length === 0 || undefined || null) {
      return (
        <div className="noNounSynonyms">
          There is no noun synonyms for this word
        </div>
      )
    }
    if (antonyms.length === 0 || undefined || null) {
      return (
        <div className="noNounAntonyms">
          There is no noun antonyms for this word
        </div>
      )
    }
  } else {
    console.log('else');
    console.log(word.meanings[0].partOfSpeech);

  }

  return (
    <div className="nounDefinition">Noun Definition: {definition}

      <div className="spanContainer">Noun synonyms:<Synonyms synonyms={synonyms} /></div>
      <div className="spanContainer">Noun antonyms:<Antonyms antonyms={antonyms} /></div>

    </div>
  )
}

export default NounDefinition