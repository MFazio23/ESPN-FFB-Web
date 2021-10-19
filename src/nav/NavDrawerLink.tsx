import React, {ReactElement} from "react";
import {SvgIconComponent} from "@mui/icons-material";

export default interface NavDrawerLink {
    text: string,
    url: string,
    icon: ReactElement<SvgIconComponent>
}