import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SubTitle from '../../components/SubTitle';
import Autocomplete from '../../components/Autocomplete';
import Box from '../../components/Box';
import List from './List';
import { fetch } from './reducer';

class Dashboard extends PureComponent {
  componentDidMount() {
    const { actions } = this.props;

    actions.onFetch();
  }

  render() {
    const { dashboard: { heroes } } = this.props;

    return(
      <Box textAlign="center">
        <Autocomplete onChange={(e) => console.log(e.target.value)} />
        <SubTitle >Top Heroes</SubTitle>
        <List data={heroes.slice(1, 5)} />
      </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      onFetch: () => dispatch(fetch()),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
