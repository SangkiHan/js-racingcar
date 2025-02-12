## 요구사항
### 1단계 - 자바스크립트 기초
- [X] 자동차는 이름을 상태로 가질 수 있다.
- [X] 자동차는 위치 값을 가지며, 초기 상태는 0이다.
- [X] 자동차는 전진할 수 있으며 한 번에 1만큼 전진한다.

### 3단계 - 콘솔 기반 핵심 기능 구현
- [X] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [X] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [X] 자동차 경주는 5회로 고정하여 진행한다.
- [X] 자동차는 1회당 1칸씩 전진한다
- [X] 회차를 거듭할 때마다 자동차가 지나간 궤적을 출력한다(실행 예시 참고).
- [X] 사용자가 잘못된 입력 값을 작성한 경우 프로그램을 종료한다.

### 4단계 - 자동차 경주 게임 규칙 추가
- [X] 전진 횟수를 입력 받는다.
- [X] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- [X] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [X] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [X] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

### 5단계 - 리팩터링
- [X] 도메인 로직은 domain/ 하위로, UI 관련 로직은 view/ 하위에서 관리한다.
- [X] domain/ 하위의 모듈은 view/ 하위의 모듈을 의존하지 않아야 한다.
- [X] 도메인 로직 내에서 테스트하기 어려운 부분을 분리하고, 테스트 가능한 부분에 대해서만 단위 테스트를 작성한다.
- [X] 테스트 코드에서 jest.fn()을 사용하지 않는다.