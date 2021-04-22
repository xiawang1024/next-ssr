export const Title = (props) => {
    
    

    const clickHandler = (item) => {
        console.log(item)
    }
    return <div>
        {props.list.map(item => <h1 onClick={() => clickHandler(item)} key={item.id}>{item.title}</h1>)}
    </div>
}