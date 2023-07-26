# RSC TEST

참고 블로그 링크 - https://nyeongnyeong.tistory.com/183

1. npm run eject -> webpack 설정을 위해 파일이 보이게 해준다.

2. 기존 index.js를 index.server.js로 변환 후 코드 작성 -> 상위 블로그 내용 참고

3. config/paths.js을 열고 하단에 두줄 추가 -> 상위 블로그 내용 참고

4. config/webpack.config.server.js 파일 생성 후 장문의 코드 작성 -> 상위 블로그 내용 참고
   / 추가 설치 라이브러리
   / npm install url-loader
   / npm install concurrently
   / npm install react-router-dom
   / npm insatll express

5. npm install webpack-node-externals 후 config/webpack.config.server.js에 코드 작성 -> 상위 블로그 내용 참고

6. config/webpack.config.server.js에 환경변수 추가하기 -> 상위 블로그 내용 참고

7. scripts 폴더에 build.server.js 파일 생성 후 코드 작성 -> 상위 블로그 내용 참고

8. 테스트 명령어 작성 후 실행
   / node scripts/build.server.js
   / node dist/server.js

9. 매번 빌드 후 실행하는 어려움이 있으니 package.json에 스크립트 작성
   / "start:server" : "node dist/server.js",
   / "build:server" : "node scripts/build.server.js"
   / 실행 순서는 build > start 순

10. index.server.js에 Express 서버 생성 코드 작성 -> 상위 블로그 내용 참고

11.
