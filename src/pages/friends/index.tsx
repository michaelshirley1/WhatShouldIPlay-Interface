import React, { useState, useEffect } from 'react';
import {
  Button
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import type { FriendData } from './model';
import { getFriends } from './api';

import "./style.scss"

export const Friends: React.FC = () => {
    const [searchParams] = useSearchParams();
    const steamID = searchParams.get('steamID');
    const [friends, setFriends] = useState<FriendData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const frienddata = await getFriends(steamID as string);
            setFriends(frienddata);
            setLoading(false);
        };
        fetchData();
    }, [steamID])

    return (
        <div className="friends-wrapper">
            {loading ? (
                <img className="friends-loading" src="./images/Untitled.gif"/>
            ) : (
            <div className="friends-content">
                <div className="friends-list">
                    {friends.map((friend) => (
                        <div className={`friend-item ${friend.personastate === 1 ? 'friend-item-active' : friend.personastate === 2 ? 'friend-item-away' : 'friend-item-offline'}`}>
                            <div className="friend-avatar">
                                <img src={friend.avatarmedium}></img>
                            </div>
                            <div className="friend-name">
                                <text>{friend.personaname.toUpperCase()}</text>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="friends-message" >
                    <text>
                        {`
                            Playing Alone?
                            Or With Friends?`
                        }
                    </text>
                </div>
                <div className="friends-button">
                    <Button variant="contained" color="primary">Alone</Button>
                </div>
            </div>
            )}
        </div>
    );
}