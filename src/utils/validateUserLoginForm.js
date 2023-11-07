const validateUserLoginForm = (values) => {
    const {username, password} = values;
    const errors = {};
    // Validate Username
    if (!username) {
        errors.username = 'Username is required';
    } 
    if (username && (username.length < 6 || username.length > 15)) {
        errors.username = 'Username must be between 6 and 15 characters';
    }
    
    // Validate Password
    if (!password) {
        errors.password = 'Password is required';
    } 
    if (password && password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }
    
    return errors;
    };

export default validateUserLoginForm;