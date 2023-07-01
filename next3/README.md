# Nextjs 신버전

1. npx create-next-app@latest '폴더명'

2. 최신버전의 기본 라우팅 방식은 app 폴더 하위에 라우팅 할 폴더와 그 내부에 page.tsx가 있어야 기본 라우팅 설정이 되며, 2depth까지 라우팅 하려면 생성된 폴더에 추가로 라우팅 될 폴더와 그 내부에 page.tsx가 있어야 한다...

3. useRouter는 client side에서만 작동하며 변경된 import 방식은 아래와 같다.
- import { useRouter } from 'next/navigation';