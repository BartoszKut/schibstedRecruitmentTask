import axios from 'axios';
import { useEffect, useState } from 'react';

export const usePrograms = () => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [isError, setIsError] = useState()

    useEffect(() => {
        getPrograms();
    }, []);
 
    async function getPrograms() {
        setMovies(await fetchProgramsData('http://localhost:8080/programs?orderBy=views&programType=movie'));

        setSeries(await fetchProgramsData('http://localhost:8080/programs?orderBy=views&programType=series'));

        setPrograms(await fetchProgramsData('http://localhost:8080/programs?orderBy=views&programType=movie,series'));
    }

    async function fetchProgramsData(url) {
        try {
            const { data } = await axios.get(url);
            if (data.hasOwnProperty('programs')) {
                const { programs } = data;

                return programs;
            }
        } catch {
            setIsError(true);
        }
    }

    return { movies, series, programs, isError };
};
