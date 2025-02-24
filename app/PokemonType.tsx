export type Pokemon = {
  id: number;
  name: {
    [language: string]: string;
  };
  type: string[];
  base: {
    [power: string]: number;
  };
};
