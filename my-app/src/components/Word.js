import Phonetic from "./Phonetic"
import ShortDefinition from "./ShortDefinition"
import PartOfSpeech from "./PartOfSpeech"
import CurrentWord from "./CurrentWord"



const Word = ({ word }) => {

    return (
        <div>
            {word.map((word, index) => (
                <li className = 'wordData' key={index}>
                    <CurrentWord word ={word}/>
                    <ShortDefinition word={word} />
                    <PartOfSpeech  word={word} />
                    <Phonetic  word={word} />
                    </li>
            ))}
        </div>
    )
}

export default Word
