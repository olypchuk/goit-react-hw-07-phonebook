import styled from "styled-components";
import { PropTypes } from "prop-types";
export const ContactsList = ({ data,onClick }) => {

  return <ul>
    {data.map(item => { 
      const { id, name, number } = item;
        return <StyledContainer key={id} ><li>{name} :{number}
       </li><button type="button" onClick={()=>onClick(id)}>delete</button></StyledContainer>
    })}
          
  </ul>
}
const StyledContainer=styled.div`
    display:flex;
    align-items: center;
    padding :10px ;
    flex-direction: column;
    text-align: center;
    width: 400px;
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
  id:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number:PropTypes.string.isRequired
  })),
  onClick:PropTypes.func.isRequired
    }