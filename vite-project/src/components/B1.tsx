import { useState } from "react";

export default function B1() {
    const [name, setName] = useState<string>("Nguyễn Quang Vinh");
    console.log(setName);
    return (
        <div>
            <h4>Bài 1: {name}</h4>
        </div>
    );
}