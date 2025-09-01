import {Card, CardContent, CardHeader, useTheme} from '@mui/material';
import {
    AxisProps,
    LineChartAxisDataType,
    LineChartReferenceLineProps,
    SeriesDataProps
} from '@/charts/FFBLineChartTypes';
import {FFBLineChartWithReferenceLines} from '@/charts/FFBLineChartWithReferenceLines';
import {FFBLineChart} from '@/charts/FFBLineChart';

interface LineChartCardProps {
    title?: string;
    subtitle?: string;
    height?: number;
    width?: number;
    isInverted?: boolean;
    dataset: Record<string, unknown>;
    seriesData: SeriesDataProps[];
    colorList?: string[];
    xAxis: AxisProps;
    yAxis: AxisProps;
    xAxisDataType?: LineChartAxisDataType;
    yAxisDataType?: LineChartAxisDataType;
    referenceLines?: LineChartReferenceLineProps[];
}

export default function LineChartCard(
    {
        title,
        subtitle,
        height = 300,
        width = 400,
        dataset,
        seriesData,
        colorList,
        xAxis,
        yAxis,
        xAxisDataType = LineChartAxisDataType.number,
        yAxisDataType = LineChartAxisDataType.number,
        referenceLines,
    }: LineChartCardProps
) {
    const theme = useTheme();

    const defaultColorList = [
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
        tickMinStep: xAxis.tickMinStep,
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
        tickMinStep: yAxis.tickMinStep,
    }

    if (yAxisDataType === LineChartAxisDataType.string) {
        // @ts-ignore
        yAxisSettings['valueFormatter'] = (value: number | string) => value.toString();
    }

    return (
        <Card sx={{width, p: 0, m: 0, maxWidth: '100vw'}}>
            <CardHeader title={title} subheader={subtitle}/>
            {/*Add negative margin since there's normally a lot of space on a chart*/}
            <CardContent sx={{mx: -4, my: -2, width, maxWidth: '100%'}}>
                {referenceLines ?
                    <FFBLineChartWithReferenceLines
                        height={height}
                        width={width}
                        dataset={dataset}
                        seriesData={seriesData}
                        xAxisSettings={xAxisSettings}
                        yAxisSettings={yAxisSettings}
                        colorList={colorList ?? defaultColorList}
                        referenceLines={referenceLines}/> :
                    <FFBLineChart
                        height={height}
                        width={width}
                        dataset={dataset}
                        seriesData={seriesData}
                        xAxisSettings={xAxisSettings}
                        yAxisSettings={yAxisSettings}
                        colorList={colorList ?? defaultColorList}
                    />
                }
            </CardContent>
        </Card>
    );
}
