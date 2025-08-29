import {Card, CardContent, CardHeader, useTheme} from '@mui/material';
import {LineChart} from '@mui/x-charts';

interface LineChartCardProps {
    title?: string;
    subtitle?: string;
    width?: number;
    // Mark customization
    showMarks?: boolean; // Show marks on all points
    defaultMarkShape?: 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';
    specialMarkShape?: 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';
    specialMarkIndices?: number[]; // Data indices that should use the special shape
    markFill?: string; // inner fill color
    markStrokeWidth?: number; // outline thickness
}

export default function LineChartCard(
    {
        title,
        subtitle,
        width = 400,
    }: LineChartCardProps
) {
    const theme = useTheme();

    return (
        <Card sx={{width: width, p: 0, m: 0, maxWidth: '100vw'}}>
            <CardHeader title={title} subheader={subtitle}/>
            <CardContent>
                <LineChart
                    // Add negative margin since there's normally a lot of space on a chart
                    sx={{ml: -5}}
                    xAxis={[
                        {
                            min: 2009,
                            max: 2024,
                            valueFormatter: (year: number) => year.toString(),
                            data: [
                                2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
                            ],
                        },
                    ]}
                    yAxis={[{min: 0, max: 15}]}
                    series={[
                        {
                            data: [7, 4, 10, 7, 8, 11, 8, 2, 3, 5, 1],
                            color: theme.palette.primary.main,
                        },
                    ]}
                    height={300}
                />
            </CardContent>
        </Card>
    );
}
