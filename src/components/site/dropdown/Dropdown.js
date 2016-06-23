import React, { Component, PropTypes } from 'react'
import styles from './dropdown.scss'
import classNames from 'classnames';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown(event) {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className={classNames(styles.dropdown, this.props.className)}>
        <a className={styles.dropdown__button} onClick={this.handleDropdown} href="#">Dropdown</a>
        <ul className={classNames(styles.dropdown__list, { 'is-open': this.state.isOpen })}>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string,
};

export default Dropdown;
