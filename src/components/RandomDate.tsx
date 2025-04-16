import { Props } from '../types/RecordTypes'

export default function RandomDateRecordsComponent({ randomDateComponent }: Props) {
    const minYear = 2010;
    const maxYear = 2025;

    const randomDate = randomDateComponent(minYear, maxYear);

    return (
        <p><strong>Data dell'ultimo aggiornamento</strong>: {randomDate.toLocaleDateString()}</p>
    )
}

