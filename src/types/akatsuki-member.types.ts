export interface AkatsukiMember {
    id: string;
    name: string;
    images: string;
    natureType: string[];
    personal?: {
        classification?: string[];
        kekkeiGenkai?: string[];
    };
}