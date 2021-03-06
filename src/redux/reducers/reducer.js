const initialState = {
    users: null,
    contacts: null,
    authentication: false
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            };

        case 'SET_CONTACTS':
            let auth = false;
            let newArr = null;
            state.users.forEach(item => {
                if (action.payload.login === item.login && action.payload.password === item.password) {
                    newArr = item.contacts
                    auth = true
                }
            })
            return {
                ...state,
                contacts: newArr,
                authentication: auth
            };

        case 'SORT_USERS_NAME':
            const newItemsName = state.contacts.sort((a, b) => a.name > b.name ? 1 : -1);
            return {
                ...state,
                contacts: [...newItemsName]
            };

        case 'SORT_USERS_AGE':
            const newItemsTel = state.contacts.sort((a, b) => a.tel > b.tel ? 1 : -1);
            return {
                ...state,
                contacts: [...newItemsTel]
            };

        case 'REMOVE_USER_ITEM':
            const newItemsRemove = state.contacts.filter((item) => item.id !== action.payload);
            return {
                ...state,
                contacts: newItemsRemove,
            };
        
        case 'CHANGE_USER':
            const newItems = [action.payload];
            const replacedItems = state.contacts.map(e => {
                if (newItems.some(({ id }) => id === e.id)) {
                  return newItems.find(({ id }) => id === e.id);
                }
                return e;
            });
            return {
                ...state,
                contacts: replacedItems,
            };

        case 'ADD_NEW_USER':
            const newUser = [...state.contacts, action.payload]; 
            return {
                ...state,
                contacts: newUser,
            };

        case 'CHANGE_EXIT':
            return {
                ...state,
                contacts: null,
                authentication: null
            };

        default:
            return state;
    }
};

export default data;