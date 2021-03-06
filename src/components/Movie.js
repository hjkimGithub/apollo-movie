import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

const LIKE_MOVIE = gql `
  mutation likeMovie($id: Int!, $isLiked: Boolean!) {
    likeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

function Movie({ id, bg, isLiked }) {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
      variables: {id: parseInt(id), isLiked}
  });
  return (
    <Container>
        <Link to={`/${id}`}>
            <Poster bg={bg} />
    </Link> 
    <button onClick={likeMovie}> {isLiked ? "❤️‍🔥" : "💔"} </button>
    </Container>
  );
}

export default Movie;