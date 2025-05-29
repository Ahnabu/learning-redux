const Logger = (state) => (next) => (action) => {
    
    next(action);
}

export default Logger