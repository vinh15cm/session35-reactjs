import { useState } from "react";

export default function B3() {
    const [stutus, setStatus] = useState<boolean>(false);
    const hanldChange = () => {
        setStatus(!stutus);
    };
    return (
        <div>
            <h4 style={{ color: stutus == true ? "red" : "black" }}>Bài 3</h4>
            <button onClick={hanldChange}>Thay đổi màu</button>
        </div>
    );
}