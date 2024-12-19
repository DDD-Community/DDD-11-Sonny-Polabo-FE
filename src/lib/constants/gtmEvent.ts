import {
  BoardThemaKeyType,
  FontKeyType,
  SnsKeyType,
  ThemaKeyType,
} from '@/types'
import { BOARDTHEMAS } from './boardConfig'
import { SNS } from './snsConfig'
import { FONTS, THEMAS } from './polaroidConfig'

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
  CLICK_INPUT_MESSAGE: 'click_input_message',
  CLICK_INPUT_NICKNAME: 'click_input_nickname',
  CLICK_BTN_FONT: 'click_btn_font',
  CLICK_BTN_FRAME: 'click_btn_frame',
  CLICK_BTN_UPLOAD: 'click_btn_upload',
  CLICK_FONT: (font: FontKeyType) => `click_font_${FONTS[font].gtm}`,
  CLICK_FRAME: (thema: ThemaKeyType) => `click_frame_${THEMAS[thema].gtm}`,
})
