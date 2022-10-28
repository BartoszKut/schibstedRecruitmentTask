import { usePrograms } from './hooks/useApiConnection';
import { ProgramItem } from './ProgramItem';
import { useEffect, useState, useCallback } from 'react';
import { Checkbox } from './Checkbox';
import { SortButtons } from './SortButtons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export const DIRECTION_ASCENDING = 'ASC';
export const DIRECTION_DESCENDING = 'DESC';

export const ProgramsList = () => {
    const { movies, series, programs, isError } = usePrograms();
    const [showPrograms, setShowPrograms] = useState();
    const [filters, setFilters] = useState({
        showMovies: false,
        showSeries: false,
    });

    useEffect(() => {
        setShowPrograms(programs ?? []);
    }, [programs]);

    useEffect(() => {
        if (
            (filters.showMovies && filters.showSeries) ||
            (!filters.showMovies && !filters.showSeries)
        ) {
            setShowPrograms(programs);

            return;
        }

        if (filters.showMovies) {
            setShowPrograms(movies);

            return;
        }

        if (filters.showSeries) {
            setShowPrograms(series);

            return;
        }
    }, [series, movies, programs, filters]);

    const sortHandler = useCallback(
        (direction) => {
            if (![DIRECTION_ASCENDING, DIRECTION_DESCENDING].includes(direction)) {
                return;
            }

            const ascSortingCallback = (firstProgram, nextrogram) =>
                firstProgram.imdb.rating < nextrogram.imdb.rating ? -1 : 1;
            const descSortingCallback = (firstProgram, nextrogram) =>
                firstProgram.imdb.rating > nextrogram.imdb.rating ? -1 : 1;

            const programsWithRating = [];
            const programsNoRating = [];

            showPrograms.forEach((element) => {
                if (element.imdb.rating) {
                    programsWithRating.push(element);
                } else {
                    programsNoRating.push(element);
                }
            });

            programsWithRating.sort(
                direction === DIRECTION_ASCENDING
                    ? ascSortingCallback
                    : descSortingCallback
            );

            setShowPrograms(programsWithRating.concat(programsNoRating));
        },
        [showPrograms]
    );

    const handleChange = (event) => {
        const { name } = event.currentTarget;

        setFilters((prevState) => {
            return {
                ...prevState,
                [name]: !prevState[name],
            };
        });
    };

    return (
        <Container>
            { isError && <Alert className='mt-3' variant={'danger'}>
                Something went wrong. Please try again later.
            </Alert> }
            <Row>
                <SortButtons sortHandler={sortHandler} />
            </Row>
            <Row>
                <Col lg={2}>
                    <div className='mt-lg-5'>
                        <Checkbox
                            id="movies"
                            title="Movies"
                            name="showMovies"
                            checked={filters.showMovies}
                            handleChange={handleChange}
                        />
                        <Checkbox
                            id="serires"
                            title="Series"
                            name="showSeries"
                            checked={filters.showSeries}
                            handleChange={handleChange}
                        />
                    </div>  
                </Col>
                <Col xs={12} lg={10}>
                    {showPrograms && renderPrograms(showPrograms)}
                </Col>            
            </Row>
        </Container>
    );

    function renderPrograms(items) {
        return (
            <>
                {items.map((program) => (
                    <ProgramItem key={program.id} item={program} />
                ))}
            </>
        );
    }
};
