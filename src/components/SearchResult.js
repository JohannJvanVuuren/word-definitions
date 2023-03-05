import '../scss/main.css';

export const SearchResult = ({searchWord, loading, error, data}) => {

    const returnExampleSentence = (sseqArray) => {
        if (sseqArray.length > 1) {
            sseqArray.map((sseqSubArray, index) => {
                if (sseqSubArray.length > 1) {
                    return sseqArray[index]["dt"][1][0]["t"] !== undefined ? sseqArray[index]["dt"][1][0]["t"] : 'No usage example';
                } else {
                    return sseqArray[0][1]["dt"][1][1]["t"] !== undefined ? sseqArray[0][1]["dt"][1][1]["t"] : 'No usage example';
                }
            })
        } else {
            return sseqArray[0]["dt"][1]["t"] !== undefined ? sseqArray[0]["dt"][1]["t"] : 'No usage example';
        }
    }

    return (
        <div className={"result-box"}>
            <h1>{searchWord && `${searchWord}`}</h1>
            {error && console.log(`HTTP error: ${error}`)}
            {loading && <p>Loading...</p>}
            {data &&
                data.map((differentDefinition, index) => {
                    return (
                            <ul>
                                <li key={index}>{returnExampleSentence(differentDefinition["def"][0]["sseq"])}</li>
                            </ul>
                    )

                })
            }
            }
        </div>
    )
}


// ChatGPT: {data[0]["def"][0]["sseq"][0][0][1]["dt"][1][1]}

/*
* [1][1]dt[0][1]
* */