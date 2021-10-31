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
                <p>Founding CTO at financial research company <a href="https://creditsights.com">CreditSights</a> (<a href="https://www.businesswire.com/news/home/20210114005711/en/Fitch-Group-to-Acquire-CreditSights-Inc.-a-Leading-Provider-of-Independent-Credit-Research" target="_blank">acquired $200m+, 2020</a>). <a href="http://papareo.nz">AI Lead Dev at Papa Reo</a>, an Iwi-led project building AI for indigenous languages. Co-summoner of <a href="http://mutualaid.world">Mutual Aid World project.</a></p>
              }
              bioLinks={
                <>
                  <a href="https://linkedin.com/in/milesthompson" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/utunga" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </>
              }
            />

            <ContributorLarge 
              name="Dean Harliwich"
              title="Coordinator"
              bio={
                <p>Community leader on community timebanks in NZ</p>
              }
              longBio={
                <p>Developer and leader for community timebanks in Christchurch, NZ. Rites-of-passage facilitator, Masters Ecology, end-to-end Wordpress. Listener, learner, joker. Tech enthusiast, perpetual optimist.</p>
              }
              profileUrl={'https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelRed&clotheType=ShirtScoopNeck&eyeType=Happy&eyebrowType=DefaultNatural&facialHairColor=BrownDark&facialHairType=BeardLight&hairColor=Brown&hatColor=Blue03&mouthType=Smile&skinColor=Light&topType=LongHairNotTooLong'}
              bioLinks={
                <>
                  <a href="https://nz.linkedin.com/in/dean-harliwich-ba3a6622" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </>
              }
            />
           
            <ContributorLarge 
              name="Karen Lo"
              title="Designer"
              bio={
                <p>Full-Stack UX &amp; Product Designer</p>
              }
              longBio={
                <p>UX/UI systems/platforms designer who's been jamming for the past 10+ years. Taking things from conception to implementation – from big picture to fine details.</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Side&eyebrowType=Default&mouthType=Twinkle&skinColor=Light'}
              flipProfileUrl={require("assets/img/karen_lo.jpg")}
              bioLinks={
                <>
                  <a href="https://linkedin.com/in/lokaren" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/karenkun" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </>
              }
            />

            <ContributorLarge 
              name="Luandro"
              title="SSB / React developer"
              bio={
                <p>React and ssb developer</p>
              }
              longBio={
                 <p>A distributed developer living deep in Amazon basin and experimenting with distributed tools to support #decolonisation especially for Moinho people in Brazil. Believer in a global Swaraj</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Light'}
              flipProfileUrl={require("assets/img/luandro_200.png")}
              bioLinks={
                <>
                  <a href="https://github.com/luandro" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </>
              }
            />
            
            <ContributorLarge 
              name="Ari Rodriguez"
              title="Cryptographer"
              bio={
                <p>Smart contracts &amp; cryptography</p>
              }
              longBio={
                 <p>Block chain developer &amp; cryptographer, leader in homomorphic encryption and liquidity pooling.</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=BeardMajestic&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'}
              flipProfileUrl={require("assets/img/ari_rodriguez.png")}
              bioLinks={
                <>
                  <a href="https://linkedin.com/in/ari-rodriguez-9b201b33" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/superarius" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </>
              }
            />
            
            <ContributorLarge 
              name="Linc Gasking"
              title="Entrepreneur"
              bio={
                <p>30 years serial entrepreneur.</p>
              }
              longBio={
                 <p>30 years serial entrepreneur. First startup acquired DreamWorks. Founded Volumetric industry as CEO of multi-million dollar <a href="https://8i.com/">8i</a>. Award-winning photographer. Emmy Award finalist. Co-founder Women Without Borders.</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=BlazerShirt&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Pale'}
              flipProfileUrl={require("assets/img/linc_gasking.png")}
              bioLinks={
                <a href="https://www.linkedin.com/in/lincgasking" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              }
            />

            <ContributorLarge 
              name="Graham Munro"
              title="Monetary theorist"
              bio={
                <p>Entrepreneur and monetary theorist.</p>
              }
              longBio={
                 <p>With a background in physics and technology Graham is a serial tech entrepreneur turned monetary theorist and currency design expert.</p>
              }
              profileUrl={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Side&eyebrowType=Default&mouthType=Default&skinColor=Light'}
            />

        </div>
        <div className="d-flex flex-wrap justify-content-center">
   
            <ContributorSmall
              name="Joshua Wu"
              bio={
                <p>Senior react dev</p>
              }
              profileUrl={require("assets/img/avataaars-contributor.svg")}
              oneLink={
                <a href="http://joshuawu.me"  target="_blank">
                  <i className="fa fa-link"></i>
                </a>
              }
            />

            <ContributorSmall
              name="Daniel Huerta"
              bio={
                <p>Project manager</p>
              }
              profileUrl={require("assets/img/avataaars-contributor.svg")}
              oneLink={
                <a href="https://www.linkedin.com/in/daniel-huerta-34868631"  target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              }
            />

            <ContributorSmall
              name="Sarah"
              bio={
                <p>Developer from NZ</p>
              }
              profileUrl={require("assets/img/avataaars-contributor.svg")}
              oneLink={
                <a href="https://github.com/sarah-arrrgh"  target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              }
            />


            <ContributorSmall
              name="Reinor"
              bio={
                <p>Developer from Cuba</p>
              }
              profileUrl={require("assets/img/avataaars-contributor.svg")}
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


