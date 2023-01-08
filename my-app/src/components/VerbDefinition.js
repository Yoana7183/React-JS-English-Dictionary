import React from 'react'

const VerbDefinition = ({ word }) => {
  return (
    <div>
      Verb Definition:  {word.meanings[1].definitions[0].definition}
    </div>
  )
}

export default VerbDefinition
