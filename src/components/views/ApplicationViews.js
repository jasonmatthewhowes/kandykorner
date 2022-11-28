import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../LocationsList"
import { ProductForm } from "../ProductForm"
import { ProductList } from "../ProductList"
export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Get some sugar from your hooker</div>
						
                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationsList /> } />
                <Route path="products" element={ <ProductList /> } />
                <Route path="createproducts" element={ <ProductForm /> } />
                

            </Route> 
        </Routes>
    )
	
}
