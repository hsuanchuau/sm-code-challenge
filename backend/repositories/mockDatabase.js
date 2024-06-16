function mockDatabase() {
  const dataStore = [];
  let currentId = 1;

  function issueExists(id) {
    return dataStore.findIndex((value) => value.id === id) !== -1;
  }

  function addIssue(data) {
    data.id = currentId++;
    dataStore.push(data);
  }

  function updateIssue(id, data) {
    if (!issueExists(id)) {
      throw new Error(`No issue with ID ${id} was found`);
    }
    const index = dataStore.findIndex((value) => value.id === id);
    const updatedIssue = {
      ...data,
      id,
    };
    dataStore.splice(index, 1, updatedIssue);
    return updatedIssue;
  }

  function deleteIssue(id) {
    if (!issueExists(id)) {
      throw new Error(`No issue with ID ${id} was found`);
    }
    dataStore.splice(
      dataStore.findIndex((value) => value.id === id),
      1
    );
  }

  function getAll() {
    return dataStore;
  }

  function getOne(id) {
    if (!issueExists(id)) {
      throw new Error(`No issue with ID ${id} was found`);
    }
    return dataStore.find((value) => value.id === id);
  }

  return {
    addIssue,
    updateIssue,
    deleteIssue,
    getAll,
    getOne,
  };
}

const mockDatabaseInstance = mockDatabase();

export default mockDatabaseInstance;
