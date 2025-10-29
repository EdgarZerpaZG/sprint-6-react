export interface BoxProps {
    campaign: string;
    id: string;
    description: string;
    price: number;
    discount?: number;
    page?: number;
    language?: number;
}