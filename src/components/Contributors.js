import React from 'react';
import ContributorLarge from './ContributorLarge.js'
import ContributorSmall from './ContributorSmall.js'

// reactstrap components
import {
  Container
} from "reactstrap";

function Contributors() {
  return (
    <>
      <div id="contributors" className="contributors">
        <Container>
          <h2 className="title text-center">Contributors</h2>
          <div className="d-flex flex-wrap justify-content-center">

            <ContributorLarge 
              name="Miles Thompson"
              title="Summoner"
              bio={
                  <p>Mathematician, sociologist, programmer.</p>
              }
              profileUrl={"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=BeardMajestic&facialHairColor=BlondeGolden&clotheType=BlazerShirt&eyeType=Side&eyebrowType=Default&mouthType=Smile&skinColor=Light"}
              flipProfileUrl={require("assets/img/miles_in_front_of_church.jpg")}
              longBio={
                 <p>Founding CTO at NY financial research company CreditSights, acquired 2020, and AI startup Chatterize, seed round 2020. AI Lead Dev at <a href="http://papareo.nz">Papa Reo</a>. In 2020, co-founder of <a href="http://mutualaid.world">Mutual Aid World</a> project.</p>
              }
            />

            <ContributorLarge 
              name="Karen Lo"
              title="Lead Designer"
              bio={
                <p>Full-Stack UX & Product Designer</p>
              }
              longBio={
                 <p>Full-Stack UX & Product Designer · Consultant · UX · UI · Systems/Platforms Design</p>
              }
              profileUrl={require("assets/img/avataaars-karen.svg")}
              flipProfileUrl={require("assets/img/karen_lo.jpg")}
            />
            
            <ContributorLarge 
              name="Dean"
              title="Coordinator"
              bio={
                <p>Community leader on community timebanks in NZ</p>
              }
              longBio={
                 <p>Developer and leader for community timebanks in Christchurch, NZ. Rites-of-passage facilitator, Masters Ecology, end-to-end Wordpress. Listener, learner, joker. Tech enthusiast, perpetual optimist.</p>
              }
              profileUrl='https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelRed&clotheType=ShirtScoopNeck&eyeType=Happy&eyebrowType=DefaultNatural&facialHairColor=BrownDark&facialHairType=BeardLight&hairColor=Brown&hatColor=Blue03&mouthType=Smile&skinColor=Light&topType=LongHairNotTooLong'
            />
           
            <ContributorLarge 
              name="Linc Gasking"
              bio={
                <p>30 years serial entrepreneur.</p>
              }
              longBio={
                 <p>30 years serial entrepreneur. First startup acquired DreamWorks. Founded Volumetric industry as CEO of multi-million dollar <a href="https://8i.com/">8i</a>. Award-winning photographer. Emmy Award finalist. Co-founder Women Without Borders.</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=BlazerShirt&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Pale'}
            />
            
            <ContributorLarge 
              name="Ari Rodriguez"
              title="Cryptographer"
              bio={
                <p>Mathematician &amp; cryptographer</p>
              }
              longBio={
                 <p>Mathematician &amp; cryptographer, leader in homomorphic encryption and block chain developer.</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=BeardMajestic&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'}
            />

            <ContributorLarge 
              name="Graham Munro"
              bio={
                <p>Currency expert.</p>
              }
              longBio={
                 <p>Community Currency expert. Crypto pioneer.</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Side&eyebrowType=Default&mouthType=Default&skinColor=Light'}
            />

            <ContributorLarge 
              name="Luandro"
              title="Ssb developer"
              bio={
                <p>React and ssb developer</p>
              }
              longBio={
                 <p>Developer experimenting with distributed tools for the purpose of #decolonisation from Moinho people Brazil. Believer in a global Swaraj.</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Light'}
            />

        </div>
        <div className="d-flex flex-wrap justify-content-center">
   
            <ContributorSmall
              name="Joshua Wu"
              bio={
                <p>Senior react dev</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Cumbia&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'}
            />

            <ContributorSmall
              name="Daniel Huerta"
              bio={
                <p>Project manager</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Cumbia&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'}
            />

            <ContributorSmall
              name="Sarah"
              bio={
                <p>Developer from NZ</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Cumbia&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'}
            />


            <ContributorSmall
              name="Reinor"
              bio={
                <p>Developer from Cuba</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Cumbia&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'}
            />


          </div>
          {/*<h5 className="mt-3 text-center">Key Advisors and/or Investors </h5>
          <div className="d-flex flex-wrap justify-content-center">

           -- Put advisors and investors here --

          </div>*/}

        </Container>
      </div>
    </>
  );
}

export default Contributors;


