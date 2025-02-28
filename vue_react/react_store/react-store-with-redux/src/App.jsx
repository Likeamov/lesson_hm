import React from "react";
// 天线宝宝
import { connect} from "react-redux";
const App = (props) => {
  const { count, add, minus } = props;

  return (
    <>
      {/* 显示计数 */}
      计数 {count}
      {/* 点击按钮调用 add 方法增加计数 */}
      <button onClick={add}>增加</button>
      {/* 点击按钮调用 minus 方法减少计数 */}
      <button onClick={minus}>减少</button>
    </>
  )
}
// redux state 映射到 props
const mapStateToProps = (state) => {
     return {
       count:state.counter.value

     }     
}
const mapActionsToProps = (dispatch) => {
  return {
    add:()=>dispatch({type:'ADD'}),
    minus:()=>dispatch({type:'MINUS'}),
  }
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);// 高阶组件