import AppContext from "./AppContext";
import { useEffect, useState, useMemo } from "react";

export default function AppProvider({ children }) {
    const [softwares, setSoftwares] = useState([]);
    const [filterCategory, setFilterCategory] = useState('categories');
    const [orderedTitle, setOrderedTitle] = useState(true);
    const [search, setSearch] = useState('');

    const URL_APP = import.meta.env.VITE_API_URL;


    /* recupera i dati dall'API */
    const getDate = async () => {
        try {
            const response = await fetch(`${URL_APP}`);

            if (!response.ok) throw new Error("Errore nella richiesta dati");

            const data = await response.json();

            setSoftwares(data);
        } catch (error) {
            console.error(error);
        }
    }

    /* rende visibili i dati */
    useEffect(() => {
        getDate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    /* filtra i dati per la ricerca e filtra per categoria e organizza le schede da A-Z e Z-A */
    const getFilteredSoftwares = useMemo(() => {

        const filteredSoftware = softwares.filter(software => {
            /* barra di ricerca logica */
            const searchRecord = search ? software.title.toLowerCase().includes(search.toLowerCase()) : true;

            /* filtro per categoria */
            const filteredRecord = filterCategory !== 'categories' ? software.category === filterCategory : true;

            return searchRecord && filteredRecord;
        });

        /* ordinamento alfabetico */
        return [...filteredSoftware].sort((a, b) => {
            return orderedTitle ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        });

    }, [softwares, search, filterCategory, orderedTitle]);

    /* estrarre tutte le categorie */
    const filteredCategories = useMemo(() => {

        const allCategories = softwares.map(software => software.category);

        return [... new Set(allCategories)];/* Rimuovere i duplicati dall'array */

    }, [softwares]);


    // Inverti l'ordine delle card nel click
    const handleOrderedClick = () => setOrderedTitle(!orderedTitle);


    //Preferiti Page
    const like_key = 'likeCardsId';

    const [favoriteCards, setFavoriteCards] = useState(() => {
        /* leggere un valore salvato nel browser con la chiave like_key */
        const preferredCard = localStorage.getItem(like_key);

        /* Viene salvato come stringa e poi trasformato nuovamente in un array o oggetto e se è vuoto inizia con un array vuoto */
        return preferredCard ? JSON.parse(preferredCard) : [];
    });

    useEffect(() => {
        /* salva nel browser con la chiave e converte l'array dei favoriti in stringa, perché ls accetta solo stringhe */
        localStorage.setItem(like_key, JSON.stringify(favoriteCards))
    }, [favoriteCards]);

    const isLiked = (softwareId) => {
        /* controlla se il software è già stato clicato */
        return favoriteCards.includes(softwareId);
    }

    const addLike = (softwareId) => {
        /* adiciona o software aos favoritos se ainda nao estiver na lista */
        if (!favoriteCards.includes(softwareId)) setFavoriteCards(prev => [...prev, softwareId]);
    }

    const removeLike = (software) => {
        /* Aggiungi il software ai tuoi preferiti se non è già presente */
        setFavoriteCards(prev => prev.filter(softwareId => softwareId !== software));
    }

    const handleClickLike = (software) => favoriteCards.includes(software) ? removeLike(software) : addLike(software);


    /* Modal */

    /* visibilità modale */
    const [isModalVisible, setIsModalVisible] = useState(false);

    /* contiene gli IDs delle carte */
    const [cardsId, setCardsId] = useState([]);




    const values = {
        softwares,
        setSoftwares,
        getFilteredSoftwares,
        setFilterCategory,
        setOrderedTitle,
        orderedTitle,
        setSearch,
        search,
        handleOrderedClick,
        filteredCategories,
        isLiked,
        handleClickLike,
        favoriteCards,
        isModalVisible,
        setIsModalVisible,
        cardsId,
        setCardsId
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}