import './suggestions.scss';

const Suggestions = ({ options, onSelect }) => {
    return (
  <ul className="dropdown-list">
    { options?.map((option, index) => (
      <li key={option.name + '-' + index} onClick={() => onSelect(option)}>
        <button
          className="dropdown-item"
          onClick={() => onSelect(option)}
        >
          {option.name}, {option.country}
        </button>
      </li>
    ))}
  </ul>
)}

export default Suggestions