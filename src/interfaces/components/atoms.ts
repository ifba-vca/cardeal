export interface Discipline {
  id?: String | null;
  type?: DisciplineType | null;
  subtitle?: any | null;
  name?: String | null;
  h_total?: String | null;
  h_weekly?: String | null;
  teacher?: String | null;
  description?: String | null;
}

export enum DisciplineType {
  CCO="CCO",
  MAT="MAT",
  COM="COM",
  HUM="HUM",
  OPT="OPT",
  SUP="SUP",
  TEC="TEC"
}
export interface Semester {
  id?: String | null;
  name?: String | null;
  disciplines?:Array<Discipline> | null;
}
export interface Course {
  name?: String | null;
  semesters?:Array<Semester> | null;
}

export interface IfbaProps {
  width?: number | null;
  cColor?: String | null;
  sColor?: String | null;
}
export interface IfbaSize {
  width?: number;
  height?: number;
  square?: number;
  margin?: number;
}


export interface IfbaLogoProps {
  logoSize?: number | null;
  textSize?: number | null;
  circleColor?: String | null;
  squareColor?: String | null;
  primaryColor?: String | null;
  secondaryColor?: String | null;
}