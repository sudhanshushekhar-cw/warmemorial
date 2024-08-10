import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Bricks } from './Bricks';
import { TfiMenuAlt } from "react-icons/tfi";
import { GET_WARRIOR_BY_WARID } from "../api/api_list";
import axios from 'axios';

export const Memorial = (props) => {
    const { war_id } = useParams(); // Correctly retrieve war_id using useParams
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Correct URL construction for POST request
                const response = await axios.post(GET_WARRIOR_BY_WARID, { war_id });
                // Update state with fetched data
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [war_id]); // Dependency array to refetch data if war_id changes

    return (
        <div id='memorial-wall'>
            <Bricks data={data} war_id={war_id} /> {/* Pass data to Bricks component if needed */}
        </div>
    );
};
