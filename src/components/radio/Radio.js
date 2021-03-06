import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'

class Checkbox extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  render () {
    let {children, className, style, $parent, ...others} = this.props
    let checked = others.checked
    if ($parent) {
      checked = $parent.value === others.value
    }
    return (
      <label
        style={style}
        className={classnames(['vx-radio', {'is-disabled': others.disabled}, className])} >
        <input {...others} type="radio" checked={checked} onChange={this.handleChange}/>
        <i className="vx-radio--icon"></i>
        <span className="vx-radio--text">
          {children}
        </span>
      </label>
    );
  }
  handleChange (e) {
    let value = e.target.value
    if (this.props.$parent) {
      this.props.$parent.onChange && this.props.$parent.onChange(value)
    } else {
      this.props.onChange && this.props.onChange(value)
    }
  }
}

export default Checkbox;
