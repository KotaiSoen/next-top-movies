import Movie from "./movie";

export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json();

  return (
    <main className="text-white">
      <div className="mx-4 my-4">
        <p className="text-4xl font-semibold">The top movies</p>
        <div className="grid gap-16 grid-cols-fluid">
          {res?.results.map((movie: any) => {
            return (
              <Movie 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                picture={movie.poster_path}
                releaseDate={movie.release_date}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}
