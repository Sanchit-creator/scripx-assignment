import React, { useEffect, useState } from 'react'
import { details, getItems } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'


const Contaner = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 5vh;
    height: 100%
`
const InputBox = styled(Box)`
    width: 80%;
    display: flex;
    justify-content: space-around;
    height: 100px;
    align-items: center;
    border: 1px solid black;
    background-color: #fbfbfb;
`


const Home = () => {

    const [items, setItems] = useState();
    const { params } = useParams();

    useEffect(() => {
        const random = () => getItems(params).then(function(result) {
            console.log(result.data);
            setItems(result.data);
        })

        random();
    },[])

    const navigate = useNavigate();
    const handleClick = async (data) => {
        navigate(`/tv-shows/details/${data}`); 
        console.log(data);
    }

  return (
    <Contaner>
        {
            items ? items.map((data, key) => (
                <InputBox key={data.show.id} onClick={() => handleClick(data.show.id)}>
                    <Typography>Name: {data.show.name}</Typography>
                    <Typography>Language: {data.show.language}</Typography>
                    <Typography>Genres: {data.show.genres}</Typography>
                    <Typography>Runtime: {data.show.runtime}</Typography>
                    <Typography>Rating: {data.show.rating.average}</Typography>
                </InputBox>
            )) : 'Nothing to show'
        }
        
    </Contaner>
  )
}

export default Home