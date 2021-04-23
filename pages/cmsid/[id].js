
function ArticleList ({title,content}) {
  
 
    return <div>
      <h1>{title}</h1>
      
      <div>
      {content&&content.map(item => <h2 key={item.id}>{item.title}</h2>)}
      </div>
    </div>
}


export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { page: '1' } }, { params: { page: '2' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}


export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://pubmob.dianzhenkeji.com/cms/articles?tenantId=henanradio&channelId=1237216245913358336&pageNo=${params.page}&pageSize=10`)
  const {result:{content}} = await res.json()
  

  // Pass post data to the page via props
  return {
    props: { title:'articleList',content },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  }
}



export default ArticleList