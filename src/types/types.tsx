export interface Root {
  data: Data;
}

export interface Data {
  launchesPast: LaunchesPast[];
}

export interface LaunchesPast {
  mission_name: string;
  launch_site: LaunchSite;
  rocket: Rocket;
  ships: Ship[];
  launch_date_local: string;
}

export interface LaunchSite {
  site_name_long: string;
}

export interface Rocket {
  rocket_name: string;
}

export interface Ship {
  name: string;
  image: string;
}
