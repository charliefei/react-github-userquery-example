import PropTypes from 'prop-types'

// 目前最常用的组件类型
function PersonFn(props) { 
  const {name, gender, age} = props
  return (
    <>
      <ul>
        <li>name: {name}</li>
        <li>gender: {gender}</li>
        <li>age: {age}</li>
      </ul>
    </>
  )
}

PersonFn.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string,
  age: PropTypes.number
}

PersonFn.defaultProps = {
  gender: '♀',
  age: 18
}

export default PersonFn