import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SubTitle from '../../components/SubTitle';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Input from '../../components/Input';

const BoxStyled = styled(Box)`
  width: 120px;
  margin: 20px 0;
`
const InputStyled = styled(Input) `
  margin: 0 10px;
`

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    const { actions, match } = this.props;
    actions.onFindHero(match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.value) {
      this.setState({ value: nextProps.heroes.hero.name });
    }
  }

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { heroes: { hero }, actions: { onUpdateHero } } = this.props;
    onUpdateHero({ ...hero, name: this.state.value });
  }

  render() {
    const { heroes: { hero }, history } = this.props;
    if (!hero.name) return null;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <SubTitle>{hero.name.toUpperCase()} DETAILS</SubTitle>
        <div><span>id: </span>{hero.id}</div>
        <label>name:</label>
        <InputStyled value={this.state.value} onChange={this.handleOnChange}/>
        <BoxStyled displayType="flex" justifyContent="space-between">
          <Button type="button" onClick={history.goBack}>go back</Button>
          <Button>Save</Button>
        </BoxStyled>
      </form>
    );
  }
}

Detail.propTypes = {
  actions: PropTypes.object.isRequired,
  heroes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function mapState(state) {
  return {
    heroes: state.heroes,
  };
}

function mapDispatch({ heroes }) {
  return {
    actions: {
      onFindHero: (id) => heroes.findHeroAsync(id),
      onUpdateHero: (hero) => heroes.updateHeroAsync(hero),
    },
  };
}

export default connect(mapState, mapDispatch)(Detail);
