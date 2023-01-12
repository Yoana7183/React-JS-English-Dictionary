import { useState } from "react"
import Phonetic from "./Phonetic"
import NounDefinition from "./NounDefinition"
import VerbDefinition from "./VerbDefinition"
import CurrentWord from "./CurrentWord"
import InterjectionDefinition from "./InterjectionDefinition"
import AdjectiveDefinition from "./AdjectiveDefinition"
import AdverbDefinition from "./AdverbDefinition"
import ConjunctionDefiniton from "./ConjunctionDefiniton"
import Source from "./Source"

{/* <CurrentWord word={word} />
<Phonetic word={word} />
<NounDefinition word={word} />
<VerbDefinition word={word} />
<AdjectiveDefinition word={word} />
<InterjectionDefinition word={word} />
<AdverbDefinition word={word} />
<ConjunctionDefiniton word={word} />
<Source word={word} /> */}

const MappingComponentFunc = ({ word }) => {
    let [nounObject, setnounObject] = useState("")

    // console.dir(word.meanings[0].partOfSpeech)

    for (var i = 0; i < word.meanings.length; i++) {
        for (var key in word.meanings[i]) {
            for (var j = 0; j < word.meanings[i][key].length; j++) {
                if (word.meanings[i][key] === "noun") {
                    console.log(word.meanings[i]);
                    let nounObject = word.meanings[i];
                    setnounObject(nounObject)
                    return;
                }
                // }if (word.meanings[i][key] === "verb") {
                //     console.log('VERB IS FOUND');
                // }
            }
        }
    }


    return (
        <div>
            <NounDefinition nounObject={nounObject} />
        </div>
    )
}

export default MappingComponentFunc
