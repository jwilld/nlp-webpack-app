import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import '../client/styles/base.scss'

document.querySelector('.submit-button').addEventListener('click',handleSubmit)

export {checkForName, handleSubmit}