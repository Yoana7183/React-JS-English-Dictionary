import Phonetic from "./Phonetic"
import NounDefinition from "./NounDefinition"
import VerbDefinition from "./VerbDefinition"
import CurrentWord from "./CurrentWord"
import InterjectionDefinition from "./InterjectionDefinition"
import Source from "./Source"



const Word = ({ word }) => {

    return (
        <div>
            {word.map((word, index) => {
                return (
                    <li className='wordData' key={index}>
                        <CurrentWord word={word} />
                           <Phonetic word={word} /> 
                          {/* <NounDefinition word={word} />
                        <VerbDefinition word={word} />
                        <InterjectionDefinition word={word} /> 
                        <Source word={word} />    */}
                    </li> 
                );

            })}
        </div>
    )

}


export default Word
