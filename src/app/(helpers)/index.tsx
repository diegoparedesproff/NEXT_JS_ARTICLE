export function orderByLatestCreated(objectArray) {
    return objectArray.sort((a, b) => {
      const valueA = a.createdAt;
      const valueB = b.createdAt;
      if (valueA < valueB) {
        return 1;
      }
      if (valueA > valueB) {
        return -1;
      }
      return 0;
    });
  }