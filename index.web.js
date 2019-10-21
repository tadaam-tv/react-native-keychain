export function setGenericPassword(username, password, serviceName) {
  return new Promise( (resolve, reject) => {
    try {
      localStorage.setItem(serviceName, password);
      resolve();
    } catch (error) {
      reject(error);
    }
  }); 
}

export function resetGenericPassword(serviceName) {
  return new Promise( (resolve, reject) => {
    try {
      localStorage.removeItem(serviceName);
      resolve();
    } catch (error) {
      reject(error);
    }
  }); 
}

export function getGenericPassword(serviceName) {
  return new Promise( (resolve, reject) => {
    try {
      const data = localStorage.getItem(serviceName);
      resolve(data ? { password: data } : null);
    } catch (error) {
      reject(error);
    }
  }); 
}
