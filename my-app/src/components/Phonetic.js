

const Phonetic = ({ word }) => {
if(word.phonetic === undefined){
  word.phonetic = 'There is no phonetic description'
}
  return (
<div className="phonetic">
  {word.phonetic}
</div>

  )
}




export default Phonetic
