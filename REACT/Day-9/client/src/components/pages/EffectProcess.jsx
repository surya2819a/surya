import { useState,useEffect} from "react"

const EffectProcess = () =>{

    const[showData,setShowData]=useState([])

     useEffect(()=>{

        const fetchData = async () => {

            const get = await fetch("https://dummyjson.com/todos")
            const changeData = await get.json()
            console.log(changeData)

            setShowData(changeData.todos)
            
        }

        fetchData()

    },[])

  


    return(

        <>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>UserId</th>
                        <th>Action</th>  

                    </tr>
                </thead>
                <tbody>
                {ShowData.map((e)=>(

                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.todo}</td>
                        <td>{e.completed}</td>
                        <td>{e.UserId}</td>
                        <td><button>Edit</button></td>
                    </tr>

                ))}
                
                </tbody>
            </table>
        </div>






        </>
    )
    
    

  
}

export default EffectProcess