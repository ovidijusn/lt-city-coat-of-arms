const LUNCH_DATE = new Date('2023-10-31').getTime();
const MS_IN_DAY = 1000 * 60 * 60 * 24;

export function daysSinceLunch() {
    const now = new Date().getTime();
    return Math.ceil((now - LUNCH_DATE) / MS_IN_DAY);
}