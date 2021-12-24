export interface InfoType {
  synopsis: string;
  yearsAired: string;
  creators: [
    {
      name: string;
      url: string;
    }
  ];
  id: number;
}
