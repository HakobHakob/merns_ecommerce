import * as Styled from "./Styled"
//Get our all products
import { useGetAllProductsQuery } from "../../Features/ProductsAPI"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addToCart } from "../../Features/CartSlice"

export const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    navigate("/cart")
  }

  return (
    <Styled.HomeContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured ... </p>
      ) : (
        <>
          <Styled.ProductHeading>New Arrivals</Styled.ProductHeading>
          <Styled.ProductsDiv>
            {data?.map((product) => (
              <Styled.ProductDiv key={product.id}>
                <Styled.ProductNameHeading>
                  {product.name}
                </Styled.ProductNameHeading>
                <Styled.ProductImage src={product.image} alt={product.name} />
                <Styled.ProductDetails>
                  <span>{product.desc}</span>
                  <Styled.ProductPrice>${product.price}</Styled.ProductPrice>
                </Styled.ProductDetails>
                <Styled.ProductButton onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </Styled.ProductButton>
              </Styled.ProductDiv>
            ))}
          </Styled.ProductsDiv>
        </>
      )}
    </Styled.HomeContainer>
  )
}
