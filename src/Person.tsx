import { useState } from "react";


//Interface is the way to describe a shape of an object
//El interface props declarado previamente, es como cuando declarabamos una lista en c;
//Para usar props en typescript, hay que hacerlo asi (nos ahorrara muchas lineas de codigo)

interface Props{
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country?: Country;
}


//El enum es como cuando se creaba una lista dentro de otra lista con datos; muy importante meterle el export para que en el App.tsx lo podamos implementar
export enum Country{
    Brazil = "Brazil",
    Canada = "Canada",
    France = "France",
}


export const Person = (props: Props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
            {props.friends.map((friend: string) => (
                <h1>{friend}</h1>
            ))}
        </div>
    );
};