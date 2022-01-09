# 리액트 스터디 Todo 프로젝트

## Start

---

### 제공 라이브러리

- dayjs
- react
- react-dom
- react-scripts
- uuid

### 프로젝트 세팅

#### 기본 라이브러리 설치

```sh
npm install
```

#### 개발환경 시작

```sh
npm start
```

## Summary

---

### Todo 타입

구현해야 할 Todo의 타입 형태는 아래와 같습니다.

```ts
//todo interface
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}
```

### 요구 사항

1. todolist에 새로운 todo를 추가할 수 있어야 합니다.
   - todo를 추가할 때 추가한 시점도 같이 저장해서 ui에 띄워야 합니다. (dayjs 라이브러리 참고)
   - todo를 추가할 때 id는 uuid를 사용해서 난수 id를 저장해야 합니다. (uuid 라이브러리 참고)
2. todo항목을 클릭하면 완료상태를 바꿀 수 있어야 합니다.
3. filter기능을 제공해서 모든 todo, 진행중인 todo, 완료된 todo를 볼 수 있어야 합니다.
4. localStorage에 추가되거나 수정된 todolist를 저장하여 새로고침하거나 재접속 해도 사용자가 기록된 list를 볼 수 있어야 합니다.
5. input type **color**를 활용해서 background의 배경을 수정할 수 있는 기능을 추가해야 합니다. (해당 기능은 todo와 연관된건 아니지만 나중에 진행하게 될 **렌더링 최적화**를 위해 추가했습니다.)

### 선택 요구 사항

1. todo 삭제 기능 추가.
2. 배경 color를 수정할 때 해당 color도 localStorage에 저장해서 새로고침할 때 보여주기.
3. 2번 요구사항에 throttle 혹은 debounce 기능을 적용해서 color를 수정할 때마다 localStorage에 저장하는 과정을 최소화하기.
4. 선택한 filter도 localStorage에 저장해서 새로고침할 때 해당 filter로 보여주기.

## 과제 수행방식

1. master를 자신의 저장소로 fork합니다.
2. fork한 저장소로 가서 해당 저장소를 url을 복사한 후 자신의 폴더에 clone합니다.
3. 생성된 폴더에서 위의 프로젝트 세팅을 수행합니다.
4. 개발이 완료된 프로젝트를 fork한 자신의 저장소에 push 합니다. (commit은 프로젝트가 끝나고 한번에 하기보다는 기능을 수정, 구현할 때마다 작은 단위로 쪼개서 지속적으로 commit 해주시길 권장 드립니다.)
5. push한 저장소에서 pull request를 제 저장소의 branch로 요청합니다. (branch 이름은 각자 이름의 성으로 하나씩 만들었으니 거기로 pull request 부탁드립니다!)
