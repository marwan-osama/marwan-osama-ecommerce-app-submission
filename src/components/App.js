import { Component } from "react";
import ProductListing from "./ProductListing";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import { CartProvider } from "../context/CartContext";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import FilterContext, { FilterProvider } from "../context/FilterContext";
import WithRouter from "./HOCs/WithRouter";

class App extends Component {
	render() {
		return (
			<FilterProvider>
				<CartProvider>
					<header>
						<WithRouter WrappedComponent={Navbar} />
					</header>
					<main>
						<Routes>
							<Route
								exact
								path="/"
								element={
									<FilterContext.Consumer>
										{(filterContext) => (
											<ProductListing
												filterContext={filterContext}
												categories={this.categories}
											/>
										)}
									</FilterContext.Consumer>
								}
							/>
							<Route exact path="/cart" element={<Cart />} />
							<Route
								exact
								path="/product/:id"
								element={<WithRouter WrappedComponent={ProductDetails} />}
							/>
						</Routes>
					</main>
				</CartProvider>
			</FilterProvider>
		);
	}
}

export default App;