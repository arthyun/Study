import Link from 'next/link';

export default function Header() {
    return (
    <header>
        <Link href="/">돌아가기</Link>
        {/* 테마 변환기와 같은 클라이언트 컴포넌트를 여기에 추가하려면 다음과 같이 표시하세요. */}
        {/* 컴포넌트를 "use client"로 설정하고 헤더의 대부분을 RSC로 남겨둡니다. */}
    </header>
    )
}