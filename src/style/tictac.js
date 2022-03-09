import styled from "styled-components";
export const Main = styled.div`
  background: linear-gradient(to bottom, #33cccc 0%, #000066 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;
export const Box = styled.div`
  height: 500px;
  width: 500px;
  gap: 7px;
  display: flex;
  flex-direction: column;
  .delete {
    background: black;
    color: white;
    margin-top: 10px;
    height: 70px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Row = styled.div`
  flex: 40%;
  gap: 7px;
  display: flex;
  flex-direction: row;
`;
export const Items = styled.div`
  flex: 35%;
  height: 100%;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 30px;
  color: white;
  background-color: black;
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-bottom:550px ; */
  padding-left: 0px;
`;
