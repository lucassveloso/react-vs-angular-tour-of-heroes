import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubTitle from '../../components/SubTitle';
import List from './List';
import { fetchHeroes } from '../Dashboard/reducer/index'

class Heroes extends PureComponent {
  componentDidMount() {
    const { actions } = this.props;
    actions.onFetchHeroes();
  }

  render() {
    const { dashboard: { heroes } } = this.props;
    return (
      <section>
        <SubTitle>My Heroes</SubTitle>
        <List data={heroes} />
      </section>
    );
  }
}

Heroes.propTypes = {
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
