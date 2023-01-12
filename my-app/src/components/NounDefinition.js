import { useState } from "react"
import Synonyms from "./Synonyms"
import Antonyms from "./Antonyms"
const NounDefinition = ({ nounObject }) => {

  var synonyms = nounObject.synonyms
  var antonyms = nounObject.antonyms

  var definition = nounObject.definitions[0].definition
  console.log(definition);

  // if (definition === undefined) {
  //   return (
  //     <div className="noNoun">
  //       There is no noun definition for this word
  //     </div>
  //   )

  // }

  // if (synonyms.length === 0 || undefined || null) {
  //   return (
  //     <div className="noNounSynonyms">
  //       There is no noun synonyms for this word
  //     </div>
  //   )
  // }

  // if (antonyms.length === 0 || undefined || null) {
  //   return (
  //     <div className="noNounAntonyms">
  //       There is no noun antonyms for this word
  //     </div>
  //   )
  // }


  return (
    <div className="nounDefinition">Noun Definition: {definition}

      <div className="spanContainer">Noun synonyms:<Synonyms synonyms={synonyms} /></div>
      <div className="spanContainer">Noun antonyms:<Antonyms antonyms={antonyms} /></div>

    </div>
  )
}

export default NounDefinition