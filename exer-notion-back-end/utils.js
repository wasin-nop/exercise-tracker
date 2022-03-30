let activityIdCounter = 0;
let recordIdCounter = 0;

const getElementById = (id, elementList) => {
  return elementList.find((element) => {
    return element.id === Number(id);
  });
};

const getIndexById = (id, elementList) => {
  return elementList.findIndex((element) => {
    return element.id === Number(id);
  });
};

const createElement = (elementType, queryArguments) => {
  if (
    queryArguments.hasOwnProperty("emoji") &&
    queryArguments.hasOwnProperty("name")
  ) {
    let currentId;
    if (elementType === "activities") {
      activityIdCounter += 1;
      currentId = activityIdCounter;
    } else if (elementType === "records") {
      recordIdCounter += 1;
      currentId = recordIdCounter;
    }
    return {
      id: currentId,
      emoji: queryArguments.emoji,
      name: queryArguments.name,
    };
  } else {
    return false;
  }
};

const updateElement = (id, queryArguments, elementList) => {
  const elementIndex = getIndexById(id, elementList);
  if (elementIndex === -1) {
    throw new Error("updateElement must be called with a valid id parameter");
  }
  if (queryArguments.id) {
    queryArguments.id = Number(queryArguments.id);
  }
  Object.assign(elementList[elementIndex], queryArguments);
  return elementList[elementIndex];
};

const seedElements = (arr, type) => {
  if (type === "activities") {
    arr.push(createElement("activities", { emoji: "😀", name: "happy" }));
    arr.push(createElement("activities", { emoji: "😎", name: "shades" }));
    arr.push(createElement("activities", { emoji: "😴", name: "sleepy" }));
  } else if (type === "records") {
    arr.push(createElement("records", { emoji: "🐶", name: "Pupper" }));
    arr.push(createElement("records", { emoji: "🐍", name: "Snek" }));
    arr.push(createElement("records", { emoji: "🐱", name: "Maru" }));
  } else {
    throw new Error(`seed type must be either 'activity' or 'record'`);
  }
};

module.exports = {
  createElement: createElement,
  getIndexById: getIndexById,
  getElementById: getElementById,
  updateElement: updateElement,
  seedElements: seedElements,
};
