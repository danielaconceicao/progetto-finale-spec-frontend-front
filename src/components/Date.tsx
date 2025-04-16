import RandomDateRecordsComponent from "./RandomDate";

function DateComponent(minYear: number, maxYear: number): Date {
    const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 31) + 1;
    const date = new Date(year, month, day);
    while (date.getMonth() !== month) {
        date.setDate(date.getDate() - 1);
    }
    return date;
}

export default function DateRecords(){
    return(
        <RandomDateRecordsComponent randomDateComponent={DateComponent} />
    )
}