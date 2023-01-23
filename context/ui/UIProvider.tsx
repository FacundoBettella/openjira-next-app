import { FC, ReactNode, useReducer } from 'react'
import { UIContext, UIReducer } from './';

interface IProps {
    children: ReactNode
}

export interface UIState {
    sidemenuOpen: boolean;
};

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
}

export const UIProvider: FC<IProps> = ({ children }) => {
    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

    return (
        <UIContext.Provider
            value={{
                sidemenuOpen: false
            }}
        >
            {children}
        </UIContext.Provider>
    )
}