
import { useEffect, useState } from "react"
import Secondcomponent from "./second"
import Thirdcomponent from "./thirdcomponent"


function Firstcomponent() {

    const [data,setdata] = useState("firstname")
    const [cards,setcards] = useState([])   

    const [originaldata,setoriginaldata] = useState([
        {
        category:"mens clothing",
        description:'dis',
        id:"1",
        image:"",
        prics:""
        },

         {
            category:"mens clothing",
            description:'dis',
            id:"1",
            image:"",
            prics:""
        },
    
    {
        category:"mens clothing",
        description:'dis',
        id:"1",
        image:"",
        prics:""
    },{
        category:"mens clothing",
        description:'dis',
        id:"1",
        image:"",
        prics:""
    },{},{},{}])  











    
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])

    const handleapi = async() =>{
        
        let response = await fetch('https://fakestoreapi.com/products')

        let finaldata = await response.json()

        setcards(finaldata)

        console.log('my logic')

        console.log(finaldata)

    }

    useEffect(() =>{
        handleapi()
    },[])

    return(
        <div>

            <h1>First component</h1>

                <button onClick={() =>setdata("secondname")}>{data}</button>
                <div className="row">
                {
                    cards.map((data) =>{
                        return(
                            <div className="bg-success col">   
                                <h1 >{data.category}</h1>
                                <p>{data.description}</p>
                                <p>{data.id}</p>
                                <img  src={data.image}  style={{width:"100px"}}/>
                                <p className="text-primary"> Price: {data.price}</p>
                                <p >{data.rating.rate}</p>
                                <p>{data.rating.count}</p>
                                <p>{data.title}</p>
                                </div>
                        )
                    })
                }
                </div>
          
        </div>

    )
}

export default Firstcomponent
