import * as React from 'react'
import { Route } from 'react-router-dom';
import { Layout } from '../layouts/Standard';
import Home from './Home';

export const routes = (
  <Layout>
    <Route exact path="/" component={Home} />
  </Layout>
);