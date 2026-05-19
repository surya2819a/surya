import { useState } from "react"


const ArrayLoopMap = () => {

    const[data,setData]= useState([
                    {img:"https://www.google.com/imgres?q=tomato&imgurl=https%3A%2F%2Fsource.washu.edu%2Fapp%2Fuploads%2F2015%2F11%2FTomato250-1.jpg&imgrefurl=https%3A%2F%2Fsource.washu.edu%2F2015%2F11%2Ftomatoes-get-boost-in-growth-antioxidants-from-nanosized-nutrients%2F&docid=KElLje5aFUGZ3M&tbnid=j4a6mf7nN539ZM&vet=12ahUKEwi60KySo5KUAxWCcmwGHbXnBbIQnPAOegQIFBAB..i&w=600&h=600&hcb=2&ved=2ahUKEwi60KySo5KUAxWCcmwGHbXnBbIQnPAOegQIFBAB",productName:"Tomato",productPrice:"200",productCat:"veg",},
                    {img:"https://www.google.com/imgres?q=carrot%20images&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1598170845058-32b9d6a5da37%3Ffm%3Djpg%26q%3D60%26w%3D3000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcarrot&docid=6bud9zds7liseM&tbnid=QU44WrQhNcn5_M&vet=12ahUKEwjd3_eMpJKUAxVsUGwGHdLfAOYQnPAOegQIExAB..i&w=3000&h=4500&hcb=2&ved=2ahUKEwjd3_eMpJKUAxVsUGwGHdLfAOYQnPAOegQIExAB",productName:"Carrot",productPrice:"100",productCat:"veg",},
                    {img:"https://www.google.com/imgres?q=apple%20images&imgurl=https%3A%2F%2Fimages.everydayhealth.com%2Fimages%2Fdiet-nutrition%2Fapples-101-about-1440x810.jpg%3Fw%3D508&imgrefurl=https%3A%2F%2Fwww.everydayhealth.com%2Fdiet-nutrition%2Fapples-benefits-weight-loss-potential-side-effects-and-more%2F&docid=nkBETU2d5eZzdM&tbnid=ybheH579WGZQPM&vet=12ahUKEwjqoObKpJKUAxXlTmwGHZIdGUMQnPAOegQIJRAB..i&w=508&h=286&hcb=2&ved=2ahUKEwjqoObKpJKUAxXlTmwGHZIdGUMQnPAOegQIJRAB",productName:"Apple",productPrice:"150",productCat:"Fruits",}])

    


  return (
    <div className="bg-violet-300 p-10 h-100 flex gap-10">
        <button className="bg-blue-800 text-white p-1 rounded w-40">show Products</button>


        {data.map((e,i)=>(
        <div className="bg-white p-2 rounded w-50 h-50" key={i}>
            <img src={e.img} alt="" />
            <h1>{e.productName}</h1>
            <p>{e.productPrice}</p>
            <p>{e.productCat}</p>
            <button className="bg-black text-white p-1 rounded w-30">Buy Now</button>
        </div>

    ))}

    </div>
  )
}
export default ArrayLoopMap