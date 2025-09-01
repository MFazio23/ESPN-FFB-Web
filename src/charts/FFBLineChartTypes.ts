export interface AxisProps {
    dataKey?: string;
    min?: number;
    max?: number;
    reverse?: boolean;
    tickMinStep?: number;
}

export interface AxisSettingsProps extends AxisProps {
    valueFormatter?: (value: number | string) => string;
}

export interface SeriesDataProps {
    dataKey: string;
    label?: string;
    stack?: string;
    area?: boolean;
    showTick?: boolean;
}

export enum LineChartAxisDataType {
    number = 'number',
    string = 'string',
}

export interface LineChartReferenceLineProps {
    x?: number;
    y?: number;
    label?: string;
    color?: string;
}

export interface FFBLineChartProps {
    height?: number;
    width?: number;
    isInverted?: boolean;
    dataset: Record<string, unknown>;
    seriesData: SeriesDataProps[];
    xAxisSettings: AxisSettingsProps;
    yAxisSettings: AxisSettingsProps;
    colorList: string[];
    referenceLines?: LineChartReferenceLineProps[];
}
