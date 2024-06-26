import React from 'react'

function Categories() {
    const [categories, setCategories] = React.useState([])

    fetch('https://fakestoreapi.com/products/categories').then((response) => {
        return response.json()
    }).then((res)=> {
        setCategories(res);
        return res;
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })

    return (
        <div>Categories</div>
    )
}

export default Categories