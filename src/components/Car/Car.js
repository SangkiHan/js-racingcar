import { CAR } from '../../constants/car'
import { CarValidator } from './CarValidator'

export class Car extends CarValidator {
  #name
  #position
  #onRun

  constructor() {
    super()
  }

  init({ name, onRun = () => {} }) {
    this.validate({ name, onRun })

    this.#name = name
    this.#position = 0
    this.#onRun = onRun
  }

  subscribeError(fn) {
    this.subscribe(fn)
  }

  run() {
    this.setPosition(this.getPosition() + CAR.DEFAULT_STEP_SIZE)
    this.#onRun?.(this)
  }

  setPosition(newPosition) {
    this.#position = newPosition
  }

  getName() {
    return this.#name
  }

  getPosition() {
    return this.#position
  }
}
