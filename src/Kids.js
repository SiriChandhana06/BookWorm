import Book from "./Book";

function Kids(){
    let Kids = [
        {id:1,bookname:"The Lightning Thief",authorname:"Rick Riordan",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4yu3C7zKYinl7YqJWBytsI79QN8P9ouoKalqEvweVWKvH4Jb", src:"https://ia601608.us.archive.org/14/items/pdfy-vJFcaYG7Xau9y5ZZ/01_The_Lightning_Thief.pdf"},
        {id:2,bookname:"Harry Potter",authorname:"J.K.Rowling",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1", src:"https://kalyankrishna4886.files.wordpress.com/2013/09/harry-potter-book-collection-1-4.pdf"},
        {id:3,bookname:"The Blue Umbrella",authorname:"Ruskin Bond",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIzgkf_W0P_OjJ26XvXefnr0bwEbke5A41P2C_ohXpZ3ntqev", src:"https://www.ssgopalganj.in/online/E-Books/CLASS%20VII/The%20Blue%20Umbrella%20by%20Ruskin%20Bond.pdf"},
        {id:4,bookname:"Charlotte's Web",authorname:"E.B.White",url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWVj98u4ls8GNBUUjOzayEXXm060-vy8duTZzNQsDAGEg9tHvb", src:"https://archive.org/details/CharlottesWeb/mode/2up?view=theater"},
        {id:5,bookname:"Spy School",authorname:"Stuart Gibbs",url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMDbPMOnyaAmdLIJS_nQlrIsnQaABeIrKWsLVD_REggWco9JSv", src:"https://archive.org/details/spyschool0000gibb/mode/2up?view=theater"},
        {id:6,bookname:"Simon Sort of Says",authorname:"Erin Bow",url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHYLoujAWMeW1s1DXBBdk1FXYSTBAKPtCOdOIAjJ5NsXDWJnLy", src:"https://www.google.co.in/books/edition/Simon_Sort_of_Says/aIPaEAAAQBAJ?hl=en&gbpv=1&printsec=frontcover"},
        // {id:7,bookname:"Tigana",authorname:"Guy Gavriel Kay",url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQjAo_iIwmdt-v7yX9JBSJbdLAXUbr8I7yEYwgFMZ7iGXEMoER"}
        
        
    ]
    return(
    <div id="bl" className="p-10">
        {
            Kids.map((kids)=>{
                return(
                    <Book bookname={kids.bookname} authorname={kids.authorname} url={kids.url} src={kids.src} key={kids.id}/>
                )
            })
        }

    </div>
    )
}
export default Kids;