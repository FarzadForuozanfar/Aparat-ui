import { memo } from "react";
import LogoImg from "./logo.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  text-align: center;
  img{
    width:130px;
  }
`

const Logo = () => {
  return (
    <LogoContainer>
      <img src={LogoImg} alt="aparat logo"/>
    </LogoContainer>
  )
}

export default memo(Logo)