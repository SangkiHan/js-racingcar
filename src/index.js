import { Car } from "./domains/Car";
import { CarRace } from "./domains/CarRace";
import { Console } from "./utils/console";
import { splitByComma } from "./utils/splitByComma";
import { input } from "./view/input";
import { output } from "./view/output";
import { car } from "./validator/car";
import { carRace } from "./validator/carRace";

export class App {
  #carInstance;
  #carRace;
  #winner;
  #tryCount;
  constructor() {
    this.#carRace = null;
    this.#carInstance = [];
    this.#winner = [];
    this.#tryCount = 0;
  }

  #makeCarInstance(carNames) {
    return carNames.map(carName => new Car(carName));
  }

  async #inputCarName() {
    const carNamesInput = await input.carName();
    const carNamesSplitByComma = splitByComma(carNamesInput);
    car.nameValidator(carNamesSplitByComma);
    this.#carInstance = this.#makeCarInstance(carNamesSplitByComma);
  }

  async #carNameStage() {
    try {
      await this.#inputCarName();
      this.#carRace = new CarRace(this.#carInstance);
    } catch (error) {
      Console.print(error.message);
      await this.#carNameStage();
    }
  }

  async #inputTryCount() {
    try {
      const tryCountInput = await input.tryCount();
      const tryCount = Number(tryCountInput);
      carRace.tryCountValidator(tryCount);
      this.#tryCount = tryCount;
    } catch (error) {
      Console.print(error.message);
      await this.#inputTryCount();
    }
  }

  #raceResultStage() {
    this.#carRace.totalUnitRound(this.#tryCount);
    this.#winner = this.#carRace.getWinner();
  }

  #printRaceResult() {
    output.raceResultTitle();
    output.carRaceResult(this.#carRace.result);
    output.winner(this.#winner);
  }

  async init() {
    try {
      await this.#carNameStage();
      await this.#inputTryCount();
      this.#raceResultStage();
      this.#printRaceResult();
    } catch (error) {
      Console.print(error.message);
      await this.init();
    }
  }
}

const app = new App();

app.init();
