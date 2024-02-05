import Book from "./Book";

function Romantic(){
    let Romantic = [
        {id:1,bookname:"Outlander",authorname:"Diana Gabaldon",url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfxjtBH7mqNcP4K7PsnCA_eKVkx_uoTVcRMVzYvUTA99pjmugY", src:"https://www.google.co.in/books/edition/Outlander/pb2XFmbA79cC?hl=en&gbpv=1&printsec=frontcover"},
        {id:2,bookname:"The Notebook",authorname:"Nicholas Sparks",url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8cVlhZPFAJ-ldLOSrUrW6Tc2DcGoX4lib6Fiae4oy01T1viwE", src:"https://www.academia.edu/41664631/The_Notebook_by_Nicholas_Sparks"},
        {id:3,bookname:"Seven Days in June",authorname:"Tia Williams",url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRS7qHLiJisoQEjLQ1dzwQeM-NgfZmIWue2JirgmQvXxaui00Y", src:"https://www.google.co.in/books/edition/Seven_Days_in_June/jiAoEAAAQBAJ?hl=en&gbpv=1&printsec=frontcover"},
        {id:4,bookname:"Vision in White",authorname:"Nora Roberts",url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTu0ddhnC1Nj9SY3kbKzQpc2JJ7uHA1Scur4rD6spdjeiqEsx6", src:"https://www.allfreenovel.com/Book/Details/17816/Vision-in-White--Bride-Quartet-1-"},
        {id:5,bookname:"One in a Million",authorname:"Lindsey Kelk",url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSR2S1KLPvLSpt-G_FA20DRQe4SNYdMUdS69-jZytBgOMMYDDKY", src:"https://www.google.co.in/books/edition/One_in_a_Million/z-8nDwAAQBAJ?hl=en&gbpv=1&printsec=frontcover"},
        {id:6,bookname:"Fifty Shades Of Grey",authorname:"E.L.James",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0bVnQ0IKQhEgRBEztVKwbUZSIA_EkQFAvzmDzpfaQxAvrqC_v", src:"https://pdflake.com/wp-content/uploads/2021/11/Fifty-Shades-of-Grey-PDF.pdf"},
        // {id:7,bookname:"Tigana",authorname:"Guy Gavriel Kay",url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQjAo_iIwmdt-v7yX9JBSJbdLAXUbr8I7yEYwgFMZ7iGXEMoER"}
        
        
    ]
    return(
    <div id="bl" className="p-10">
        {
            Romantic.map((romantic)=>{
                return(
                    <Book bookname={romantic.bookname} authorname={romantic.authorname} url={romantic.url} src={romantic.src} key={romantic.id}/>
                )
            })
        }

    </div>
    )
}
export default Romantic;