import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { GRASS_URL } from "../constants/api";
import CardsItem from "./CardsItem";

export default function GrassPage({ register }) {
    const [posts, setPosts] = useState([]);

    const url = GRASS_URL;

    useEffect(function () {
        async function getPosts() {
            try {
                const response = await axios.get(url);
                console.log("grassresponse", response);
                setPosts(response.data.cards);

            }   catch(error) {
                console.log(error);
            }
        }
        getPosts();
    }, []);

    return(
        <>
        <div className="container">
        <h3>Pokemon cards - GRASS type</h3>
        {posts.map(function (post) {
            return <div className="pokemoncards" key={post.id}>
                <p>Name: {post.name}</p>
                <img className="pokeimage" alt="pokemon" src= {post.imageUrl} />
                <CardsItem key={post.id} id={post.id} title={post.name} types={post.types} image={post.imageUrl}>
                </CardsItem>;
                
            </div>;
        })}
        </div>
        </>
    );
}

GrassPage.propTypes = {
	register: PropTypes.func,
};

GrassPage.defaultProps = {
	register: () => {},
};