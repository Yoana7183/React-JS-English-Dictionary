
const NounDefinition = ({ word }) => {
  let definition = word.meanings[0].definitions[0].definition
if (definition === undefined) {
  definition = 'There is no noun definition for this word'
}
  return (
    <div>
        Noun Definition: {definition}

    </div>
  )
}

export default NounDefinition
