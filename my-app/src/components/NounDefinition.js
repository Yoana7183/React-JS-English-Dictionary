
const NounDefinition = ({ word }) => {

  return (
    <div>
        Noun Definition: {word.meanings[0].definitions[0].definition}

    </div>
  )
}

export default NounDefinition
