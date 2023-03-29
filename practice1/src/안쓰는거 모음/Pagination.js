import React, { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지 번호
  const [postsPerPage] = useState(10); //보여질 갯 수

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage; //현재 페이지 * 보여질 페이지
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //10 - 10 = 0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); //0번 부터 10번까지 출력해라

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Page numbers
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++){
    pageNumbers.push(i);
  }

  //검색용 state
  const [search, setSearch] = useState('');
  const onClick = () => {
    if(search === ''){
      alert('error!')
    } else {
      // setPosts( posts.filter((el) => el.title.includes(search)) );
      // console.log(typeof search)
      setPosts( posts.filter((el) => el.id !== Number(search)) );
    }
  }


  return (
    <div>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='숫자만 입력하세요' />
      <button onClick={onClick}>검색</button>

      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx='true'>
        {`
          .pagination {
            list-style: none;
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

export default PostList;