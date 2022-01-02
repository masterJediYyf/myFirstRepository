- 现在的 react 思维
  要做什么功能? 有哪个 hooks 可以满足一下不
  1. 学习系统自带的十几个 hooks
  2. 生态系统内的 hooks react-router usehistory
  3. 自定义 hook 对某个功能的封装
  4. ahooks 来自阿里的 hooks 框架

# react 优化

1. useCallback 是要配合子组件的 shouldComponentUpdate 或者 React.memo 一起来使用, 否则就是反向优化
