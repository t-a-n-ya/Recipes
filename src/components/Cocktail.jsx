import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Navbar from './Navbar';

function Cocktail() {
    const cocktails = ['Beer', 'Whisky', 'Rum', 'Brandy', 'Wine', 'Vodka', 'Tequila', 'Sake', 'Gin', 'Punch']
    const [cocktail, setcocktail] = useState('Beer')
    const [cocktaildescription, setcocktaildescription] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b54b5f04afmsh0b1190d16ea1fb7p144f72jsnabda31af8611',
            'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com'
        }
    };
    useEffect(() => {
        fetch('https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=' + cocktail, options)
            .then(response => response.json())
            .then(response => {
                setcocktaildescription(response)
            }).catch(err => console.error(err));
    }, [cocktail])

    const handleChange = (event) => {
        setcocktail(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div className='cocktail'>
                <FormControl fullWidth style={{ marginTop: "80px" }}>
                    <InputLabel id="demo-simple-select-label">cocktail</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cocktail}
                        label="cocktail"
                        onChange={handleChange}
                    >
                        {cocktails.map((item) => {
                            return <MenuItem value={item}><strong>{item}</strong></MenuItem>
                        })
                        }
                    </Select>
                </FormControl>
                {cocktaildescription &&
                    cocktaildescription.map((item) => {
                        return (
                            <div className='cocktail-box'>
                                <h2 style={{ color: "#bababa", textAlign: "center", textDecoration: "underline" }}><strong>{item.name}</strong></h2>
                                <div>
                                    <h3 style={{ color: '#635e4c' }}>Ingredients:-</h3>
                                    {
                                        item.ingredients?.map((ingredient) => {
                                            return (
                                                <>
                                                    <p style={{ color: "#5c677D", marginLeft: "50px" }}>{ingredient}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    <h3 style={{ color: '#635e4c' }}>Instructions:-</h3>
                                    <p style={{ color: "#5c677D", marginLeft: "50px" }}>{item.instructions}</p>
                                </div>

                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default Cocktail