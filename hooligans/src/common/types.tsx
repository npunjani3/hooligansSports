export interface StandingData {
    key: number;
    conf: string;
    standing: number;
    team: string;
    mp: number;
    w: number;
    d: number;
    l: number;
    g: string;
    a: number;
    p: number;
}

export function createData(
    key: number,
    conf: string,
    standing: number,
    team: string,
    mp: number,
    w: number,
    d: number,
    l: number,
    g: string,
    a: number,
    p: number
): StandingData { 
    return {key, conf, standing, team, mp, w, d, l, g, a, p};
}

export interface LeagueData {
    country: string;
    league: string;
    season: number;
    flag: string;
    logo: string;
}

export function createLeagueData (
    country: string,
    league: string,
    season: number,
    flag: string,
    logo: string,
): LeagueData {
    return {country, league, season, flag, logo};
}

export interface Outcomes {
    name: string;
    price: number;
}

export function createOutcomes(
    name: string,
    price: number
): Outcomes {
    return {name, price};
}

export interface OddsData {
    home: string;
    away: string;
    outcome: Outcomes[];
}

export function createOddsData (
    home: string,
    away: string,
    outcome: Outcomes[],
): OddsData {
    return {home, away, outcome};
}