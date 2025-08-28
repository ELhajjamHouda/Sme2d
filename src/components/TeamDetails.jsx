'use client'
import ProgressBar from "@ramonak/react-progress-bar";
const TeamDetails = () => {
  return (
    <div className="team-details-area space">
      <div className="container">
        <div className="single-team-details">
          <div className="team-about-card">
            <div className="row g-lg-0">
              <div className="col-lg-6 align-self-center">
                <div className="team-about-card_box">
                  <h3 className="team-about-card_title">SME2D | Qui sommes-nous </h3>
                  
                  <p>
                    SME2D est spécialisée dans les solutions intégrées pour le traitement des
                     eaux et de l'air, l'automatisation et la gestion des installations. Nous 
                     accompagnons nos clients à chaque étape de leurs projets, de l'étude 
                     technique à l'exploitation, en passant par la conception, la réhabilitation,
                      la fourniture, l'installation et le suivi opérationnel des équipements.
                  </p>
                  {/* <p className="mb-n2">
                    This category focuses on the design and construction of
                    buildings and the This category focuses on the design and
                    construction of buildings
                  </p> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="team-about-card_img">
                  <img
                    className="w-100"
                    src="assets/img/team/team-details.svg"
                    alt="team "
                  />
                </div>
              </div>
              
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
