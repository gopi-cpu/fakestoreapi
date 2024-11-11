import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


function Singleproductpage() {

    const location = useLocation()

    const {id}    = location.state || null

    const [product,setproduct] = useState({})

    const handlesingleproduct = async () =>{
        if(id){
            let response = await fetch(`https://fakestoreapi.com/products/${id}`)
            let data = await response.json()
            setproduct(data)
        }
    }

    useEffect(() =>{
        handlesingleproduct()
    },[])

    return(
        <div>
            <h1>Product page</h1>
            <h1>{product.category}</h1>
            <p>{product.id}</p>
            <img src={product.image} style={{width:"200px",height:"200px"}}/>
            <p>{product.title}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default Singleproductpage