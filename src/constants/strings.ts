export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Керемет!', 'Жарайсың!', 'Жақсы жұмыс!']
export const GAME_COPIED_MESSAGE = 'Ойын таспаға көшірілді'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Әріп саны жетпейді'
export const WORD_NOT_FOUND_MESSAGE = 'Ондай сөз мүлдем жоқ'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can be enabled only at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Түстерді көруді жақсарту үшін'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Енгізу'
export const DELETE_TEXT = 'Өшіру'
export const STATISTICS_TITLE = 'Келесі деңгей'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'Келесі сөзге дейін қалған уақыт:'
export const SHARE_TEXT = 'Share'
export const SHARE_FAILURE_TEXT =
  'Unable to share the results. This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.'
export const MIGRATE_BUTTON_TEXT = 'Transfer'
export const MIGRATE_DESCRIPTION_TEXT =
  'Click here to transfer your statistics to a new device.'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."

export const DATEPICKER_TITLE = 'Өткен күнді таңдау'
export const DATEPICKER_CHOOSE_TEXT = 'Таңдау'
export const DATEPICKER_TODAY_TEXT = 'Бүгінгі күн'
export const ARCHIVE_GAMEDATE_TEXT = 'Ойын күні'
