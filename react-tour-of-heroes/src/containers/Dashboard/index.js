import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubTitle from '../../components/SubTitle';
import Autocomplete from '../../components/Autocomplete';
import Box from '../../components/Box';
import List from './List';
import { fetchHeroes, searchHeroes } from './reducer/index';

class Dashboard extends PureComponent {
  componentDidMount() {
    const { actions } = this.props;
    actions.onFetchHeroes();
  }

  render() {
    const { dashboard: { heroes, heroesFound }, actions } = this.props;

    return(
      <div>
      <h4>Hero Search</h4>
      <Autocomplete onChange={(e) => actions.onSearchHeroes(e.target.value)} data={heroesFound} />
      <Box textAlign="center">
        <SubTitle >Top Heroes</SubTitle>
        <List data={heroes.slice(1, 5)} />
      </Box>
      </div>
    );
  }
}

Dashboard.propTypes = {
  actions: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      onFetchHeroes: () => dispatch(fetchHeroes()),
      onSearchHeroes: (term) => dispatch(searchHeroes(term)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
