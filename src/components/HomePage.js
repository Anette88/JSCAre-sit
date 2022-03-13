import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import CardsItem from "./CardsItem";
import TypeAheadDropDown from "./TypeAheadDropdown";

export default function HomePage({ register }) {
    const [posts, setPosts] = useState([]);

    const url = BASE_URL;

    useEffect(function () {
        async function getPosts() {
            try {
                const response = await axios.get(url);
                console.log("response", response);
                setPosts(response.data.cards);

            }   catch(error) {
                console.log(error);
            }
        }
        getPosts();
    }, []);

    return(
        <>
        <div id="searchdiv">
        {posts.map(function (search) {
            <TypeAheadDropDown items={search.name} />
        }
        )}
        </div>
        
        <h3>Pokemon cards</h3>
        {posts.map(function (post) {
            return <div className="pokemoncards" key={post.id}>
                
                <p>Name: {post.name}</p>
                <img className="pokeimage" alt="pokemon" src= {post.imageUrl} />
                
                <CardsItem key={post.id} id={post.id} title={post.name} types={post.types} image={post.imageUrl}>
                </CardsItem>;
                
            </div>
        })}
        </>
    );
}

HomePage.propTypes = {
	register: PropTypes.func,
};

HomePage.defaultProps = {
	register: () => {},
};