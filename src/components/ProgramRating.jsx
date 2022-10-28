export const ProgramRating = ({ program }) => 
    <div className="float-end">    
        <svg
            className='my-auto me-2'
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 10 10"
        >
            <path
                fill={ program.imdb.rating ? '#FFD700' : '#DCDCDC' }
                d="M9.465 2.976l-2.698-.37L5.56.303c-.21-.403-.91-.403-1.12 0L3.232 2.607l-2.698.37c-.51.07-.717.664-.346 1.005l1.952 1.794-.46 2.534c-.087.48.448.848.907.621L5 7.735l2.413 1.197c.455.224.994-.138.907-.621l-.461-2.534 1.952-1.794c.37-.342.164-.936-.346-1.007z"
            />
        </svg>
        { program.imdb.rating && <h3 className='d-inline align-middle'>{program.imdb.rating}</h3> }
        { !program.imdb.rating && <p className='d-inline align-middle text-black-50'>No reviews</p> }
    </div>
