 
import Image from "next/image";
import Link from "next/link";

interface MovieType {
    title: string,
    id: string,
    picture: string,
    releaseDate: string
}

export default function Movie ({title, id, picture, releaseDate}: MovieType) {
    const url: string = "https://image.tmdb.org/t/p/original";

    return (
        <div className="my-4">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p>Release date: {releaseDate}</p>
            <Link href={`/${id}`}>  
            <Image
                className="my-3"
                src={url + picture}
                width={500}
                height={500}
                alt={title}
                priority
            />
            </Link>
        </div>
    ) 
}