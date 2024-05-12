import { MAXIMUM_CAR_NAME_LENGTH, MINIMUM_CAR_NAME_LENGTH } from '../constants/index.js'
import {
  DUPLICATED_CARS_MSG,
  NONEXISTENT_CARS_MSG,
  INVALID_LENGTH_CARS_MSG,
} from '../constants/error.js'

export const carValidation = {
  /**
   * @param {string[]} names
   * @returns boolean
   */
  validates(names) {
    if (!this.isValidAmount(names)) {
      console.log(NONEXISTENT_CARS_MSG)
      return false
    }

    if (!this.isValidDuplication(names)) {
      console.log(DUPLICATED_CARS_MSG)
      return false
    }

    if (!this.isValidLength(names)) {
      console.log(INVALID_LENGTH_CARS_MSG)
      return false
    }

    return true
  },
  isValidAmount(names) {
    return !!names
  },
  isValidDuplication(names) {
    return names.split(',').length === new Set(names.split(',')).size
  },
  isValidLength(names) {
    return names
      .split(',')
      .every(
        (name) =>
          name.trim().length >= MINIMUM_CAR_NAME_LENGTH &&
          name.trim().length <= MAXIMUM_CAR_NAME_LENGTH
      )
  },
}
