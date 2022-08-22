import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
} from "mdb-react-ui-kit";

import SpaceMission from "../graphql";
import { LaunchesPast } from "../types/types";

import SpaceLogo from "../assets/spacex.png";
import "../App.css";
import Missions from "./Missions/Missions";

export default function NavBar() {
  const [data, setData] = useState<LaunchesPast[]>([]);
  const [sort, setSort] = useState<boolean>(false);
  const [missionFilter, setMissionFilter] = useState<string>("");

  const arrayOfSiteNames =
    data &&
    data.map((x) =>
      x.launch_site.site_name_long.split(" ").slice(0, 2).join(" ")
    );
  const siteNamesWithoutDuplicates = [...new Set(arrayOfSiteNames)];

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(10);
    setData(spaceMissions);
  };

  const addMissionFilter = (event: any) => {
    setMissionFilter(event.target.innerHTML);
    setSort(false);
  };

  const resetMissionFilter = (event: any) => {
    setMissionFilter("");
    setSort(false);
  };

  useEffect(() => {
    loadSpaceMission();
  }, []);

  return (
    <>
      <MDBNavbar data-testid="navigation-bar" dark bgColor="dark" expand="lg">
        <img
          onClick={resetMissionFilter}
          style={{ paddingLeft: "10px" }}
          src={SpaceLogo}
          height="10%"
          width="10%"
          alt="logo"
        />
        <MDBContainer
          fluid
          style={{ justifyContent: "center", marginRight: "15%" }}
        >
          <MDBCollapse show={true} id="navbarCenteredExample">
            <MDBNavbarNav>
              {siteNamesWithoutDuplicates.map((siteName) => {
                return (
                  <MDBNavbarItem data-testid={`nav-bar-link-${siteName}`}>
                    <MDBNavbarLink
                      onClick={addMissionFilter}
                      type="submit"
                      active
                      aria-current="page"
                      href="#"
                    >
                      {siteName}
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                );
              })}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
        <MDBBtn onClick={() => setSort(true)} outline color="light">
          Sort By: Launch Date
        </MDBBtn>
      </MDBNavbar>
      <Missions
        sort={sort}
        missionFilter={missionFilter}
        data={data}
      ></Missions>
    </>
  );
}
