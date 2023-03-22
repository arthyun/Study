// JWT 토큰을 쿠키에 저장하기
// 1. 패키지 설치 -> npm i js-cookie
import Cookies from 'js-cookie';

// 쿠키 저장하기(7일 뒤 만료)
Cookies.set('name', 'value', { expires: 7 });

// 쿠키 저장하기(7일 뒤 만료) + 현재 경로에서만 확인 가능
Cookies.set('name', 'value', { expires: 7, path: '' })

// 쿠키 가져오기
const value = Cookies.get('name');
console.log(value);

// 쿠키 삭제하기 - path 지정하지 않은 경우
Cookies.remove('name')

// path 지정한 경우 {path: ''} 쿠키가 현재 경로에 있기 때문에 현재 경로에서만 remove 해야함
Cookies.remove('name', {path: ''})