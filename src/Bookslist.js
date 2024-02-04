import Book from "./Book";

function Bookslist(){
    let Bookslist = [
        {id:1,bookname:"The Buried Giant",authorname:"Kazuo Ishiguro",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk36LVLF2hFV6FkZG70u5BLqTM4K7JbM-ooGP_CHxYZxk4GF0"},
        {id:2,bookname:"The Fifth Season",authorname:"N.K.Jemisin",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxioAERqQmt5lQytLuiYi8IFq64wmR3q4WE5v0vPUA-XtIsSiI"},
        {id:3,bookname:"A Wizard of Earthsea",authorname:"Ursula K.Le Guin",url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQu_0mqdwmI736SM0UbX6If_BiG_SdzMkyP7U1hWS08Ku7z8_tA"},
        {id:4,bookname:"A Game of Thrones",authorname:"George R.R.Martin",url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRE6r9PS-LWAL9BLF_CEuWDF6pWlzMr6wH5KM_-PplALg297f2A"},
        {id:5,bookname:"Fourth Wing",authorname:"Rebecca Yarros",url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMGygN6vmJYLi9nkL769kQfNDg3kt-zfrb1AQRkAnvtiUysGdh"},
        {id:6,bookname:"Northern Lights",authorname:"Philip Pullman",url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_ftYzaIJ4Cbcq95I0QEjLBRKmIraVQxb9BAkq6Ju7muqIHU90"},
        // {id:7,bookname:"Tigana",authorname:"Guy Gavriel Kay",url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQjAo_iIwmdt-v7yX9JBSJbdLAXUbr8I7yEYwgFMZ7iGXEMoER"}
        
        
    ]
    return(
    <div id="bl" className="p-10">
        {
            Bookslist.map((booklist)=>{
                return(
                    <Book bookname={booklist.bookname} authorname={booklist.authorname} url={booklist.url} key={booklist.id}/>
                )
            })
        }

    </div>
    )
}
export default Bookslist;