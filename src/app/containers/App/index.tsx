import React, { FC } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceActions, useServiceActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { Header, SearchInput, ServicesList, SideBar, Footer } from 'app/components';
import { H1 } from 'app/components/shared';
import './style.css';

const Container = styled.div`
  background: #f6f7fa;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
`;

const AppBody = styled.div`
  margin-left: 80px;
  width: 100%;
`;

const PageContent = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding: 32px;
  top: 80px;
`;

interface Props extends RouteComponentProps<void> {
  searchService: typeof ServiceActions.searchService;
}

export const App: FC<Props> = ({ history, location }) => {
  const dispatch = useDispatch();
  const serviceActions = useServiceActions(dispatch);
  const { services } = useSelector((state: RootState) => ({ services: state.services }));

  const handleSearch = React.useCallback(
    (title: string) => {
      if (title.length) serviceActions.searchService({ title });
    },
    [serviceActions]
  );

  return (
    <Container>
      <SideBar />
      <AppBody>
        <Header balance={213920} payout={159465} />

        <PageContent>
          <H1 text="Services" />
          <SearchInput onChange={handleSearch} placeholder="Search" />
          <ServicesList services={services} />
          <Footer />
        </PageContent>
        
      </AppBody>
    </Container>
  );
};
