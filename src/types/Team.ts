import {Member} from "./Member";

type JsonTeam = {
    id: number,
    fullName: string,
    location: string,
    nickname: string,
    shortName: string,
    owners: Array<string>
}

type Team = {
    id: number,
    fullName: string,
    location: string,
    nickname: string,
    shortName: string,
    owners: Array<Member>
}

const defaultTeam: Team = {
    id: -1,
    fullName: "Default Team",
    location: "Default",
    nickname: "Team",
    shortName: "DT",
    owners: []
}

const defaultMember: Member = {
    id: "N/A",
    firstName: "Not",
    lastName: "Available",
    displayName: "N/A"
}

function teamFromJson(jsonTeam: JsonTeam, members: Array<Member>): Team {
    return {
        id: jsonTeam.id,
        fullName: jsonTeam.fullName,
        location: jsonTeam.location,
        nickname: jsonTeam.nickname,
        shortName: jsonTeam.shortName,
        owners: jsonTeam.owners.map(ownerId => members.find(m => m.id === ownerId) ?? defaultMember)
    }
}

const getMembersFromOwnerIds = (jsonTeam: JsonTeam, memberArray: Array<Member>): Member[] =>
    jsonTeam
        .owners
        .map(ownerId => memberArray.find(member => member.id === ownerId) || null)
        .filter((member): member is Member => !!member)

export {
    teamFromJson,
    getMembersFromOwnerIds,
    defaultTeam
}

export type {
    JsonTeam,
    Team
}