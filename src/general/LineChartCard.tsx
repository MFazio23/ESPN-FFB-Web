import {Card, CardContent, CardHeader, useTheme} from '@mui/material';
import {LineChart} from '@mui/x-charts';

interface AxisProps {
    dataKey: string;
    min?: number;
    max?: number;
    reverse?: boolean;
}

interface SeriesDataProps {
    dataKey: string;
    label?: string;
    stack?: string;
    area?: boolean;
}

interface LineChartCardProps {
    title?: string;
    subtitle?: string;
    height?: number;
    width?: number;
    isInverted?: boolean;
    dataset: Record<string, unknown>;
    seriesData: SeriesDataProps[];
    xAxis: AxisProps;
    yAxis: AxisProps;
    xAxisDataType?: LineChartAxisDataType;
    yAxisDataType?: LineChartAxisDataType;
}

export enum LineChartAxisDataType {
    number = 'number',
    string = 'string',
}

export default function LineChartCard(
    {
        title,
        subtitle,
        height = 300,
        width = 400,
        dataset,
        seriesData,
        xAxis,
        yAxis,
        xAxisDataType = LineChartAxisDataType.number,
        yAxisDataType = LineChartAxisDataType.number,
    }: LineChartCardProps
) {
    const theme = useTheme();

    const colorList = [
        theme.palette.primary.main,
        theme.palette.secondary.main,
    ]

    // We get the settings in here so we can conditionally add the valueFormatter
    // This way the axes can display strings or numbers.
    // The library automatically formats strings that can be converted to numbers as numbers
    const xAxisSettings = {
        dataKey: xAxis.dataKey,
        min: xAxis.min,
        max: xAxis.max,
    }

    if (xAxisDataType === LineChartAxisDataType.string) {
        // @ts-ignore
        xAxisSettings['valueFormatter'] = (value: number | string) => value.toString();
    }

    const yAxisSettings = {
        dataKey: yAxis.dataKey,
        min: yAxis?.min,
        max: yAxis?.max,
        reverse: yAxis?.reverse,
    }

    if (yAxisDataType === LineChartAxisDataType.string) {
        // @ts-ignore
        yAxisSettings['valueFormatter'] = (value: number | string) => value.toString();
    }

    return (
        <Card sx={{width: width, p: 0, m: 0, maxWidth: '100vw'}}>
            <CardHeader title={title} subheader={subtitle}/>
            {/*Add negative margin since there's normally a lot of space on a chart*/}
            <CardContent sx={{mx: -5, my: -2, width, maxWidth: '100%'}}>
                <LineChart

                    height={height}
                    sx={{
                        mr: -5,
                    }}
                    // @ts-ignore
                    dataset={dataset}
                    xAxis={[xAxisSettings]}
                    yAxis={[yAxisSettings]}
                    // @ts-ignore
                    series={seriesData.map((series, index) => ({
                        ...series,
                        color: colorList[index % colorList.length],
                    }))}

                />
            </CardContent>
        </Card>
    );
}
