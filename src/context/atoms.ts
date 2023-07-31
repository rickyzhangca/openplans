import dayjs from "dayjs";
import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils';

const selectedDates = atomWithStorage<Date[]>('selected-dates', [dayjs().startOf('day').toDate()])

const startingDate = atomWithStorage<Date>('starting-date', dayjs().startOf('month').toDate())
const endingDate = atomWithStorage<Date>('ending-date', dayjs().endOf('month').toDate())

const generateCalendar = (startingDate: Date, endingDate: Date) => {
    const start = dayjs(startingDate).startOf('month')
    const end = dayjs(endingDate).endOf('month')
    let pointer = start;
    let extendedMonths = []
    while (!pointer.isAfter(end.endOf('week'))) {
        const extendedMonthEnd = pointer.endOf('month').endOf('week')
        pointer = pointer.startOf('month').startOf('week')
        let extendedWeeks = []
        while (!pointer.isAfter(extendedMonthEnd)) {
            let week = []
            const endOfWeek = pointer.endOf('week')
            while (!pointer.isAfter(endOfWeek)) {
                week.push(pointer.toDate())
                pointer = pointer.add(1, 'day');

            }
            extendedWeeks.push(week)
        }
        extendedMonths.push(extendedWeeks)
    }
    return extendedMonths;
};

const calendar = atom<Date[][][]>((get) => generateCalendar(get(startingDate), get(endingDate)))

export const atoms = {
    selectedDates, startingDate, endingDate, calendar
}
