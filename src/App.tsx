import { useEffect, useState } from 'react';
import axios from 'redaxios';
import styled from 'styled-components';
import AppViewWrapper from './components/AppViewWrapper/AppViewWrapper';
import ExperienceView from './components/ExperienceView/ExperienceView';
import Header from './components/Header/Header';
import TabBar from './components/TabBar/TabBar';
import { StyledButton } from './globalStyle';

export interface Experience {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [experience, setExperience] = useState<[] | Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeBar, setActiveBar] = useState('TOMMY');

  const fetchExperience = async () => {
    const { data } = await axios.get(url);
    setExperience(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchExperience();
  }, []);

  const callbacks = {
    setActiveBar: (company: string) => setActiveBar(company),
  };

  if (isLoading) {
    return (
      <AppViewWrapper>
        <h1>Loading...</h1>
      </AppViewWrapper>
    );
  }

  return (
    <AppViewWrapper>
      <Header />
      <TabBar
        callbacks={callbacks}
        experience={experience}
        activeBar={activeBar}
      />
      {experience.map((exp) => {
        if (exp.company === activeBar) {
          return <ExperienceView key={exp.id} {...exp} />;
        }
      })}
      <StyledMoreInfoButton>More info</StyledMoreInfoButton>
    </AppViewWrapper>
  );
}

const StyledMoreInfoButton = styled(StyledButton)`
  margin: 3rem auto 0;
  width: 12rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  box-shadow: ${({ theme }) => theme.lightShadow};
  background-color: ${({ theme }) => theme.colors.primaryBlue2};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLightBlue3};
    color: ${({ theme }) => theme.colors.black};
    box-shadow: ${({ theme }) => theme.darkShadow};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-column: 1 / 3;
  }
`;
export default App;
