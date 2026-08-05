import Config from '@/config';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { WhatIfScoringType, WhatIfStandingsType, WhatIfTypeToggleType } from '../WhatIfTypes';
import WhatIfTypeSwitch from './WhatIfTypeSwitch';

interface WhatIfControlsProps {
    season: number;
    setSeason: (season: number) => void;
    scoringType: WhatIfScoringType;
    setScoringType: (scoringType: WhatIfScoringType) => void;
    standingsType: WhatIfStandingsType;
    setStandingsType: (standingsType: WhatIfStandingsType) => void;
}

export default function WhatIfControls({
    season,
    setSeason,
    scoringType,
    setScoringType,
    standingsType,
    setStandingsType,
}: WhatIfControlsProps) {
    const years = Array.from({ length: Config.currentYear - 2009 + 1 }, (_, i) => 2009 + i).reverse();

    const handleSeasonChange = (event: SelectChangeEvent<number>) => {
        setSeason(event.target.value);
    };

    const handleScoringTypeChange = (newScoringType: WhatIfTypeToggleType) => {
        setScoringType(newScoringType as WhatIfScoringType);
    };

    const handleStandingsTypeChange = (newStandingsType: WhatIfTypeToggleType) => {
        setStandingsType(newStandingsType as WhatIfStandingsType);
    };

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} mt={2}>
            <Grid size={{ xs: 12, md: 2 }} display="flex" alignItems="center" justifyContent="center">
                <FormControl>
                    <InputLabel id="season-label">Season</InputLabel>
                    <Select label="Season" value={season} onChange={handleSeasonChange}>
                        {years.map(year => (
                            <MenuItem key={year} value={year}>
                                {year}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
                <WhatIfTypeSwitch
                    topLabel="Scoring"
                    value={scoringType}
                    onChange={handleScoringTypeChange}
                    leftValue={WhatIfScoringType.Standard}
                    rightValue={WhatIfScoringType.BestBall}
                    leftLabel="Standard"
                    rightLabel="Best Ball"
                />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
                <WhatIfTypeSwitch
                    topLabel="Standings"
                    value={standingsType}
                    onChange={handleStandingsTypeChange}
                    leftValue={WhatIfStandingsType.Normal}
                    rightValue={WhatIfStandingsType.TopSix}
                    leftLabel="Normal"
                    rightLabel="Top Six"
                />
            </Grid>
        </Grid>
    );
}
