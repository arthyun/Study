import React, {useState, useEffect} from "react";

const NowLoading = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // 주의: 빈 deps 배열 []은
    // useEffect가 componentDidMount()처럼
    // 한 번만 실행되는 걸 의미합니다.
    useEffect(() => {
        fetch("./list.json")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(result);
            },
            // 주의: 컴포넌트에 있는 실제 버그로 인해 발생한 예외를
            // 놓치지 않고 처리하기 위해서는
            // catch() 블록보다는 여기서 에러를 다뤄주는 게 중요합니다.
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])
    if(error){
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
        <ul>
            {
            items.map(item => (
                <li key={item.id}>
                    {item.title} {item.desc}
                </li>
            ))
            }
        </ul>
        );
    }
}

export default NowLoading;