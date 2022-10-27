import './Checkbox.css';

export const Checkbox = ({ id, title, name, handleChange, checked }) => 
    <div className='ms-1'>
        <input
            id={id}
            type="checkbox"
            name={name}
            onChange={handleChange}
            checked={checked}
        />
        <label className='ms-2 aaa' htmlFor={id}>{title}</label>
    </div>
    