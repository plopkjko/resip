import axios  from 'axios';
import { useEffect, useState } from "react";
import Nav from "./Recipe_components/Nav";
import Banner from "./Recipe_components/Banner";
import List from "./Recipe_components/List";
import Copy from "./Recipe_components/Copy";
import Footer from "./Recipe_components/Footer";

const RecipeApp = () =>{
    
    const[Loading, setLoading] = useState(true);
    const[Error, setError] = useState(false);
    const[Recipes, setRecipes] = useState([]);
    useEffect(() =>{
        makeApiCall()
    },[])

    //make the and get the data for us
    function makeApiCall(){
        axios.get('https://dummyjson.com/recipes')
        .then(function(resp){
            console.log(resp.data.Recipes)
            setLoading(false)
            setRecipes(resp.data.Recipes)
        })
        .catch(function(err){
            console.log(err)
            setLoading(false)
            setError(true)
        })
    }
    return(
        <div className="container-fluid">
            <Nav/>
            <Banner/>
            <List Loading={Loading} Error={Error} Recipes={Recipes}/>
            <Footer/>
            <Copy/>
        </div>
    )
}

export default RecipeApp