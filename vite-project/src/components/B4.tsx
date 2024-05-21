import { useState } from "react";

export default function B4() {
    const [stutus, setStutus] = useState<boolean>(false);
    const handleClick = () => {
        setStutus(!stutus);
    };
    return (
        <div>
            <h4>{stutus === true ? "Bài 4" : ""}</h4>
            <button onClick={handleClick}>{stutus === true ? "Ẩn" : "Hiện"}</button>
        </div>
    );
}