import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../Dashboard';
import Heroes from '../Heroes';
import Detail from '../Detail';
import Container from '../../components/Container';
import Menu from '../../components/Menu';
import Title from '../../components/Title';
import Messages from './Messages';

const App = ({ app: { messages, loading }, actions }) => (
  <Container>
    <header>
      <Title>Tour of Heroes { loading && ' - Carregando' }</Title>
    </header>
    <Menu>
      <Menu.Link to="/dashboard">Dashboard</Menu.Link>
      <Menu.Link to="/heroes">Heroes</Menu.Link>
    </Menu>
    <main>
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/dashboard"/>
        )} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/heroes" component={Heroes} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </main>
    <footer>
      <Messages onClear={actions.onClear} messages={messages} />
    </footer>
  </Container>
);

App.propTypes = {
  actions: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
};

const mapState = ({ app }) => ({
  app,
})

const mapDispatch = ({ app: { clearMessages }}) => ({
  actions: {
    onClear: () => clearMessages(),
  },
})

export default withRouter(connect(mapState, mapDispatch)(App));
