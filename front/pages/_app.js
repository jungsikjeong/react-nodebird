import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import AppLayout from "../components/AppLayout";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";

const NodeBird = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

// 기존 컴포넌트의 기능을 확장해준다.
// NodeBird= ({store})에서 store를 props로 넣어준다
export default withRedux((initialState, options) => {
  const middlewares = []; // []안에 사용할 미들웨어를 적어주면된다.
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  );
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(NodeBird);

// compose가 여러개의 미들웨어를 합성
// applyMiddleware는 미들웨어를 적용
// 미들웨어는 액션과 스토어 사이에서 작용됨
// 조건문같은경우 리덕스 데브툴즈를 깔으면 윈도우객체로 자동생성됨, 틀 자체는 그냥 외우면됨 거의 안바뀜
