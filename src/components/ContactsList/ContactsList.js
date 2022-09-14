import styled from "styled-components";
import { PropTypes } from "prop-types";
export const ContactsList = ({ data,onClick }) => {

  return <StyledUl>
    {data?.map(item => { 
      const { name, phone,id } = item;
        return <StyledContainer key={id} ><li>{name}<p>{phone}</p>
       </li><button type="button" onClick={()=>onClick(id)}>delete</button></StyledContainer>
    })}
          
  </StyledUl>
}
const StyledUl = styled.ul`
display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 0;

`
const StyledContainer=styled.div`
    display:flex;
    align-items: center;
    padding :10px ;
    flex-direction: column;
    text-align: center;
    width: 300px;
    height: 100%;
    margin: 10px;
    border: 20px;
    border-radius: 15px;
    &:hover{
    background-color: rgba(129,52,175,1);
    }
    `
ContactsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
  createdAt:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone:PropTypes.string.isRequired
  })),
  onClick:PropTypes.func.isRequired
    }