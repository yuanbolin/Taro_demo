import {createStore} from 'redux';

let globalData={
  url:'http://xxx',
  isAuth:false,
  user:'xx',
  type:'globalData'
}

function todoApp(state = globalData, action) {
  // 这里暂不处理任何 action，
  // 仅返回传入的 state。
  return state
}

let store = createStore(todoApp)

export {
  store,
  globalData
}
