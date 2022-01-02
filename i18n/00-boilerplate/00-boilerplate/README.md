react-i18next
i18next

- i18n 模块
  支持了 namespace 切换 多人协作 key 重复
  i18n.constants.ts 提供所有的语言种类 所有的命名空间
  i18n.translations.ts 按语言 分命名空间提供语言包
  [namespaces.common] 的好处是 将 命名空间的权力交归给 i18n.constants.ts 打理, 有利于可读性 redux action.type

  i18n 的单力和 axios 有点像

  语言的切换

关键技能点
React.Suspense(异步处理) + i18n(国际化项目)
