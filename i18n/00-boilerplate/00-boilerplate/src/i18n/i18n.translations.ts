import { namespaces } from "./i18n.constants"

export const cn = {
  // 将 命名空间的权力交归给 i18n.constants
  [namespaces.common]: {
    button: {
      ok: '确定',
      cancel: '取消'
    }
  },
  [namespaces.pages.hello]: {
    welcome: '欢迎'
  } 
}

export const en = {
  [namespaces.common]: {
    button: {
      ok: 'OK',
      cancel: 'Cancel'
    }
  },
  [namespaces.pages.hello]: {
    welcome: 'Welcome'
  } 
}

export const es = {
  [namespaces.common]: {
    button: {
      ok: 'Aceptar',
      cancel: 'Cancelar'
    }
  },
  [namespaces.pages.hello]: {
    welcome: 'Bienvenido'
  } 
}