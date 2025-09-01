import {FFBLineChartProps} from '@/charts/FFBLineChartTypes';
import {
    ChartDataProvider,
    ChartsAxisHighlight,
    ChartsLegend,
    ChartsReferenceLine,
    ChartsSurface,
    ChartsTooltip,
    ChartsXAxis,
    ChartsYAxis,
    LinePlot,
    MarkPlot
} from '@mui/x-charts';

export function FFBLineChartWithReferenceLines(
    {
        height,
        width,
        dataset,
        seriesData,
        xAxisSettings,
        yAxisSettings,
        colorList,
        referenceLines,
    }: FFBLineChartProps
) {
    return (
        <ChartDataProvider
            xAxis={[xAxisSettings]}
            yAxis={[yAxisSettings]}
            series={seriesData.map((series, index) => ({
                ...series,
                id: index,
                color: colorList[index % colorList.length],
                type: 'line'
            }))}
            // @ts-ignore
            dataset={dataset}>
            <ChartsLegend direction="horizontal" sx={{justifyContent: 'center'}}/>
            <ChartsSurface
                sx={{width, height}}>
                <LinePlot/>
                <MarkPlot/>
                {referenceLines?.map((item, index) => (
                    item.x !== undefined ?
                        <ChartsReferenceLine key={`${index}-x`} x={item.x} label={item.label}
                                             lineStyle={{stroke: item.color}}/> : null
                ))}
                {referenceLines?.map((item, index) => (
                    item.y !== undefined ?
                        <ChartsReferenceLine key={`${index}-y`} y={item.y} label={item.label}
                                             lineStyle={{stroke: item.color}}/> : null
                ))}
                <ChartsXAxis/>
                <ChartsYAxis/>
                <ChartsTooltip/>
                <ChartsAxisHighlight x={'line'}/>

            </ChartsSurface>
        </ChartDataProvider>
    )
}

