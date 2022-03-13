import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { SPEC_URL } from "../constants/api";
import axios from "axios";

export default function CardSpecific() {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let history = useHistory();

    const { id } = useParams();

    if (!id) {
        history.push("/");
    }

    const url = SPEC_URL + id;

    useEffect(function () {
        async function getCard() {
            try {
                const response = await fetch(url);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setCard(json.cards);
            } else {
                setError("An error occured");
            }
    }   catch(error) {
            setError(error.toString());
        } finally {
            setLoading(false);
        }
    }
    getCard();
}, [url]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }
 

 return (
     <>
     {card.map(function (post) {
            return <div className="pokemoncards" key={post.id}>
                <p>Name: {post.name}</p>
                <p>Supertype: {post.supertype}</p>
                <img className="pokeimage" alt="pokemon" src= {post.imageUrl} />
            </div>;
        })}
    
  </>
 );
}

