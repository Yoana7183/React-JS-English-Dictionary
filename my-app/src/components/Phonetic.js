
const Phonetic = ({ word }) => {
  return (
    <div>
    <ul>

      <li>  Phonetic text :  {word.phonetics[2].text} </li>
      <li>  Phonetic audio link: {word.phonetics[0].audio}</li>

    </ul>
    </div>

  )
}

export default Phonetic
