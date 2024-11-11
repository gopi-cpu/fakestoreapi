import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import Productdetails from "./productdetails"


const Category = () =>{

    const [category,setcategory] = useState([])
    const [filtercategory,setfiltercategory] = useState([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(json=>console.log(json))
    },[])

    const handlecategories = async () =>{

        let response = await fetch('https://fakestoreapi.com/products/categories')

        let data = await response.json()
        setcategory(data)
    }

    useEffect(() =>{
        handlecategories()
    },[])

    const handleselectCategory = async (data) =>{
        let response = await fetch(`https://fakestoreapi.com/products/category/${data}`)
        let data2 = await response.json()
        
        setfiltercategory(data2)
        console.log(data2)
    }

    return(
        <div>
            <h1>Category Fields</h1>
            <div style={{display:'flex',flexDirection:'row',gap:50}}>
            {
                category.map((data,index) =>{
                    return(
                       
                        <div key={index}>
                        <button onClick={() =>handleselectCategory(data)}>{data}</button>
                        </div>
                       
                    )
                })
            }
                 </div>
              
               <div style={{display:'grid',gridTemplateColumns:"300px 300px 300px",gap:200}}>
                    {
                        filtercategory.map((item,index) =>{
                            return(
                                <Link to="/productdetails" state={{id:item.id}} >

                                <div key={index}>
                                    <h4>{item.category}</h4>
                                    <img src={item.image}  style={{width:'300px',height:'300px'}}/>
                                    <p style={{fontWeight:'bold',color:'blue',fontSize:30}}>Price <span>{item.price}</span></p>
                                    <div style={{display:'flex',gap:80}}>

                                    <p style={{fontWeight:'bold',color:'red'}}>Rating {item.rating.rate}</p>

                                    <p>Count {item.rating.count}</p>
                                    </div>
                                    <p style={{width:"300px"}}>{item.description}</p>
                                   
                                </div></Link>
                            )
                        })
                    }
                </div> 
                        <div>

                            
                        </div>
            </div>
    )
}

export default Category