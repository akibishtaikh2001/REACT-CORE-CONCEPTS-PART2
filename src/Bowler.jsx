import { useState } from "react"

export default function Bowler() {
    const [ball, addball] = useState(0);
    const [wide, wideball] = useState(0);

    const handelBall = () => {
        const updateBall = ball + 1;
        addball(updateBall);
    }

    const handelWide = () => {
        const updateWideBall = wide + 1;
        wideball(updateWideBall);     
    }



    return (
        <div>
            <h3>Bolwer</h3>
            <p><small>Wide Ball and Extra run: {wide} </small></p>
            {
                 ball >= 6 && <p>Over Done</p>
            }
            <h1>Ball: {ball} </h1>
            <button onClick={handelBall}>Ball</button>
            <button onClick={handelWide}>Wide Ball</button>

        </div>
    )
}