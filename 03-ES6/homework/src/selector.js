var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
  for (var i = 0; i < startEl.children.length; i++) {
    const result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...result];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) {
  if (selector.charAt(0) === "#") {
    return "id";
  } else if (selector.charAt(0) === ".") {
    return "class";
  } else if (selector.indexOf(".") > 0) {
    return "tag.class";
  } else {
    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (element) => {
      return `#${element.id}` === selector;
    };
  } else if (selectorType === "class") {
    matchFunction = (element) => {
      return element.classList.contains(selector.split(".")[1]);
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      return element.tagName.toLowerCase() === selector.split(".")[0] && element.classList.contains(selector.split(".")[1]);
    };
  } else if (selectorType === "tag") {
    matchFunction = (element) => {
      return element.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
