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
  width: 300px;
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
  render() {
    return (
      <Wrapper>
        <Box>
          <Image src={angularLogo} height="100" />
          <List>
            {this.renderListItems(this.props.angular)}
          </List>
        </Box>
        <Box>
          <Image src={reactLogo} height="100" />
          <List>
            {this.renderListItems(this.props.react)}
          </List>
        </Box>
      </Wrapper>
    );
  }
}

ComparativeBox.propTypes = {
  angular: PropTypes.array,
  react: PropTypes.array
};

export default ComparativeBox;
