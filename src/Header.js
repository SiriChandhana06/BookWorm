import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
function Header(){
    const sliderImages = [
        {
           url: "https://c4.wallpaperflare.com/wallpaper/640/366/413/quotes-1920x1080-book-money-wallpaper-preview.jpg",
        },
        {
           url: "https://hips.hearstapps.com/hmg-prod/images/index-11-1652097424.jpg",
        },
        {
           url: "https://www.novelsuspects.com/wp-content/uploads/2021/05/The-Greatest-Psychological-Thriller-and-Suspense-Books-of-All-Time.png",
        },
        {
           url: "https://orion-uploads.openroadmedia.com/lg_6e1f379a40d8-50-best-horror-books_feature.jpg",
        },
        {
           url: "https://www.novelsuspects.com/wp-content/uploads/2022/01/Short-Crime-Fiction-You-Can-Devour-in-One-Sitting_NovelSuspects.png?fit=1200%2C600",
        },
        {
           url: "https://images.contentstack.io/v3/assets/blt64b2de096a6f4663/blt033b30a3e409507e/644815ca7fbb1e0c982fd0e1/popular_romance.png",
        },
        {
           url: "https://hips.hearstapps.com/hmg-prod/images/fantasy-books-1646944171.jpeg",
        },
     ];
    return(
        <div>
            <h3>
            {" "}
         </h3>
         <SimpleImageSlider
            width={1349}
            height={300}
            images={sliderImages}
            showNavs={true}
         />
        </div>
    );
}
export default Header;