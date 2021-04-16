import { wrapFunctional } from './utils'

export { default as DialogBox } from '../..\\components\\dialogBox.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyDialogBox = import('../..\\components\\dialogBox.vue' /* webpackChunkName: "components/dialog-box" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
