import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SubTitle from '../../components/SubTitle';
import Autocomplete from '../../components/Autocomplete';
import Box from '../../components/Box';
import List from './List';

const SubTitleStyled = styled(SubTitle)`
  font-size: 18.5px;
`;

class Dashboard extends PureComponent {
  componentDidMount() {
    const { actions } = this.props;
    actions.onFetchHeroes();
  }

  render() {
    const { heroes: { heroes, heroesFound }, actions } = this.props;

    return(
      <div>
        <h4>Hero Search</h4>
        <Autocomplete onChange={(e) => actions.onSearchHeroes(e.target.value)} data={heroesFound} />
        <Box textAlign="center">
          <SubTitleStyled >Top Heroes</SubTitleStyled>
          <List data={heroes.slice(0, 4)} />
        </Box>
      </div>
    );
  }
}

Dashboard.propTypes = {
  actions: PropTypes.object.isRequired,
  heroes: PropTypes.object.isRequired,
};

const mapState = (state) => ({
  heroes: state.heroes,
})

const mapDispatch = ({ heroes: { fetchHeroesAsync, searchHeroesAsync }}) => ({
  actions: {
    onFetchHeroes: () => fetchHeroesAsync(),
    onSearchHeroes: (term) => searchHeroesAsync(term),
  },
})


export default connect(mapState, mapDispatch)(Dashboard);
