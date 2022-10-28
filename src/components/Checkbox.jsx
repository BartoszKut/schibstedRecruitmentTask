import './Checkbox.css';

export const Checkbox = ({ id, title, name, handleChange, checked }) => 
    <div className='d-inline d-lg-flex ms-1 align-items-center mb-lg-2'>
        <input
            id={id}
            type="checkbox"
            name={name}
            onChange={handleChange}
            checked={checked}
        />
        <label className='me-3 ms-1 fw-bolder' htmlFor={id}>{title}</label>
    </div>
    