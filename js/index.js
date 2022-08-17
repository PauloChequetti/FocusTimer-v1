// EcmaScript - 2015 ES6 Modules

// default import
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

//  named import
// import { Timer } from "./timer.js"

// DOM
// Document Object Model

// refatoração: mudar um código para deixá-lo mais entendível
// deixar o código mais perfomático
// SEM ALTERAR suas funcionalidades

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})