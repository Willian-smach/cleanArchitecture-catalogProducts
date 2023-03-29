export default class Wine {
    public madeBy: string;
    public region: string;
    public type: string;
    public Year: Date;
    public grapType: string;
    public alcoholContent: number;
    public volume: number;

    constructor(madeBy: string, region: string, type: string, Year: Date, grapType: string, alcoholContent: number, volume: number) {
        this.madeBy = madeBy;
        this.region = region;
        this.type = type;
        this.Year = Year;
        this.grapType = grapType;
        this.alcoholContent = alcoholContent;
        this.volume = volume;
    }   
}