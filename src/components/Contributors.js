import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

function Contributors() {
  return (
    <>
      <div id="contributors" className="contributors">
        <Container>
          <h2 className="title text-center">Our Contributors</h2>
          <div class="d-flex flex-wrap justify-content-center">
           

            {/*-- Miles --*/}
            <div className="contributor-large">
              <div className="front">
                <div className="contributor-image">
                <img
                  className="default-image"
                  alt="contributor"
                  src={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=Auburn&facialHairType=BeardMajestic&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=Blue02&eyeType=Squint&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Light'}
                ></img>
                </div>
                <div className="contributor-bio">
                  <h6><span className="highlight-underline-primary">Miles</span></h6>
                  <p>Economist, founder.
                  </p>
                </div>
              </div>
              <div className="back">
                <div className="contributor-image">
                  <img
                      className="default-image"
                    alt="contributor"
                    src={require("assets/img/miles_in_front_of_church.jpg")}
                  ></img>
                </div>
                <div className="contributor-bio">
                  <h6>Founder</h6>
                  <p> Founding CTO at <a href="https://www.creditsights.com">CreditSights</a>. 
                    (recently acquired). Founding CTO at <a href="https://chatterize.com">Chatterize</a>. AI lead at <a href="http://papareo.nz">papareo.nz</a>.
                  </p>
                  <Button
                  className="btn-icon btn-round"
                  color="primary"
                  href="https://linkedin.com/in/milesthompson"
                  target = "_blank" 
                  rel = "noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </Button>
                </div>
              </div>
            </div>



            <div className="contributor-large">
              <div className="front">
                <div className="contributor-image">
                  <img
                    alt="contributor"
                    src={require("assets/img/avataaars-karen.svg")}
                  ></img>
                </div>
                <div className="contributor-bio">
                  <h6><span className="highlight-underline-primary">Karen</span></h6>
                  <p>Lead Designer</p>
                </div>
              </div>
              <div className="back">
              <div className="contributor-image">
                <img
                  alt="contributor"
                  src={require("assets/img/karen_lo.jpg")}
                ></img>
              </div>
              <div className="contributor-bio">
                <h6>UX Design</h6>
                <p>Full-Stack UX & Product Designer · Consultant · UX · UI · Systems/Platforms Design</p>
                <Button
                  className="btn-icon btn-round"
                  color="primary"
                  href="https://linkedin.com/in/lokaren"
                  target = "_blank" 
                  rel = "noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </Button>
              </div>
              </div>
            </div>


            {/*-- Dean --*/}
            <div className="contributor-large">
              <div className="front">
                <div className="contributor-image">
                <img
                    className="default-image"
                  alt="contributor"
                  src={'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription02&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=PastelRed&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Brown'}
                ></img>
                </div>
                <div className="contributor-bio">
                  <h6><span className="highlight-underline-primary">Dean</span></h6>
                  <p>Community Engagement
                  </p>
                </div>
              </div>
              <div className="back">
                <div className="contributor-image">
                  <img
                    className="default-image"
                  alt="contributor"
                  src={'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription02&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=PastelRed&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Brown'}
                ></img>
                </div>
                <div className="contributor-bio">
                  <h6>Dean</h6>
                  <p>Developer and leader for community timebanks in Christchurch, NZ
                  </p>
                </div>
              </div>
            </div>




            <div className="contributor-large">
              <div className="front">
                <div className="contributor-image">
                  <img
                    className="default-image"
                  alt="contributor"
                  src={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=BeardMajestic&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'}
                ></img>
                </div>
                <div className="contributor-bio">
                  <h6><span className="highlight-underline-primary">Ari</span></h6>
                  <p>Mathematician &amp; cryptographer</p>
                </div>
              </div>
              <div className="back">
                <div className="contributor-image">
                  <img
                    className="default-image"
                  alt="contributor"
                  src={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=BeardMajestic&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'}
                ></img>
                </div>
                <div className="contributor-bio">
                  <h6>Ari Rodriguez</h6>
                  <p>Mathematician &amp; cryptographer, leader in homomorphic encryption and block chain developer.</p>
                </div>
              </div>
            </div>
            


            <div className="contributor-large">
              <div className="front">
                <div className="contributor-image">
                  <img
                    className="default-image"
                    alt="contributor"
                    src={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Sunglasses&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Light'}
                  ></img>
                </div>
                <div className="contributor-bio">
                  <h6><span className="highlight-underline-primary">Luandro</span></h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className="back">
                <div className="contributor-image">
                  <img
                    className="default-image"
                    alt="contributor"
                    src={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Sunglasses&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Light'}
                  ></img>
                </div>
                <div className="contributor-bio">
                  <h6>Luandro</h6>
                  <p>Hello!</p>
                </div>
              </div>
            </div>


            <div className="contributor-small">
              <div className="contributor-image">
                <img
                  className="default-image"
                  alt="contributor"
                  src={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Wayfarers&hairColor=Blonde&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Pizza&eyeType=Side&eyebrowType=AngryNatural&mouthType=Smile&skinColor=Light'}
                ></img>
              </div>
              <div className="contributor-bio">
                <h6><span className="highlight-underline-primary">Name</span></h6>
                <p>Short bio</p>
              </div>
            </div>

            {/*
            <div className="contributor-small">
              <div className="contributor-image">
                <img
                  className="default-image"
                  alt="contributor"
                  src={'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Wayfarers&hairColor=Blue&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Diamond&eyeType=Dizzy&eyebrowType=Default&mouthType=Serious&skinColor=Tanned'}
                ></img>
              </div>
              <div className="contributor-bio">
                <h6><span className="highlight-underline-primary">Name</span></h6>
                <p>Short bio</p>
              </div>
            </div>*/}


          </div>
          <h5 className="mt-3 text-center">Advisors</h5>
         

          <div class="d-flex flex-wrap justify-content-center">
            <div className="contributor-small">
              <div className="contributor-image">
                <img
                  className="default-image"
                  alt="contributor"
                  src={'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Prescription02&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Angry&mouthType=Smile&skinColor=Light'}
                ></img>
                </div>
              <div className="contributor-bio">
                <h6>
                  <span className="highlight-underline-primary">Linc Gasking</span>
                </h6>
                <p>30 years serial entrepreneur.{/* First startup acquired by 
                        DreamWorks in 2000. Founded Volumetric industry as CEO 
                        of multi-million dollar <a href="https://8i.com/">8i</a>. Award-winning photographer.
                        Emmy Award finalist. Co-founded Women Without Borders.*/}
</p>
                </div>
            </div>
          </div>
{/*
 <div class="d-flex flex-wrap justify-content-center">
            <div className="contributor-small">
              <div className="contributor-image">
                <img
                  className="default-image"
                  alt="contributor"
                  src={'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Prescription02&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Angry&mouthType=Smile&skinColor=Light'}
                ></img>
                </div>
              <div className="contributor-bio">
                <h6>
                  <span className="highlight-underline-primary">Grahah Munro</span>
                </h6>
                <p>Community Currency expert.
</p>
                </div>
            </div>
          </div>*/}

        </Container>
      </div>
    </>
  );
}

export default Contributors;


