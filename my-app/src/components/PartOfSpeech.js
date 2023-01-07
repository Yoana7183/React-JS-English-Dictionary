
const PartOfSpeech = ({ word }) => {
  return (
    <div>
        Part Of Speech in Noun: {word.meanings[0].definitions[1].definition}
        {/* Part Of Speech in Verb: {word.partOfSpeech[1].definition} */}
    </div>
  )
}

export default PartOfSpeech
