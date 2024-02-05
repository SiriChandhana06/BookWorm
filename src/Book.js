

function Book(props){
    return(
        <div>
            <div id="book" className="">
            <img id="url" src={props.url}/>
            <h3>{props.bookname}</h3>
            <h4>{props.authorname}</h4>
            <a href={props.src} target="/blank"><button>Read</button></a>
            </div>
        </div>
    )

}
export default Book;