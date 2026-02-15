import React, { useState, useCallback } from 'react';
import {
  Button
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useNavigate } from 'react-router-dom';

import "./style.scss"

export const Home: React.FC = () => {
    const navigate = useNavigate()
    const [steamID, setSteamID] = useState<string>('');

    const onClick = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(`/friends?steamID=${steamID}`);
    }, [steamID]);

    return (
        <div className="intro-wrapper">
            <div className="intro-spacer">
                <div className="intro-text">
                    <p>Please Enter Your</p>
                </div>
                <div className="intro-input-wrapper">
                    <FormControl className="intro-form-control" variant="outlined">
                        <InputLabel className="intro-input" htmlFor="outlined-adornment-password">Steam ID</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            className="intro-input"
                            type={'text'}
                            label="Steam ID"
                            value={steamID}
                            onChange={e => setSteamID(e.target.value)}
                        />
                    </FormControl>
                </div>
            </div>
            <form>
                <Button className="intro-button" onClick={onClick} type="submit">
                    <DoubleArrowIcon className="intro-icon" />
                </Button>
            </form>
        </div>
    );
}