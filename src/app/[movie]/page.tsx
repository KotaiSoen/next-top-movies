import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";

export default async function MovieDetails({params}: {params: Params}) {
    const moviedetails = await fetch(`https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`);

    const url: string = "https://image.tmdb.org/t/p/original";
    
    const res = await moviedetails.json();

    return (
        <div>
            <p className='text-2xl font-semibold'>{res.title}</p>
            <p>{res.overview}</p>
            <p className="font-semibold my-2">Release date: {res.release_date}</p>
            <p className="font-semibold my-2">Runtime: {res.runtime} minutes</p>
            <Image
                className="my-5"
                src={url + res.poster_path}
                height={400}
                width={400}
                alt={res.title}
            />
        </div>
    )
}