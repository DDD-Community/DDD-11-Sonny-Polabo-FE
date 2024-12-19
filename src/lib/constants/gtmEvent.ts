import { BoardThemaKeyType, SnsKeyType } from '@/types'
import { BOARDTHEMAS } from './boardConfig'
import { SNS } from './snsConfig'

export const GTM_EVENT = Object.freeze({
  CLICK_BTN_NEWBOARD: 'click_btn_newboard',
  CLICK_BTN_COPYLINK_MAIN: 'click_btn_copylink_main',
  CLICK_BTN_LOGIN: 'click_btn_login',
  CLICK_BTN_NEXT: 'click_btn_next',
  CLICK_THEME: (theme: BoardThemaKeyType) =>
    `click_theme_${BOARDTHEMAS[theme].gtm}`,
  CLICK_BTN_DONE: 'click_btn_done',
  CLICK_BTN_SHARE: 'click_btn_share',
  CLICK_BTN_SHARE_SNS: (snsType: SnsKeyType) =>
    `click_btn_share_${SNS[snsType].gtm}`,
  CLICK_BTN_COPYLINK_BOARD: 'click_btn_copylink_board',
})
