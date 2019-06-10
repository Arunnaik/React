export const UNCAUGHT_ERR = 'UNCAUGHT_ERR';
export const CLEAR_ERR = 'CLEAR_ERR';
export const CLEAR_ERR_AND_NAVIGATE_TO_HOME = 'CLEAR_ERR_AND_NAVIGATE_TO_HOME';

export const uncaughtError = (err, info) => ({ type: UNCAUGHT_ERR, info, err });

export const clearError = () => ({ type: CLEAR_ERR });

export const clearErrAndGoToHome = () => ({ type: CLEAR_ERR_AND_NAVIGATE_TO_HOME });
