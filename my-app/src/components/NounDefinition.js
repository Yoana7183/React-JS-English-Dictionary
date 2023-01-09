
const NounDefinition = ({ word }) => {
  let definition = word.meanings[0].definitions[0].definition
if (definition === undefined) {
  return(
    <div className="noNoun">
   There is no noun definition for this word
  </div>
  )
 
}
  return (
    <div className="nounDefinition">
        Noun Definition: {definition}

    </div>
  )
}

export default NounDefinition
