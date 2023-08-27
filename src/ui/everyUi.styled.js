import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const primaryColor = '#4B0082'; // Indigo color
const secondaryColor = '#FFA500'; // Orange color
const backgroundColor = '#F0F0F0'; // Light gray background
const textColor = '#555'; // Dark gray text color

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const CastImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${backgroundColor};
`;

const CastMemberName = styled.h3`
  font-size: 18px;
  margin: 8px 0;
  color: ${primaryColor};
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CommentatorName = styled.h3`
  font-size: 24px;
  margin-bottom: 4px;
  color: ${primaryColor};
`;

const CommentatorComment = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${textColor};
`;

const Btn = styled.button`
  background-color: ${secondaryColor};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${primaryColor};
  }
`;

const HeaderEl = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  color: white;
  padding: 20px;
  text-align: center;
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
`;

const MainText = styled.h1`
  font-size: 42px;
  color: ${primaryColor};
  margin-bottom: 10px;
`;

const SecondaryText = styled.h2`
  font-size: 32px;
  color: ${secondaryColor};
`;

const UserScored = styled.p`
  color: ${({ score }) => {
    if (score > 76) return 'green';
    if (score >= 50 && score <= 75) return 'orange';
    return 'red';
  }};
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: ${textColor};
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${primaryColor};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${secondaryColor};
  }
`;
const NewFeature = styled.div`
  width: 150px; /* Initial width */
  background-color: ${secondaryColor};
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover{
    width: 200px; /* New width on hover and active */
    background-color: ${primaryColor}; /* New color on hover and active */
  }
`;


const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

export {
  Img,
  CastImg,
  Btn,
  HeaderEl,
  List,
  ListItem,
  MainText,
  SecondaryText,
  Paragraph,
  Input,
  Container,
  StyledNavLink,
  UserScored,
  CastList,
  CastMemberName,
  CommentContainer,
  CommentatorName,
  CommentatorComment,
  NewFeature,
};
