import '../scss/main.css';

export const SearchResult = ({searchWord, error, data}) => {



    return (
        <div className={"result-box"}>
            <h1>{searchWord && `${searchWord}`}</h1>
            {error && console.log(`HTTP error: ${error}`)}
            {data &&
                data.map((dataArray, index) => {
                    return (
                        <div>
                            <h2>{`Definitions ${index + 1}`}</h2>
                            <ul>
                                <li key={index}>{dataArray.shortdef}</li>
                            </ul>
                            <div>
                                {console.log(dataArray["def"][0]["sseq"][0][0][1]["dt"][1][1]["t"])}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


// ChatGPT: {data[0]["def"][0]["sseq"][0][0][1]["dt"][1][1]}

/*
* ["def"]["sseq"][0][1]["dt"]
* */