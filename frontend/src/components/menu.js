import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from "react-router-dom";

export default class HsMenu extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text vertical>
        <Menu.Item header>Demos</Menu.Item>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          as={Link} to='/'
        />
        <Menu.Item
          name='In browser classification'
          active={activeItem === 'In browser classification'}
          as={Link} to='/browser-classification'
        />
        <Menu.Item
          name='Webcam'
          active={activeItem === 'Webcam'}
          as={Link} to='/webcam'
        />
      </Menu>
    )
  }
}