import { urlCheck} from './js/urlChecker'
import { fetchSet } from './js/fetchSet'
import '../client/styles/base.scss'

document.querySelector('.submit-button').addEventListener('click',fetchSet)


export {urlCheck, fetchSet}