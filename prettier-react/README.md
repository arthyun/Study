# React + Eslint + Prettier

1. npx create-react-app '폴더명'

2. 루트 폴더에 .eslintrc 파일생성 후 { "extends" : "react-app" } 작성

3. npm install --dev prettier-eslint -> prettier와 eslint 설치

4. 커맨드 + 쉼표를 눌러 vscode 설정으로 간 후 setting.json에 아래 내용 추가 후 설정으로 돌아와 default formatter 설정하기

- {
  "editor.formatOnSave": true,
  "javascript.format.enable": false,
  "prettier.eslintIntegration": true
  }

5. .eslintrc에 추가하고 싶으면 하고 안해도됨

- {
  "extends": "react-app",
  "rules": {
  "quotes": ["error", "single", { "avoidEscape": true }],
  "indent": ["error", 2]
  }
  }

6. npm install @tanstack/react-query 리액트 쿼리 설치

7. npm install @tanstack/react-query-devtools 리액트 쿼리 툴 설치

8. index.js에서 queryClient = new QueryClient();

- <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <상태 라이브러리 컴포넌트>
    <App />
    </상태 라이브러리 컴포넌트>
  </QueryClientProvider>  ->  작성

9. React-Query 메소드 사용법
   1. useQuery() -> get
   2. useMutation -> post, update
   3. useMutation.mutate() -> 수정할 객체를 넘길때 사용
   4. QueryCache : new QueryCache() -> 쿼리에 대해 성공, 실패 전처리를 할 수 있습니다.
   5. useQueryClient() -> 전체 쿼리 연결
   6. 객체 전달 시 mutate({전달값})으로 보낸다. -> body로 구분해서 배치
