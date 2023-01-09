
const Source = ({ word }) => {
    let source =word.sourceUrls[0]
    if(source === undefined){
        source = 'There is no source information'
    }
    return (
        <div className="source">
            Source link : {source}
        </div>
    )
}

export default Source
