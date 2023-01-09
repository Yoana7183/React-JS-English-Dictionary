import Phonetic from "./Phonetic"
import NounDefinition from "./NounDefinition"
import VerbDefinition from "./VerbDefinition"
import CurrentWord from "./CurrentWord"
import InterjectionDefinition from "./InterjectionDefinition"
import AdjectiveDefinition from "./AdjectiveDefinition"
import Source from "./Source"
import Alert from 'react-bootstrap/Alert';


const Word = ({ word }) => {
    if (word.title === "No Definitions Found") {
        return (
         <div className="alertMsg" >
            <Alert variant="danger">
              <Alert.Heading className = 'alert'>Hey, we cannot find definition for this word..</Alert.Heading>
              <p className = 'alert'>
              "Sorry pal, we couldn't find definitions for the word you were looking for.
              </p>
              <hr />
              <p className="alert">
              You can try the search again at later time or head to the web instead
              </p>
            </Alert>
            </div>
          );
         
    }
    return (
        <div>
            {word.map((word, index) => {
                return (
                    <div className='wordData' key={index}>
                        <CurrentWord word={word} />
                        <Phonetic word={word} />
                         <NounDefinition word={word} />
                         <VerbDefinition word={word} />
                         <AdjectiveDefinition word={word}/>
                        <InterjectionDefinition word={word} />
                        <Source word={word} />    
                    </div>
                );

            })}
        </div>
    )

}

export default Word
