
const Antonyms = ({ antonyms }) => {
    return (
        <span>
            {antonyms.map((antonyms, index) => (
                <span className={antonyms} key={index}>{antonyms},</span>
            ))}
        </span>

    )
}

export default Antonyms
