export interface SpaceProps {
  name: string;
  image?: string;
  index: number;
}

export interface PropertySpaceProps extends SpaceProps {
  region: string;
  price: number;
}

export type SpaceData = Omit<SpaceProps, "index">
export type PropertySpaceData = Omit<PropertySpaceProps, "index">
