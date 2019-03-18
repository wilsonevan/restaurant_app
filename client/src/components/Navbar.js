import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, } from "react-router-dom";

const Navbar = () => (
  <Menu borderless style={ { marginBottom: "0px", } } size="huge" color={'red'} width={"fluid"} >
    {/* <Menu.Item header></Menu.Item> */}
    <Link to="/">
      <Menu.Item header>
				Fisherman’s Hook
      </Menu.Item>
    </Link>
    <Link to="/dinner">
      <Menu.Item>
        Dinner
      </Menu.Item>
    </Link>
    <Link to="/lunch">
      <Menu.Item>
        Lunch
      </Menu.Item>
    </Link>
    <Link to="/brunch">
      <Menu.Item>
        Brunch
      </Menu.Item>
    </Link>
		<Menu.Menu position='right'>
      <Link to="/">
        <Menu.Item>
          Contact Us
        </Menu.Item>
      </Link>
    </Menu.Menu>
  </Menu>
)

export default Navbar;