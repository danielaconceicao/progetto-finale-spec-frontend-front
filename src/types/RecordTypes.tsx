export type Software = {
    id: number;
    img?: string;
    title: string;
    category: string;
    price: number;
    developer: string;
    releaseYear: number;
    platform: string[];
    description: string;
    createdAt: string;
    updatedAt: string;
};

export type Props = {
    randomDateComponent: (minYear: number, maxYear: number) => Date;
}

export type SearchProps = {
    SearchInputChange: (value: string) => void
}

export type AppContextValue = {
    addLike: (cardId: number) => void;
    removeLike: (cardId: number) => void;
    isLiked: (cardId: number) => boolean;
    favoriteCardsIds: number[];
    setIsModalVisibile: (value: boolean | ((prev: boolean) => boolean)) => void;
    isModalVisibile: boolean;
    getSoftware: () => Promise<Software[]>;
    filterRecord: (query: string) => void;
    data: Software[] | null;
    filterData?: string
    setFilterData: (value: string | ((prev: string) => string)) => void;
    filteredData: Software[] | null;
    idCards: number[];
    setIdCards: (value: number[] | ((prev: number[]) => number[])) => void;
}

export type ProviderProps = {
    children: React.ReactNode;
}

export type ModalProps = {
    software: Software[];
    onClose: () => void;
}

export type ApiResponse = {
    success: boolean;
    software?: Software | undefined;
}