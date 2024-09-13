/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import spprof from "assets/images/spproof.jpg";
import kar from "assets/images/kar.jpg";
import aru from "assets/images/arun.jpg"
import anbupro from "assets/images/anbu.jpg"
import  anbus from "assets/images/anbus.jpg";
import srmf from "assets/images/srmfac.jpg"
function Guide({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function ExpertOn({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

// Add the rating to the columns array
const guidesTableData = {
  columns: [
    { name: "guide", align: "left" },
    { name: "collage", align: "center" },
    { name: "rating", align: "center" },  // New rating column
    { name: "expert on", align: "left" },
    { name: "status", align: "center" },
    { name: "cabin number", align: "center" },
    { name: "meeting", align: "center" },
  ],

  rows: [
    {
      guide: <Guide image={spprof} name="Shunmuga Perumal" email="shunmugaperumal.p@vit.ac.in" />,
      collage: (
        <SoftTypography variant="caption" color="secondary">
          VIT Vellore
        </SoftTypography>
      ),
      rating: (
        <SoftTypography variant="caption" color="secondary">
          ★★★★★
        </SoftTypography>
      ),  // New rating field
      "expert on": <ExpertOn job="Mobile Applications" org="Development" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          SJT 621
        </SoftTypography>
      ),
      meeting: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Request Meeting
        </SoftTypography>
      ),
    },
    {
      guide: <Guide image={kar} name="Karthikeyan " email="pkarthikeyn@vit@.ac.in" />,
      collage: (
        <SoftTypography variant="caption" color="secondary">
          VIT vellore
        </SoftTypography>
      ),
      rating: (
        <SoftTypography variant="caption" color="secondary">
          ★★★★☆
        </SoftTypography>
      ),  
      "expert on": <ExpertOn job="Data baseManagement" org="Proffecr" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          SRM block7 523
        </SoftTypography>
      ),
      meeting: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Request Meeting
        </SoftTypography>
      ),
    },
    
    {
      guide: <Guide image={srmf} name="Duraisaai" email="duraisaa@srmist.edu.in" />,
      collage: (
        <SoftTypography variant="caption" color="secondary">
          SRM 
        </SoftTypography>
      ),
      rating: (
        <SoftTypography variant="caption" color="secondary">
          ★★★★☆
        </SoftTypography>
      ),  // New rating field
      "expert on": <ExpertOn job="Economist" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          MIT bockQ 445
        </SoftTypography>
      ),
      meeting: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Request Meeting
        </SoftTypography>
      ),
    },
    {
      guide: <Guide image={aru} name="Arun pandian " email="arun pandian.j@vit.ac.in" />,
      collage: (
        <SoftTypography variant="caption" color="secondary">
          VIT vellore
        </SoftTypography>
      ),
      rating: (
        <SoftTypography variant="caption" color="secondary">
          ★★★★★
        </SoftTypography>
      ),  // New rating field
      "expert on": <ExpertOn job="Data Base" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          PRP block 317 E
        </SoftTypography>
      ),
      meeting: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Request Meeting
        </SoftTypography>
      ),
    },
    {
      guide: <Guide image={anbus} name="AnbursuKuamr" email="anbarasakumar.a@vit.ac.in" />,
      collage: (
        <SoftTypography variant="caption" color="secondary">
          VIT  vellore
        </SoftTypography>
      ),
      rating: (
        <SoftTypography variant="caption" color="secondary">
          ★★★☆☆
        </SoftTypography>
      ),  // New rating field
      "expert on": <ExpertOn job="AI & ML" org="Executive" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          SJT 213
        </SoftTypography>
      ),
      meeting: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Request Meeting
        </SoftTypography>
      ),
    },
    {
      guide: <Guide image={anbupro} name="Anduarsu" email="anbarasu.b@vit.ac.in" />,
      collage: (
        <SoftTypography variant="caption" color="secondary">
          VIT vellore
        </SoftTypography>
      ),
      rating: (
        <SoftTypography variant="caption" color="secondary">
          ★★★☆☆
        </SoftTypography>
      ),  // New rating field
      "expert on": <ExpertOn job="Programming in c" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          SJT 212
        </SoftTypography>
      ),
      meeting: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Request Meeting
        </SoftTypography>
      ),
    },
  ],
};

export default guidesTableData;
