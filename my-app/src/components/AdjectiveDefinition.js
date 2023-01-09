

const AdjectiveDefinition = ({word}) => {
    if (word.meanings[2] === undefined) {
        return(
            <div className="noAdjective">There is no adjective definition for this word</div>
            
        )
       
    }
    let definition = word.meanings[2].definitions[0].definition
    if (definition === undefined) {
      definition = 'There is no adjective definition for this word'
    }
    return (
      <div className="adjective">
        Adjective definition:  {definition}
      </div>
    )
}

export default AdjectiveDefinition
