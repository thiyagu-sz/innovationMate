/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Profile Image API (Placeholder)
const randomProfileImage = (seed) => `https://randomuser.me/api/portraits/lego/${seed}.jpg`;

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
    { name: "college", align: "center" },
    { name: "rating", align: "center" }, // New rating column
    { name: "expert on", align: "left" },
    { name: "status", align: "center" },
    { name: "cabin number", align: "center" },
    { name: "meeting", align: "center" },
  ],

  rows: [
    {
      guide: <Guide image={randomProfileImage(1)} name="Alex Johnson" email="alex.johnson@example.com" />,
      college: (
        <SoftTypography variant="caption" color="secondary">
          Stanford University
        </SoftTypography>
      ),
      rating: (
        <SoftTypography variant="caption" color="secondary">
          ★★★★★
        </SoftTypography>
      ),
      "expert on": <ExpertOn job="Artificial Intelligence" org="Research" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Bldg 1, Room 101
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
      guide: <Guide image={randomProfileImage(2)} name="Maria Smith" email="maria.smith@example.com" />,
      college: (
        <SoftTypography variant="caption" color="secondary">
          Harvard University
        </SoftTypography>
      ),
      rating: (
        <SoftTypography variant="caption" color="secondary">
          ★★★★☆
        </SoftTypography>
      ),
      "expert on": <ExpertOn job="Data Science" org="Lecturer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Bldg 2, Room 202
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
      guide: <Guide image={randomProfileImage(3)} name="John Doe" email="john.doe@example.com" />,
      college: (
        <SoftTypography variant="caption" color="secondary">
          MIT
        </SoftTypography>
      ),
      rating: (
        <SoftTypography variant="caption" color="secondary">
          ★★★☆☆
        </SoftTypography>
      ),
      "expert on": <ExpertOn job="Quantum Computing" org="Scientist" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Bldg 3, Room 303
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
      guide: <Guide image={randomProfileImage(4)} name="Jane Roe" email="jane.roe@example.com" />,
      college: (
        <SoftTypography variant="caption" color="secondary">
          University of Oxford
        </SoftTypography>
      ),
      rating: (
        <SoftTypography variant="caption" color="secondary">
          ★★★★★
        </SoftTypography>
      ),
      "expert on": <ExpertOn job="Blockchain Technology" org="Consultant" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      "cabin number": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Bldg 4, Room 404
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
