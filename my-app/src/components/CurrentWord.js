
const CurrentWord = ({ word }) => {
  let currentWword = word.word
 
  return (
    <div className="currWord" >
   Current word:  { currentWword.toUpperCase()}
    </div>
  )
}

export default CurrentWord
