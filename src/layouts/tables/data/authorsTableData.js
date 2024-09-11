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

const guidesTableData = {
  columns: [
    { name: "guide", align: "left" },
    { name: "expert on", align: "left" },
    { name: "status", align: "center" },
    { name: "cabin number", align: "center" },
    { name: "meeting", align: "center" },
  ],

  rows: [
    {
      guide: <Guide image={team4} name="Shunmuga Perumal p"  email="shunmugaperumal.p@vit.ac.in" />,
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
      guide: <Guide image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      "expert on": <ExpertOn job="Web Development" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          SJT 523
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
      guide: <Guide image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      "expert on": <ExpertOn job="Cloud Computing" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          SJT 333
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
      guide: <Guide image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      "expert on": <ExpertOn job="Database Management" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          SJT 445
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
      guide: <Guide image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      "expert on": <ExpertOn job="AI & ML" org="Executive" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          SJT 102
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
      guide: <Guide image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      "expert on": <ExpertOn job="Cybersecurity" org="Developer" />,
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
