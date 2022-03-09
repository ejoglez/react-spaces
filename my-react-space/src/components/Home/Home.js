import React,{useState,useEffect} from "react";
import Search from "./Search";
import ShowNews from "./ShowNews";
import Article from "./Article";
import "./Home.css"

function Home(){

    const [news, setNews]= useState([])
    const [search, setSearch]=useState("")

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6939209d994449da9e9960174d61bf29`)
        .then(r=> r.json() )
        .then(d=> setNews(d.articles) )
    },[])

    const chosenPresent = news.filter(el=>(
        el.title.toLowerCase().includes(search.toLowerCase() )
    ))

    const present = chosenPresent.map(el=>(
        <Article 
        title={el.title} 
        url={el.url} 
        urlToImage={el.urlToImage} 
        name={el.source.name} 
        author={el.author} 
        description={el.description}
        />
    ))

    return (
        <>
            <Search search={search} setSearch={setSearch} />
                <div className="artContainer">
                    <ShowNews present={present}/>
                </div>
        </>
    )
}

export default Home;

//api key 6939209d994449da9e9960174d61bf29
//https://newsapi.org/