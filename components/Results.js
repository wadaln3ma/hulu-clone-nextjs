import MovieItem from "./MovieItem"
import FlipMove from "react-flip-move"

const Results = ({ movies })=>{
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {movies.results.map( movie =>(
        <MovieItem key={movie.id}
          movie={movie}/>
      ))}
    </FlipMove>
)}

export default Results  
