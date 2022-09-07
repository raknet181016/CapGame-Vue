<template>
    <button><slot></slot></button>
</template>

<style>
    button{
    background-color: var(--light-blue-color); 
    border: none;
    color: white;
    padding: 10px 16px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
}

button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: #4CAF50; /* Green */
    color: white;
}
</style>