
const Phonetic = ({ word }) => {
  return (
    <div>
      <li> Phonetic text :  {word.phonetics[2].text}</li>
      <li>Phonetic audio link:  {word.phonetics[0].audio}</li>
    </div>
  )
}

export default Phonetic
