import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';// 支持异步
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // 打开浏览器 redux 面板

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));
export default store