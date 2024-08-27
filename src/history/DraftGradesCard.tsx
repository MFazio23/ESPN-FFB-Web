import {Box, Card, CardContent, CardHeader, Stack, Typography} from '@mui/material';

interface DraftGrade {
    rank: number;
    team: string;
    grade: string;
}

export interface DraftGradesCardProps {
    id: string;
    year: number;
    grades: DraftGrade[];
}

export default function DraftGradesCard({gradeCards}: { gradeCards: DraftGradesCardProps }) {
    const {year, grades} = gradeCards;
    return (
        <Card sx={{width: 400}}>
            <CardHeader title={year}/>
            <CardContent>
                <Stack>
                    {grades.map(grade => (
                        <Box key={grade.team}>
                            <Typography variant="body1">{grade.rank}. {grade.team} - {grade.grade}</Typography>
                        </Box>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
}
