import {LineChart} from '@mui/x-charts';
import {FFBLineChartProps} from '@/charts/FFBLineChartTypes';

export function FFBLineChart(
    {
        height,
        width,
        dataset,
        seriesData,
        xAxisSettings,
        yAxisSettings,
        colorList,
    }: Omit<FFBLineChartProps, 'referenceLines'>
) {
    return (
        <LineChart
            height={height}
            width={width}
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
                type: 'line',
                showMark: series.showMark ?? true
            }))}

        />)
}
