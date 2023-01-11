import React from 'react'
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

    
    console.log(`mapping function`)
    console.dir(word)

    return (
        <div>

        </div>
    )
}

export default MappingComponentFunc
