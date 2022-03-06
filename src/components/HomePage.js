import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function HomePage({ register }) {
    const [posts, setPosts] = useState([]);

    const url = BASE_URL;

    useEffect(function () {
        async function getPosts() {
            try {
                const response = await axios.get(url);
                console.log("response", response);
                setPosts(response.data);

            }   catch(error) {
                console.log(error);
            }
        }
        getPosts();
    }, []);

    return(
        <>
        <h3>Pokemon cards</h3>
        {posts.map(function (post) {
            return <div className="pokemoncards" key={post.id}>
                <h3>{post.name}</h3>
                <img className="pokeimage" alt="pokemon" src={post.imageUrl}/>
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