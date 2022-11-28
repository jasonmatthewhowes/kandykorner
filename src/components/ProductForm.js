import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
const [newProduct, setNewProduct] = useState({
    name: "",
    type:"",
    price: ""
    
})

const navigate = useNavigate()
const localKandyUser = localStorage.getItem("kandy_user")
const kandyUserObject = JSON.parse(localKandyUser)

const handleSaveButtonClick = (event) => {
    event.preventDefault()

    const productToSendToAPI = {
        name: newProduct.name,
        type: newProduct.type,
        price: newProduct.price

    }
    
    return fetch(`http://localhost:8088/products`, {
        method: "POST",
        headers: {"Content-Type":"application/json"
    },
    body: JSON.stringify(productToSendToAPI)
    })
    .then(response => response.json())
    .then(() => {
        navigate("/products")
    })

}
return (
    <form className="createproducts">
        <h2 className="createproducts__title">Create New Product</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="productname">Candy Name:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="type the name of the candy"
                    value={newProduct.name}
                    //runs when the input is modified
                    onChange={
                        (evt) => {
                            //create a copy of the existing state of the ticket, which is just an empty object
                            const copy = {...newProduct}
                            //takes the evt parameter of the onChange event and sets the value of the description to be what was inputed by the user
                            copy.name = evt.target.value
                          setNewProduct(copy) 
                        }

                    } />
                <label htmlFor="productprice">Price:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="enter the sale price"
                    value={newProduct.price}
                    //runs when the input is modified
                    onChange={
                        (evt) => {
                            //create a copy of the existing state of the ticket, which is just an empty object
                            const copy = {...newProduct}
                            //takes the evt parameter of the onChange event and sets the value of the description to be what was inputed by the user
                            copy.price = evt.target.value
                          setNewProduct(copy) 
                        }

                    } />
                <label htmlFor="producttype">Candy Type:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="enter the candy category (ie chocolate, sour)"
                    value={newProduct.type}
                    //runs when the input is modified
                    onChange={
                        (evt) => {
                            //create a copy of the existing state of the ticket, which is just an empty object
                            const copy = {...newProduct}
                            //takes the evt parameter of the onChange event and sets the value of the description to be what was inputed by the user
                            copy.type = evt.target.value
                          setNewProduct(copy) 
                        }

                    } />
            </div>
        </fieldset>
        <button
        //handleSaveButton defined above but essentially creeates an object from the inpit data and then sends a post fetch to the API
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary">
            Submit Product
        </button>
        
    </form>
)

}