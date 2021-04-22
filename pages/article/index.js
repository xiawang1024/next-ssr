import axios from 'axios'
import { useState } from "react";


function NewsList({ list }) {
  
  const [page,setPage] = useState(1)
  const [articles, setArticles] = useState(list);

  async function loadData() {
    setPage(page+1)
    const res = await fetch(`https://www.fastmock.site/mock/51560081c48b3d7a64bceb48ad4d2ab9/api/api/list?page=${page}`)
    const { data:{list} } = await res.json()
    setArticles([...articles,...list])
  }
  return <div>
    {articles && articles.map(item => <h2 key={item.title}>{item.title}</h2>)}
    <button onClick={loadData
    }>加载更多</button>
  </div>
}

export async function getStaticProps() {
  const res = await fetch(`https://www.fastmock.site/mock/51560081c48b3d7a64bceb48ad4d2ab9/api/api/list`)
  const { data:{list} } = await res.json()

  return {
    props:{
      list
    },
    revalidate: 10,
  }
}

export default NewsList