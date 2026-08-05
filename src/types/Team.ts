export interface Team {
    id: number;
    name: string;
    owners: TeamOwner[];
    shortName: string;
    year: number;
}

export interface TeamOwner {
    displayName: string;
    firstName: string;
    id: string;
    lastName: string;
}
