import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function FetchCategory(){

    const [categories,setcategory] = useState([])
    const [filterdata,setfilterdata] = useState([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])

    const handlecategory = async () =>{

        let response = await fetch('https://fakestoreapi.com/products/categories')
        let data =await response.json()
        setcategory(data)

    }

    useEffect(() =>{
        handlecategory()
    },[])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])
    
    const handlefiltercategory = async(data) =>{

       let response = await fetch(`https://fakestoreapi.com/products/category/${data}`)

       let data2 = await response.json()
       setfilterdata(data2)
  
    }

    

    return(
        <div>
            <h1>
                Fetching
            </h1>
            <div style={{display:'flex',flexDirection:'row',gap:100 }}>
            {
                categories.map((data) =>{
                    
                   return <button onClick={() =>handlefiltercategory(data)}>{data}</button>
                  
                })
            }
             </div>

            <div style={{display:'grid',gridTemplateColumns:"400px 400px 400px"}}>
                {
                    filterdata.map((data) =>{
                        return(
                            <Link to="/productdetails" state={{id:data.id}}>
                        <div >
                            <p>{data.category}</p>
                            <p>{data.id}</p>
                            <img src={data.image} style={{width:"200px",height:"200px"}}/>
                            <p>{data.title}</p>
                            <p>{data.description}</p>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default FetchCategory