import React from 'react'

const Source = ({ word }) => {
    return (
        <div>
            Source link : {word.sourceUrls[0]}
        </div>
    )
}

export default Source
