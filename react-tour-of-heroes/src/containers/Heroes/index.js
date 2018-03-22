import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubTitle from '../../components/SubTitle';
import Form from './Form';
import List from './List';

class Heroes extends PureComponent {
  componentDidMount() {
    const { actions } = this.props;
    actions.onFetchHeroes();
  }

  render() {
    const { heroes: { heroes }, actions } = this.props;

    return (
      <section>
        <SubTitle>My Heroes</SubTitle>
        <Form onSubmit={actions.onCreateHero}/>
        <List data={heroes} onDelete={actions.onDeleteHero} />
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

function mapDispatch({ heroes }) {
  return {
    actions: {
      onFetchHeroes: () => heroes.fetchHeroesAsync(),
      onDeleteHero: (id) => heroes.deleteHeroAsync(id),
      onCreateHero: (name) => heroes.createHeroAsync(name),
    },
  };
}

export default connect(mapState, mapDispatch)(Heroes);
