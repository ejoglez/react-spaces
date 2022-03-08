import React,{useState,useEffect} from "react";
import Search from "./Search";
import ShowNews from "./ShowNews";
import "./Home.css"

function Home(){

    const [news, setNews]= useState([])
    const [search, setSearch]=useState("")

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6939209d994449da9e9960174d61bf29`)
        .then(r=> r.json() )
        .then(d=> setNews(d.articles) )
    },[])
//title
const chosenPresent= news.filter(el=>(
    el.title.toLowerCase().includes(search.toLowerCase() )
))

    const present=chosenPresent.map(el=>(
       
       <div className="newsArtkill" key={el.title}>
            
        <h2><stron>{el.title}</stron></h2>
        <a href={el.url}> 
        <img  src={el.urlToImage} alt="editoral pic"/> 
        </a>
        <h4><em>{el.source.name}</em></h4>
        <br></br>
        <p>by: {el.author}</p>
        <p>{el.description}</p>

        <br></br>
        </div>
    ))

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            
            <div className="artContainer">
            <ShowNews present={present}/>
            </div>
        </div>
    )
}

export default Home;

//api key 6939209d994449da9e9960174d61bf29
//https://newsapi.org/