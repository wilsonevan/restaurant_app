import React from 'react';
import { Header, } from "semantic-ui-react";

const Dish = ({ id, name, description, price, dishCategory }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
			<Header as="h2" style={{ marginLeft: "15px", }}>
				{ name }
				<Header.Subheader>{ description }</Header.Subheader>
			</Header>
    </div>
  </div>
)

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default Dish;