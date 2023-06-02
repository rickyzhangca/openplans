import { Dispatch, SetStateAction, useState } from 'react';

export enum RunTypes {
  EASY_RUN,
  HILL_RUN,
  PACE_RUN,
  RACE_DAY,
  REST,
}

export type DayPlan = {
  runType: RunTypes;
  distance: number;
};

export type PlanData = {
  // iso string
  [date: string]: DayPlan[];
};
export type Plan = {
  data: PlanData;
  setData: Dispatch<SetStateAction<PlanData>>;
  setDayPlan: (day: Date, dayPlan: DayPlan[]) => void;
  removeDayPlan: (day: Date) => void;
};

const usePlan = () => {
  const [data, setData] = useState<PlanData>({
    // test: [{ runType: RunTypes.EASY_RUN, distance: 4.8 }],
  });

  const setDayPlan = (day: Date, dayPlan: DayPlan[]) => {
    const newData = { ...data };
    newData[day.toISOString()] = dayPlan;
    setData(newData);
  };

  const removeDayPlan = (day: Date) => {
    const newData = { ...data };
    delete newData[day.toISOString()];
    setData(newData);
  };

  const plan = { data, setData, setDayPlan, removeDayPlan };

  return plan;
};

export default usePlan;
