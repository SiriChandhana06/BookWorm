import Book from "./Book";

function Humor(){
    let Humor = [
        {id:1,bookname:"Good Omens",authorname:"Neil Gaiman",url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTKqWIaHQ6mDU4bowT3t3o4oVDcjGxvS79AAi9VjBFkkiGXbJ2a",src:"https://archive.org/details/goodomens/mode/2up?view=theater"},
        {id:2,bookname:"Cold Comfort Farm",authorname:"Stella Gibbons",url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6Zx_ZQw-wC_2Z_5KeuXmBSgTnrAmfMITl-MIWFtB7xNc8sLQf",src:"https://archive.org/details/in.ernet.dli.2015.207573/page/n5/mode/2up?view=theater"},
        {id:3,bookname:"The Princess Bride",authorname:"William Goldman",url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyvlpWEJRRrWrGylkf0FQHUTT1gsol7zcmMjfZDwLFNvjAneK3", src:"https://www.scribd.com/document/236247767/2-the-Princess-Bride"},
        {id:4,bookname:"The Sellout",authorname:"Paul Beatty",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6ILuKc0PPlcBqe0l8RMx1VwN7mLH5KDy6HGlPGCKzyIE8MOc", src:"https://www.perlego.com/book/950154/the-sellout-pdf"},
        {id:5,bookname:"A Dirty Job",authorname:"Christopher Moore",url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSlrysxXoNLzEnYiedwcGPXC76jPISyWo1hRsANzY0jkf5JJ2H",src:"https://www.google.co.in/books/edition/A_Dirty_Job/ov5GU5cts9AC?hl=en&gbpv=1&printsec=frontcover"},
        {id:6,bookname:"Wishful Drinking",authorname:"Carrie Fisher",url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTt9G2X39f8NmOjJJpCx1tlqsdZLQn30Gvt9S9fYPb-znLqoHEX", src:"https://d-pdf.com/book/2812/read"},
        // {id:7,bookname:"Tigana",authorname:"Guy Gavriel Kay",url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQjAo_iIwmdt-v7yX9JBSJbdLAXUbr8I7yEYwgFMZ7iGXEMoER"}
        
        
    ]
    return(
    <div id="bl" className="p-10">
        {
            Humor.map((humor)=>{
                return(
                    <Book bookname={humor.bookname} authorname={humor.authorname} url={humor.url} src={humor.src} key={humor.id}/>
                )
            })
        }

    </div>
    )
}
export default Humor;