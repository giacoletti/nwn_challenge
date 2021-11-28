import React, { useState } from 'react';
import NewsSearch from './components/NewsSearch';
import { Container, Menu, Header, Image } from 'semantic-ui-react';
import NewsIndex from './components/NewsIndex';
import logo from './nwn.png';

const App = () => {

  const [userSearch, setUserSearch] = useState([]);

  const childToParent = (childData) => {
    setUserSearch(childData);
  };

  return (
    <>
      <Menu data-cy="nwn-menu" style={{ borderRadius: 0, background: '' }}>
        <Menu.Item>
          <Image data-cy="nwn-logo" src={logo} size="tiny" centered />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <NewsSearch childToParent={childToParent}/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>
        <Header as="h2" data-cy="nwn-header">
          News Wire Network
        </Header>
        <p data-cy="nwn-subheader">News from around the world</p>
        <NewsIndex search={userSearch}/>
      </Container>
    </>
  );
};

export default App;
