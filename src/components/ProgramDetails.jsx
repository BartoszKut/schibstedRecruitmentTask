import './ProgramDetails.css';
import { ProgramRating } from './ProgramRating';

export const ProgramDetails = ({ program }) =>
    <div className='ms-3 ps-3 border-start border-1 border-secondary'>
        <h2>{program.title}</h2>
        <p className='d-none d-lg-block genres'>{renderGenresList(program)}</p>
        <p className='d-none d-lg-block streaming fst-italic'>{renderStreamingList(program)}</p>
        <div className='d-flex mt-5 d-lg-none'>
            <ProgramRating program={program} />
        </div>        
    </div>

const renderGenresList = (program) => program.genreGroups.join(', ');

const renderStreamingList = (program) =>
    program.playProviders.map((provider) => provider.name).join(', ');
