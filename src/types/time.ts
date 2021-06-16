export interface IDateRange {
  from: string;
  to: string;
}

export interface ITimeConfiguration {
  recurrence?: IRecurrence;
  dateRange: IDateRange;
}

export enum DaysEnum {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

export enum TimeUnitsEnum {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
}

export interface IRecurrence {
  repeatEvery: IRepeatEvery;
  repeatOn: DaysEnum[];
}

export interface IRepeatEvery {
  value: number;
  unit: TimeUnitsEnum;
}
