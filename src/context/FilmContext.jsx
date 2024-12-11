import { createContext, useState, useEffect } from "react";


export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {

    const [films, setFilms] = useState([]);

    /* chiamata per i film */
    useEffect(() => {
        fetch('http://localhost:3005/')
            .then(res => res.json())
            .then(data => {
                setFilms(data.data);
            });
    }, []);


    return (
        <FilmContext.Provider value={{ films }}>
            {children}
        </FilmContext.Provider>
    );
};
