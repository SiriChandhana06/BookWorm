import Book from "./Book";

function Thriller(){
    let Thriller = [
        {id:1,bookname:"The Girl on the Train",authorname:"Paula Hawkins",url:"https://upload.wikimedia.org/wikipedia/en/5/50/The_Girl_On_The_Train_%28US_cover_2015%29.png", src:"https://bayanebartar.org/file-dl/library/story/The_Girl_on_the_Train_-_Paula_Hawkins.pdf"},
        {id:2,bookname:"Girl in Room 105",authorname:"Chetan Bhagat",url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROAdMD08qYJH6jz7rniD1DS1oAAuSHVDMH_XpZR3NES9WoUh66", src:"https://www.bookamaze.com/pdfupload/1169.pdf"},
        {id:3,bookname:"The Shining",authorname:"Stephen King",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_-CV4k0qUBAveSa4brbKsfgTHT9eaYDppEnjhpEB8AyH9hSi", src:"https://archive.org/details/the-shining-by-stephen-king-1977/The-Shining/mode/2up?view=theater"},
        {id:4,bookname:"The Fury",authorname:"Alex Michaelides",url:"https://celadonbooks.com/wp-content/uploads/2023/05/TheFury-light-use-this-one-copy-min.jpeg", src:"https://www.google.co.in/books/edition/The_Fury/F5O7EAAAQBAJ?hl=en&gbpv=1&printsec=frontcover"},
        {id:5,bookname:"The Family Upstairs",authorname:"Lisa Jewell",url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_KupwpDrCaZWnZpP1fNfwSbRLaTq6xAfSOamHFcXCkCd5wIK_", src:"https://www.google.co.in/books/edition/The_Family_Upstairs/n920DwAAQBAJ?hl=en&gbpv=1&printsec=frontcover"},
        {id:6,bookname:"Stillhouse Lake",authorname:"Rachel Caine",url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIOKw88z9JRlPpBiNOv_kpr195Iv4FouAbSg0pc9XTCraI4VK3", src:"https://bookreadfree.com/all/13017"},
        // {id:7,bookname:"Tigana",authorname:"Guy Gavriel Kay",url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQjAo_iIwmdt-v7yX9JBSJbdLAXUbr8I7yEYwgFMZ7iGXEMoER"}
        
        
    ]
    return(
    <div id="bl" className="p-10">
        {
            Thriller.map((thriller)=>{
                return(
                    <Book bookname={thriller.bookname} authorname={thriller.authorname} url={thriller.url} src={thriller.src} key={thriller.id}/>
                )
            })
        }

    </div>
    )
}
export default Thriller;