function getOptionsArgument(serviceOrOptions) {
  return typeof serviceOrOptions === 'object'
    ? serviceOrOptions.service
    : serviceOrOptions;
}

export function setGenericPassword(username, password, serviceOrOptions) {
  return new Promise( (resolve, reject) => {
    try {
      localStorage.setItem(getOptionsArgument(serviceOrOptions), password);
      resolve();
    } catch (error) {
      reject(error);
    }
  }); 
}

export function resetGenericPassword(serviceOrOptions) {
  return new Promise( (resolve, reject) => {
    try {
      localStorage.removeItem(getOptionsArgument(serviceOrOptions));
      resolve();
    } catch (error) {
      reject(error);
    }
  }); 
}

export function getGenericPassword(serviceOrOptions) {
  return new Promise( (resolve, reject) => {
    try {
      const data = localStorage.getItem(getOptionsArgument(serviceOrOptions));
      resolve(data ? { password: data } : null);
    } catch (error) {
      reject(error);
    }
  }); 
}
