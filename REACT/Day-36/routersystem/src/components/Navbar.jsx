import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="bg-blue-500 p-2 flex justify-between items-center">
        <div>
            Logo
        </div>
        <div className="flex gap-15">
            <Link className="bg-black text-white p-1 rounded-full width-20 text-centre hover:bg-white hover:text-white" to="/">Home</Link>
            <Link className="bg-black text-white p-1 rounded-full width-20 text-centre hover:bg-white hover:text-white" to="/about">About</Link>
            <Link className="bg-black text-white p-1 rounded-full width-20 text-centre hover:bg-white hover:text-white" to="/contact">Contact</Link>

        </div>

    </div> 
    

    
    </>
    


  )
}

export default Navbar