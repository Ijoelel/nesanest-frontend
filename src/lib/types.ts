export type PlaceData = {
    name?: string;
    topMenu?: string;
    description?: string;
    category?: string;
    campus?: number;
    image?: string;
    address?: string;
    rating?: number;
    review?: number[];
};

export type ModalType = {
    status: boolean;
    data: PlaceData;
};
