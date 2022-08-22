/* eslint-disable testing-library/no-debugging-utils */

import { MockedProvider } from "@apollo/react-testing";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

// The component AND the query need to be exported
import NavBar from "../components/NavBar";
import Missions from "../components/Missions/Missions";

import { GET_SPACE_MISSION } from "../graphql/queries";

export const mocks = [
  {
    request: {
      query: GET_SPACE_MISSION,
      variables: {
        limit: 10,
      },
    },
    result: {
      data: {
        launchesPast: [
          {
            mission_name: "Starlink-15 (v1.0)",
            launch_site: {
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            rocket: {
              rocket_name: "Falcon 9",
            },
            ships: [
              {
                name: "GO Ms Tree",
                image: "https://i.imgur.com/MtEgYbY.jpg",
              },
              {
                name: "GO Ms Chief",
                image: "https://imgur.com/NHsx95l.jpg",
              },
              {
                name: "Just Read The Instructions 2",
                image: "https://i.imgur.com/7VMC0Gn.jpg",
              },
              {
                name: "GO Quest",
                image: "https://i.imgur.com/ABXtHKa.jpg",
              },
            ],
            launch_date_local: "2020-10-24T11:31:00-04:00",
          },
          {
            mission_name: "Sentinel-6 Michael Freilich",
            launch_site: {
              site_name_long:
                "Vandenberg Air Force Base Space Launch Complex 4E",
            },
            rocket: {
              rocket_name: "Falcon 9",
            },
            ships: [],
            launch_date_local: "2020-11-21T09:17:00-08:00",
          },
          {
            mission_name: "Crew-1",
            launch_site: {
              site_name_long:
                "Kennedy Space Center Historic Launch Complex 39A",
            },
            rocket: {
              rocket_name: "Falcon 9",
            },
            ships: [
              {
                name: "Of Course I Still Love You",
                image: "https://i.imgur.com/28dCx6G.jpg",
              },
            ],
            launch_date_local: "2020-11-15T19:27:00-05:00",
          },
          {
            mission_name: "GPS III SV04 (Sacagawea)",
            launch_site: {
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            rocket: {
              rocket_name: "Falcon 9",
            },
            ships: [
              {
                name: "Of Course I Still Love You",
                image: "https://i.imgur.com/28dCx6G.jpg",
              },
              {
                name: "GO Quest",
                image: "https://i.imgur.com/ABXtHKa.jpg",
              },
              {
                name: "HAWK",
                image: "https://i.imgur.com/hGWWupT.jpg",
              },
            ],
            launch_date_local: "2020-11-05T18:24:00-05:00",
          },
          {
            mission_name: "Starlink-14 (v1.0)",
            launch_site: {
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            rocket: {
              rocket_name: "Falcon 9",
            },
            ships: [
              {
                name: "GO Ms Tree",
                image: "https://i.imgur.com/MtEgYbY.jpg",
              },
              {
                name: "GO Ms Chief",
                image: "https://imgur.com/NHsx95l.jpg",
              },
              {
                name: "Just Read The Instructions 2",
                image: "https://i.imgur.com/7VMC0Gn.jpg",
              },
              {
                name: "GO Quest",
                image: "https://i.imgur.com/ABXtHKa.jpg",
              },
            ],
            launch_date_local: "2020-10-24T11:31:00-04:00",
          },
          {
            mission_name: "Starlink-13 (v1.0)",
            launch_site: {
              site_name_long:
                "Kennedy Space Center Historic Launch Complex 39A",
            },
            rocket: {
              rocket_name: "Falcon 9",
            },
            ships: [
              {
                name: "GO Ms Tree",
                image: "https://i.imgur.com/MtEgYbY.jpg",
              },
              {
                name: "GO Ms Chief",
                image: "https://imgur.com/NHsx95l.jpg",
              },
              {
                name: "Of Course I Still Love You",
                image: "https://i.imgur.com/28dCx6G.jpg",
              },
              {
                name: "GO Quest",
                image: "https://i.imgur.com/ABXtHKa.jpg",
              },
            ],
            launch_date_local: "2020-10-18T08:25:00-04:00",
          },
          {
            mission_name: "Starlink-12 (v1.0)",
            launch_site: {
              site_name_long:
                "Kennedy Space Center Historic Launch Complex 39A",
            },
            rocket: {
              rocket_name: "Falcon 9",
            },
            ships: [
              {
                name: "GO Quest",
                image: "https://i.imgur.com/ABXtHKa.jpg",
              },
              {
                name: "Of Course I Still Love You",
                image: "https://i.imgur.com/28dCx6G.jpg",
              },
              {
                name: "GO Ms Chief",
                image: "https://imgur.com/NHsx95l.jpg",
              },
              {
                name: "GO Ms Tree",
                image: "https://i.imgur.com/MtEgYbY.jpg",
              },
            ],
            launch_date_local: "2020-10-06T07:29:00-04:00",
          },
          {
            mission_name: "Starlink-11 (v1.0)",
            launch_site: {
              site_name_long:
                "Kennedy Space Center Historic Launch Complex 39A",
            },
            rocket: {
              rocket_name: "Falcon 9",
            },
            ships: [
              {
                name: "GO Ms Tree",
                image: "https://i.imgur.com/MtEgYbY.jpg",
              },
              {
                name: "GO Quest",
                image: "https://i.imgur.com/ABXtHKa.jpg",
              },
            ],
            launch_date_local: "2020-09-03T08:46:00-04:00",
          },
          {
            mission_name: "SAOCOM 1B, GNOMES-1, Tyvak-0172",
            launch_site: {
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            rocket: {
              rocket_name: "Falcon 9",
            },
            ships: [
              {
                name: "GO Ms Chief",
                image: "https://imgur.com/NHsx95l.jpg",
              },
            ],
            launch_date_local: "2020-08-30T19:18:00-04:00",
          },
          {
            mission_name: "Starlink-10 (v1.0) & SkySat 19-21",
            launch_site: {
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            rocket: {
              rocket_name: "Falcon 9",
            },
            ships: [
              {
                name: "GO Ms Tree",
                image: "https://i.imgur.com/MtEgYbY.jpg",
              },
              {
                name: "GO Ms Chief",
                image: "https://imgur.com/NHsx95l.jpg",
              },
              {
                name: "Of Course I Still Love You",
                image: "https://i.imgur.com/28dCx6G.jpg",
              },
              {
                name: "GO Quest",
                image: "https://i.imgur.com/ABXtHKa.jpg",
              },
            ],
            launch_date_local: "2020-08-18T10:31:00-04:00",
          },
        ],
      },
    },
  },
];

describe("Navigation Bar", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NavBar />
      </MockedProvider>
    );
    expect(await screen.findByText("Sort By: Launch Date")).toBeInTheDocument();
  });

  it("renders a navigation bar on load", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NavBar />
      </MockedProvider>
    );
    const navigation = screen.getByTestId("navigation-bar");
    expect(navigation).toBeInTheDocument();
  });

  it("renders misson cards on load", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Missions data={[]} missionFilter={""} sort={false} />
      </MockedProvider>
    );
    const mission = screen.getByTestId("mission-cards");
    expect(mission).toBeInTheDocument();
  });
});
