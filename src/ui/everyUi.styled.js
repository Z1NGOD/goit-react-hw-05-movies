import styled from '@emotion/styled';

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const CastImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const Btn = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e55050;
  }
`;

const HeaderEl = styled.header`
  display: flex;
  gap: 24px;
  align-items: center;
  background-color: #1f2833;
  color: white;
  padding: 20px;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const MainText = styled.h1`
  font-size: 36px;
  color: white; 
`;

const SecondaryText = styled.h2`
  font-size: 28px;
  color: white; 
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #ff9800; 
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 70%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
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
};
