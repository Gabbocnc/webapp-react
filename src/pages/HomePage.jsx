import FilmCard from "../components/FilmCard";

export default function HomePage() {
    const films = [
        {
            id: 1,
            title: "Inception",
            year: 2010,
            genre: "Sci-Fi",
            director: "Christopher Nolan"
        },
        {
            id: 2,
            title: "The Godfather",
            year: 1972,
            genre: "Crime",
            director: "Francis Ford Coppola"
        },
        {
            id: 3,
            title: "The Dark Knight",
            year: 2008,
            genre: "Action",
            director: "Christopher Nolan"
        },
        {
            id: 4,
            title: "Pulp Fiction",
            year: 1994,
            genre: "Crime",
            director: "Quentin Tarantino"
        },
        {
            id: 5,
            title: "Forrest Gump",
            year: 1994,
            genre: "Drama",
            director: "Robert Zemeckis"
        }
    ];

    return (

        <>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            films.map(film => (
                                <div className="col" key={film.id}>
                                    <FilmCard film={film} />
                                </div>
                            ))
                        }


                    </div>
                </div>



            </section>


        </>
    )

}