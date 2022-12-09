export const themeReducer = (state, payload) => {
    switch(state.theme) {
        case 'light':
            return {theme: "dark", data: []}
        case 'dark':
            return {theme: "light", data: []}
        default:
            throw new Error()
    }
}