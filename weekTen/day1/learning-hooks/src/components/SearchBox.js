import {connect} from 'react-redux';
import {handleSelect} from '../redux/actions';
const SearchBox = (props) => {
  const { onInputChange} = props;
  return (
    <div className="pa2">
      <input type="text"
          placeholder="Search Robot..."
          className="pa3 ba b--green bg-lightest-blue"
          onChange={onInputChange}
      />
    </div>
  )
}

export default SearchBox
