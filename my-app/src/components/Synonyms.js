
const Synonyms = ({ synonyms }) => {
  return (
    <span>
      {synonyms.map((synonym, index) => (
        <span className={synonyms} key={index}>{synonym},</span>
      ))}
    </span>

  )

}
export default Synonyms
