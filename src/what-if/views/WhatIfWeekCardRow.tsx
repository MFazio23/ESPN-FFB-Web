import {Stack} from "@mui/material";
import {MatchupResult, WhatIfScoringType} from "../WhatIfTypes";
import WhatIfWeekCardCell from "./WhatIfWeekCardCell";

interface WhatIfWeekCardRowProps {
    matchupData: MatchupResult[];
    scoringType: WhatIfScoringType;
}

export default function WhatIfWeekCardRow({matchupData, scoringType}: WhatIfWeekCardRowProps) {
    const [homeEntry, awayEntry] = matchupData;

    return (
        <Stack direction="row" justifyContent="space-evenly">
            <WhatIfWeekCardCell teamEntry={homeEntry} scoringType={scoringType}/>
            <WhatIfWeekCardCell teamEntry={awayEntry} scoringType={scoringType}/>
        </Stack>
    );
}
