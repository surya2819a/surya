import { useEffect, useState } from "react"


const Users = () => {

const [fetchData,setFetchData] = useState([])

useEffect(()=>{
    const fetchUser = async()=>{

    const getData = await fetch("https://dummyjson.com/users")
    const changeData = await getData.json()

    console.log(changeData);
    setFetchData(changeData.users)

}

fetchUser()
},[])



  return (
   <>
   <table border={2}>
     <thead>
        <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>phone</th>
        </tr>
     </thead>
     <tbody>
        {fetchData.map((e)=>(
            <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.firstName}</td>
            <td>{e.phone}</td>
        </tr>
        ))}
     </tbody>
   </table>
   </>
  )
}

export default Users