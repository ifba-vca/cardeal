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
