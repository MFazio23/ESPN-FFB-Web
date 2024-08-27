import HistoryPage, {HistoryPageCard} from './HistoryPage';
import DraftGradesCard, {DraftGradesCardProps} from './DraftGradesCard';
import {Box, Link, Typography} from '@mui/material';

export default function LeagueDraftGrades() {
    const draftGrades: DraftGradesCardProps[] = [
        {
            id: '2024',
            year: 2024,
            grades: [
                {rank: 1, team: 'The Durango Kids', grade: 'A+'},
                {rank: 2, team: 'Oh Saquon You See', grade: 'A+'},
                {rank: 3, team: 'Am I Going Over??', grade: 'A+'},
                {rank: 4, team: 'Manning the Bay', grade: 'A+'},
                {rank: 5, team: 'Uncooked Box', grade: 'A'},
                {rank: 6, team: 'The Jalapeños', grade: 'A-'},
                {rank: 7, team: 'Bye Week Dominators', grade: 'B+'},
                {rank: 8, team: 'Forgot About Dre', grade: 'B+'},
                {rank: 9, team: 'Naptown Goiters', grade: 'B'},
                {rank: 10, team: 'Joe Buck Yourself', grade: 'C+'},
                {rank: 11, team: 'Tucker\'s Team', grade: 'C+'},
                {rank: 12, team: 'Ja’Marr Chase Bank', grade: 'F'},
            ],
        },
        {
            id: '2023',
            year: 2023,
            grades: [
                {rank: 1, team: 'Ja’Marr Chase Bank', grade: 'A+'},
                {rank: 2, team: 'The Durango Kids', grade: 'A+'},
                {rank: 3, team: 'Uncooked Box', grade: 'A'},
                {rank: 4, team: 'Am I Going Over??', grade: 'A'},
                {rank: 5, team: 'Bye Week Dominators', grade: 'A-'},
                {rank: 6, team: 'Oh Saquon You See', grade: 'A-'},
                {rank: 7, team: 'Naptown Goiters', grade: 'B'},
                {rank: 8, team: 'Forgot About Dre', grade: 'B-'},
                {rank: 9, team: 'Joe Buck Yourself', grade: 'B-'},
                {rank: 10, team: 'Tucker\'s Team', grade: 'C+'},
                {rank: 11, team: 'Manning The Bay', grade: 'C'},
                {rank: 12, team: 'The Jalapeños', grade: 'F'}
            ]
        }
    ];
    const vbdLink = <Link href="https://www.fantasypros.com/nfl/rankings/ppr-vbd.php" underline={'none'}>
        Value-Based drafting scores
    </Link>
    const fantasyProsLink = <Link href="https://www.fantasypros.com" underline={'none'}>fantasypros.com</Link>

    const header = <Box display={'flex'} flexDirection={'column'} alignItems={'center'} textAlign='center'>
        <Typography variant="h3" p={2}>Draft Grades + Rankings</Typography>
        <Typography variant='body1'>Here are the draft grades for each season.</Typography>
        <Typography variant='body1'>
            The rankings are derived from the {vbdLink} from {fantasyProsLink}.
        </Typography>
    </Box>

    const gradeCards = draftGrades.map(gradeCards => {
        const historyPageCard: HistoryPageCard = {
            id: gradeCards.id,
            component: <DraftGradesCard key={gradeCards.id} gradeCards={gradeCards}/>
        }
        return historyPageCard;
    });

    return (
        <HistoryPage header={header} cards={gradeCards}/>
    )
}

