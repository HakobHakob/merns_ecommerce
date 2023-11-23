import styled from "styled-components"

const mainStyle = `
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SpanMainStyle = styled.span`
  ${mainStyle}
`

export const DivMainStyle = styled.div`
  ${mainStyle}
`
export const NavMainStyle = styled.nav`
  ${mainStyle}
`

export const NavBar = styled(NavMainStyle)`
  height: 70px;
  background-color: grey;
  justify-content: space-between;
  padding: 0 4rem;
`

export const NavBarHeading = styled.h2`
  font-size: 40px;
`

export const NavBag = styled(DivMainStyle)`
  gap: 5px;
`

export const BagSpan = styled(SpanMainStyle)`
  width: 35px;
  height: 35px;
`

export const BagQuantitySpan = styled(SpanMainStyle)`
  height: 25px;
  width: 25px;
  background-color: yellow;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 700;
  color: black;
`
