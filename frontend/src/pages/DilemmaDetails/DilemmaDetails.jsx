// DilemmaDetails.jsx
import { dilemmaData } from "./dilemmaData";
import { experienceData } from "./experienceData";
import DilemmaHeader from "./DilemmaHeader/DilemmaHeader";
import DecisionStats from "./DecisionStats/DecisionStats";
import ExperienceList from "./ExperienceList/ExperienceList";
import CommunityInsight from "./CommunityInsight/CommunityInsight";
import Filters from "./Filters/Filters";
import ResourceSection from "./ResourceSection/ResourceSection";
import "./DilemmaDetails.css";

function DilemmaDetails() {
  return (
    <div className="dilemma-details-page">
      {/* LEFT COLUMN */}
      <div className="dilemma-main">
        <DilemmaHeader
          title={dilemmaData.title}
          breadcrumbs={dilemmaData.breadcrumbs}
          subtitle={dilemmaData.subtitle}
        />
        <DecisionStats stats={dilemmaData.stats} />
        <ExperienceList experiences={experienceData} />
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="dilemma-sidebar">
        <CommunityInsight />
        <Filters />
        <ResourceSection />
      </div>
    </div>
  );
}

export default DilemmaDetails;