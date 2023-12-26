import styled from "styled-components";
import "@fontsource-variable/figtree";

function App() {
  return (
    <Container>
      <Flex>
        <Img src="./images/illustration-article.svg" alt="Image" />
        <Title>Learning</Title>
        <ContainerDate>Published 26 Dec 2023</ContainerDate>
        <Heading href="!#">HTML & CSS foundations</Heading>
        <Paragarph>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </Paragarph>
        <Group>
          <Avatar src="./images/image-avatar.webp" alt="Avatar Image" />
          <AvatarName>Greg Hooper</AvatarName>
        </Group>
      </Flex>
    </Container>
  );
}

export default App;

const Container = styled.main`
  background-color: hsl(47, 88%, 63%);
  height: 100dvb;
  display: grid;
  place-items: center;
`;

const Flex = styled.div`
  width: 365px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;
  border-width: 1px;
  border-color: hsl(0, 0%, 7%);
  border-style: solid;
  padding: 18px;
  box-shadow: 10px 10px 0 hsl(0, 0%, 7%);
  transition-duration: 50ms;

  &:hover {
    box-shadow: 12px 12px 0 hsl(0, 0%, 7%);
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px;
`;

const Title = styled.h4`
  background-color: hsl(47, 88%, 63%);
  display: inline-block;
  padding: 8px;
  border-radius: 4px;
  color: hsl(0, 0%, 7%);
`;

const ContainerDate = styled.div`
  color: hsl(0, 0%, 7%);
`;

const Heading = styled.a`
  color: hsl(0, 0%, 7%);
  font-weight: 800;
  margin-top: 20px;
  display: block;
  font-size: 28px;

  &:hover {
    color: hsl(47, 88%, 63%);
  }
`;

const Paragarph = styled.p`
  color: hsl(0, 0%, 50%);
  font-weight: 600;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  display: block;
  margin-right: 10px;
  width: 40px;
  height: 40px;
`;

const AvatarName = styled.h4`
  font-weight: 600;
  color: hsl(0, 0%, 7%);
`;
