import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import reactLogo from "../../assets/react-logo.svg";
import angularLogo from "../../assets/angular-logo.svg";
import { Image, List, ListItem } from "spectacle";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 750px;
  margin: 40px auto;
`;

const Box = styled.div`
  width: 100%;
  margin: 0 30px;
`;

const ListItemStyled = styled(ListItem)`
  font-size: 18px;
  line-height: 22px;
  margin: 10px 0px;
`;

class ComparativeBox extends React.Component {
  renderListItems(items) {
    return items.map((item, i) => (
      <ListItemStyled key={i} textSize={18}>{item}</ListItemStyled>
    ));
  }
  renderBox(logo, itens = []) {
    if (!itens.length) { return null; }
    return (
      <Box>
        <Image src={logo} height="100" />
        <List>
          {this.renderListItems(itens)}
        </List>
      </Box>
    );
  }
  render() {
    const { angular, react } = this.props;
    return (
      <Wrapper>
        { this.renderBox(angularLogo, angular) }
        { this.renderBox(reactLogo, react) }
      </Wrapper>
    );
  }
}

ComparativeBox.propTypes = {
  angular: PropTypes.array,
  react: PropTypes.array
};

export default ComparativeBox;
