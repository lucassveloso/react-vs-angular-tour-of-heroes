import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubTitle from '../../components/SubTitle';
import List from './List';

class Heroes extends PureComponent {
  componentDidMount() {
    const { actions } = this.props;
    actions.onFetchHeroes();
  }

  render() {
    const { heroes: { heroes } } = this.props;

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
  heroes: PropTypes.object.isRequired,
};

function mapState(state) {
  return {
    heroes: state.heroes,
  };
}

function mapDispatch({ heroes: { fetchHeroesAsync }}) {
  return {
    actions: {
      onFetchHeroes: () => fetchHeroesAsync(),
    },
  };
}

export default connect(mapState, mapDispatch)(Heroes);
