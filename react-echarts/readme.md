canvas dom 绘制图画

- react + ts 深入解析

  1. ref 对象
     @types/React index.d.ts (d -> declare 声明一个类型)
     T 专指类型参数
     interface RefObject <T> {
     readonly current: T | null;
     }

     global.d.ts (全局声明, 不需要引入)声明一个 HTMLDivElement

  2. createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用

  useRef 不仅仅是用来管理 DOM ref 的，它还相当于 this , 可以存放任何变量.

  useRef 可以很好的解决闭包带来的不方便性. 你可以在各种库中看到它的身影, 比如 react-use 中的 useInterval , usePrevious ……

  值得注意的是，当 useRef 的内容发生变化时,它不会通知您。更改.current 属性不会导致重新呈现。 因为他一直是一个引用 .
