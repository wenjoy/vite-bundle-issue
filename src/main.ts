import './style.css'
import {add} from './util.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `${add()}`
