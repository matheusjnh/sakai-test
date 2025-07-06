'use client';
import { Button } from 'primereact/button';
import { useState } from 'react';

const Home = () => {
    const [contador, setContador] = useState(5);

    return (
        <div>
            <h1>Hello, world!</h1>

            <h2>Counter: {contador}</h2>

            <Button
                label="Contador"
                onClick={() => {
                    setContador((valAnterior) => valAnterior + 1);
                }}
            />
        </div>
    );
};

export default Home;
