
import Word from "./Word"

const Words = ({ words }) => {

    return (
        <>
            {words.map((word) => 
                <Word key={word.id} word={word} />
            )}
        </>
    )
}

export default Words
