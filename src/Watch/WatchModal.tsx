import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Watch } from './WatchPage';

export const WatchModal = () => {
    let history = useHistory()

    let back = (e:any) => {
        e.stopPropagation();
        history.goBack();
    };
    return(
        <div onClick={back}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.3)"
            }}
        >
            <div className="modal"
                style={{
                    position: "absolute",
                    top: 80,
                    left: 0,
                    right: 0,
                    width: "60%",
                    margin: "auto",
                    padding: 15,
                    background: "rgba(255, 255, 255, 1)"
                }}
                onClick={(e)=>e.stopPropagation()}
            >
                <Watch />
            </div>
        </div>
    )
}