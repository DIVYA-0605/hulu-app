import Thumbnail from "./Thumbnail"


function Result({results}) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.map((result)=>(
                <Thumbnail key={result.id} result={result}/>

            ))}
        </div>
    )
}

export default Result
