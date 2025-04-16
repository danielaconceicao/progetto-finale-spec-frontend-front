import { useEffect, useState, useMemo, useCallback } from "react";
import AppContext from "./AppContext";
import { AppContextValue, ProviderProps, Software } from "../types/RecordTypes";


const like_storage_key = 'FavoriteCardIds';
const API_URL = process.env.REACT_APP_API_URL;

export default function AppProvider({ children }: ProviderProps) {
    const [data, setData] = useState<Software[]>([]);
    const [filterData, setFilterData] = useState<string>('');
    const [filteredData, setFilteredData] = useState<Software[] | null>(null);

    const [isModalVisibile, setIsModalVisibile] = useState<boolean>(false);

    const [idCards, setIdCards] = useState<number[]>([]);

    const [favoriteCardsIds, setFavoriteCardsIds] = useState<number[]>(() => {
        const storedLikes = localStorage.getItem(like_storage_key);
        return storedLikes ? JSON.parse(storedLikes) : [];
    });

    useEffect(() => {
        localStorage.setItem(like_storage_key, JSON.stringify(favoriteCardsIds));
    }, [favoriteCardsIds]);


    const getSoftware = async (): Promise<Software[]> => {
        try {
            const response = await fetch(`${API_URL}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: unknown = await response.json();

            if (!(data instanceof Array)) {
                throw new Error(`Formato invalido dei dati: Non é un array`)
            }

            const softwareData = data as Software[]

            setData(softwareData); /* data e un software */
            return data as Software[]; /* restituisci data come Software[] */
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Errore durante il recupero dei software ${error}`);
            }
            return [];
        }
    }

    useEffect(() => {
        getSoftware();
    }, []);

    const updateFilterQuery = useCallback((query: string) => {
        setFilterData(query);
    }, []);

    const filterRecord = useMemo(() => (query: string) => {
        return data.filter(record => record.title.toLowerCase().includes(query.toLowerCase()));
    }, [data])

    useEffect(() => {
        if(data){
            setFilteredData(filterRecord(filterData))
        }
    }, [data, filterData, filterRecord])


    const addLike = (cardId: number) => {
        if (!favoriteCardsIds.includes(cardId)) {
            setFavoriteCardsIds(prevIds => [...prevIds, cardId]);
        }
    }

    const removeLike = (cardId: number) => {
        setFavoriteCardsIds(prevId => prevId.filter(favId => favId !== cardId));
    }

    const isLiked = (cardId: number) => {
        return favoriteCardsIds.includes(cardId);
    }


    const LikesContextValue: AppContextValue = {
        favoriteCardsIds,
        addLike,
        removeLike,
        isLiked,
        isModalVisibile,
        setIsModalVisibile,
        getSoftware,
        data: filteredData,
        filterRecord: updateFilterQuery,
        setFilterData,
        filteredData,
        idCards,
        setIdCards
    }

    return (
        <AppContext.Provider value={LikesContextValue}>
            {children}
        </AppContext.Provider>
    );
}

