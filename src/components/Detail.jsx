import React, { useEffect, useState } from 'react'
import { details } from '../service/api';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const Contaner = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5vh;
    height: 100vh
`

const Image = styled(Box)`
    height: inherit;
`
const RightDiv = styled(Box)`
    height: inherit;
    width : 50%;
`
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

const Detail = () => {
    const [items, setItems] = useState();
    const { params } = useParams();
    useEffect(() => {
        const random = () => details(params).then(function(result) {
            // console.log(result.data);
            setItems(result.data);
        })
        random();
    }, [])
    const dbDate = items.ended;
    const formattedDate = formatDate(dbDate);
    const premiered = items.premiered;
    const premieredDate = formatDate(premiered);
    console.log(items)
    
  return (
     
    <Contaner>
        {/* {console.log(items)} */}
            <Image>
                <img src={items.image.medium} alt="" />
            </Image>
            <RightDiv>
                <Typography>Name: {items.name}</Typography>
                <Typography>Language: {items.language}</Typography>
                <Typography>Average Run Time: {items.averageRuntime}</Typography>
                <Typography>Ended: {formattedDate}</Typography>
                <Typography>IMDB: {items.externals.imdb}</Typography>
                <Typography>Genres: {items.genres}</Typography>
                <Typography>Premiered: {premieredDate}</Typography>
                <Typography>Summary: {items.summary}</Typography>
            </RightDiv>
    </Contaner>
  )
}

export default Detail