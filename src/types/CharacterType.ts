export interface CharacterType {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  images: {
    head_shot: string;
    main: string;
  };
  gender: string;
  species: string;
  homePlanet: string;
  occupation: string;
}
