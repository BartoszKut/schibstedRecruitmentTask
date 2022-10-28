import { DIRECTION_ASCENDING, DIRECTION_DESCENDING } from './ProgramsList';
import './SortButtons.css';

export const SortButtons = ({ sortHandler }) =>
    <div className='d-flex justify-content-end mt-3 align-items-center'>
        <p className='my-auto me-2 fw-bolder'>Sort by IMDb</p>
        <div>
            <svg
                className='sort d-block mb-1'
                onClick={() => sortHandler(DIRECTION_ASCENDING)}
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="#333333">
                    <polygon points="10,0 20,20 0,20"/>
            </svg>
            <svg
                className='sort d-block'
                onClick={() => sortHandler(DIRECTION_DESCENDING)}
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="#333333">
                    <polygon points="0,0 20,0 10,20"/>
            </svg>
        </div>
    </div>
