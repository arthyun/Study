// -> /movies/[id]
// router를 콘솔에 찍어보면 query -> id 값이 바로 URL에 넣은 id값이 온다.

import { useRouter } from "next/router";

export default function Detail(){
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h4>{router.query.title || 'Loading...'}</h4>
        </div>
    )
}