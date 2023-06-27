import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi!<br />
          My Name Is Livya...<br />
          Welcome To <br />
          My Developer Portfolio
        </SectionTitle>
        <SectionText>
         Here I am going to showcase to you all my work as a fullstack developer.
        </SectionText>
        <Button onClick={() => window.location = 'https://www.canva.com/design/DAFnAOGiFWQ/q_fnt_pij7JgiZzGlal8iw/view?utm_content=DAFnAOGiFWQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;