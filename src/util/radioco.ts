const STATION_ID = 's209f09ff1';

type todo = any;

export type StationMetadata = {
    status: "online" | "offline";
    source: StationSource;
    collaborators: Collaborator[];
    relays: Relay[];
    current_track: CurrentTrack;
    history: MetadataHistoryTrack[];
    logo_url: string;
    streaming_hostname: string;
    outputs: Output[];
}

type StationSource = {
    type: "automated" | "live";
    collaborator: Collaborator | null;
    relay: Relay | null;
}

type Collaborator = {
    id: string;
    name: string;
    status: "streaming" | "pending";
}

type Relay = {
    id: string;
    url: string;
    status: "connected";
}

type CurrentTrack = {
    title: string;
    start_time: string;
    artwork_url: string | null;
    artwork_url_large: string | null;
}

type MetadataHistoryTrack = {
    title: string;
}

type Output = {
    name: string;
    format: "MP3" | "AAC";
    bitrate: 16 | 32 | 48 | 64 | 96 | 128 | 192 | 256 | 320;
}

export type RequestableTrack = {
    id: number;
    artist: string;
    title: string;
    artwork: Artwork;
}

type Artwork = {
    url: string | null;
    large_url: string | null;
}

export type HistoryTrack = {
    title: string;
    start_time: string;
    artwork_url: string | null;
}

export async function getStationMetadata(): Promise<StationMetadata> {
    const res = await fetch(`https://public.radio.co/stations/${STATION_ID}/status`)
    const json = await res.json();
    return json;
}

export async function getStationHistory(): Promise<HistoryTrack[]> {
    const res = await fetch(`https://public.radio.co/stations/${STATION_ID}/history`)
    const json = await res.json();
    return json.tracks;
}

export async function getRequestableTracks(): Promise<RequestableTrack[]> {
    const res = await fetch(`https://public.radio.co/stations/${STATION_ID}/requests/tracks`)
    const json = await res.json();
    return json.tracks;
}

export async function requestTrack(track_id: number): Promise<void> {
    const req = await fetch(`https://public.radio.co/stations/${STATION_ID}/requests`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // X-Device is a fingerprint of the device that is requesting the track
            // "X-Device": ""
        },
        body: JSON.stringify({ track_id })
    });
    const status = req.status;
    switch (status) {
        case 201:
            return;
        case 403:
            throw new Error("Requests disabled");
        case 404:
            throw new Error("Track not found");
        case 409:
            throw new Error("Track already requested");
        case 429:
            throw new Error("Rate limited");
        default:
            throw new Error("Unknown error");
    }
}
