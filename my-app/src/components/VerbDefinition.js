
const VerbDefinition = ({ word }) => {
  if(word.meanings[1] === undefined){
    return(
      <div>
     There is no verb definition for this word
    </div>
    )
  }
  let definition = word.meanings[1].definitions[0].definition
  if (definition === undefined) {
    definition = 'There is no verb definition for this word'
  }
  return (
    <div>
      Verb Definition:  {definition}
    </div>
  )
}

export default VerbDefinition
