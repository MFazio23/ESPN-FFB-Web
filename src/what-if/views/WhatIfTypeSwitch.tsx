import { Stack, Switch, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import { WhatIfTypeToggleType } from '../WhatIfTypes';

interface WhatIfTypeToggleProps {
    topLabel: string;
    leftLabel: string;
    rightLabel: string;
    leftValue: WhatIfTypeToggleType;
    rightValue: WhatIfTypeToggleType;
    value: WhatIfTypeToggleType;
    onChange: (value: WhatIfTypeToggleType) => void;
}

export default function WhatIfTypeSwitch({
    topLabel,
    leftLabel,
    rightLabel,
    leftValue,
    rightValue,
    value,
    onChange,
}: WhatIfTypeToggleProps) {
    const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked ? rightValue : leftValue);
    };
    const handleTextClick = (newValue: WhatIfTypeToggleType) => {
        onChange(newValue);
    };
    return (
        <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h6" align="center">
                {topLabel}
            </Typography>
            <Stack direction="row" alignItems="center">
                <Typography
                    variant="subtitle1"
                    align="center"
                    onClick={() => handleTextClick(leftValue)}
                    color={value === leftValue ? 'primary' : 'text.primary'}>
                    {leftLabel}
                </Typography>
                <Switch
                    checked={value === rightValue}
                    onChange={handleSwitchChange}
                    color="primary"
                />
                <Typography
                    variant="subtitle1"
                    align="center"
                    onClick={() => handleTextClick(rightValue)}
                    color={value === rightValue ? 'primary' : 'text.primary'}>
                    {rightLabel}
                </Typography>
            </Stack>
        </Stack>
    );
}
