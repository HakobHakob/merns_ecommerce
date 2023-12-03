import styled from "styled-components"

export const HomeContainer = styled.div`
  padding: 2rem 4rem;
`

export const ProductHeading = styled.h2`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
`

export const ProductsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 1rem;
`

export const ProductDiv = styled.div`
  width: 250px;
  max-width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    2px 2px 5px rgba(94, 104, 121, 0.3);
`

export const ProductNameHeading = styled.h3`
  font-size: 25px;
  font-weight: 400;
`

export const ProductImage = styled.img`
  width: 80%;
  margin: 1rem auto 0;
`

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductPrice = styled.span`
  font-size: 25px;
  font-weight: 700;
`

export const ProductButton = styled.button`
  width: 100%;
  padding: 15px 40px;
  border-radius: 5px;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #4b70e2;
  color: #FFFFFF;
  letter-spacing: 1.15px;
`
