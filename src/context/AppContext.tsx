import { createContext } from "react";
import { AppContextValue } from "../types/RecordTypes";

const AppContext = createContext<AppContextValue | undefined>(undefined);

export default AppContext;