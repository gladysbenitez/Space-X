import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

import { LaunchesPast } from "../../types/types";
import { mergeSort } from "helpers/helpers";

interface ICustomComponentProps {
  data: LaunchesPast[];
  missionFilter: string;
  sort: boolean;
}

export default function Missions(props: ICustomComponentProps) {
  const { data, missionFilter, sort } = props;
  const dataCopy = [...data];
  const missions =
    missionFilter === ""
      ? dataCopy
      : data.filter(
          (x) =>
            missionFilter ===
            x.launch_site.site_name_long.split(" ").slice(0, 2).join(" ")
        );
  const sortedMissions = sort === false ? missions : mergeSort(missions);

  return (
    <MDBContainer
      data-testid="mission-cards"
      style={{
        backgroundColor: "black",
        margin: "auto",
        padding: "15px",
        maxWidth: "920px",
        alignContent: "center",
      }}
    >
      <MDBRow>
        {sortedMissions &&
          sortedMissions.map(
            (item: LaunchesPast, index: React.Key | null | undefined) => (
              <>
                <MDBCard
                  background="dark"
                  border="white"
                  key={index}
                  style={{
                    maxWidth: "22rem",
                    maxHeight: "24rem",
                    margin: "2rem",
                  }}
                >
                  <MDBCardTitle
                    key={index}
                    style={{ color: "white", paddingTop: "10px" }}
                  >
                    Mission: {item.mission_name}
                  </MDBCardTitle>
                  <MDBCardImage
                    key={index}
                    src={
                      item && item.ships[0] && item.ships[0].image
                        ? item.ships[0].image
                        : "https://www.universetoday.com/wp-content/uploads/2011/03/IMG_4650a_STS-133_Ken-Kremer.jpg"
                    }
                    position="top"
                    height={"40%"}
                    alt={item.mission_name}
                  />
                  <MDBCardBody key={index}>
                    <MDBCardText key={index} style={{ color: "white" }}>
                      Launch Site: {item.launch_site.site_name_long}
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter key={index} className="text-muted">
                    Date: {item.launch_date_local}
                  </MDBCardFooter>
                </MDBCard>
              </>
            )
          )}
      </MDBRow>
    </MDBContainer>
  );
}
