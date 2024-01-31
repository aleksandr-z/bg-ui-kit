import React from 'react';
import DefaultLoading from './Loading';

// const LazyLoading = React.lazy(
//   () => import(/* webpackChunkName: "Loading" */ './Loading'),
// );

export const Loading = () => {
  return <DefaultLoading />;
};
