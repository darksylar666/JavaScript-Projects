function checkCashRegister(price, cash, cid) {
  // Matriz que contiene los valores de las diferentes denominaciones de monedas y billetes.
  const currency = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];
  // Cantidad de cambio que se debe dar al cliente.
  let change = cash - price;
  // Cantidad total de dinero en efectivo disponible en el cajón.
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
  // Objeto que contiene dos claves: `status` y `change`.
  let result = { status: "", change: [] };
  // Si el dinero en efectivo total en el cajón es menor que el cambio que se debe dar, la función devuelve un objeto con la clave `status` establecida en "INSUFFICIENT_FUNDS".
  if (totalCid < change) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  // Si el dinero en efectivo total en el cajón es igual al cambio que se debe dar, la función devuelve un objeto con la clave `status` establecida en "CLOSED" y la clave `change` establecida en `cid`.
  if (totalCid === change) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }
  // Recorre la matriz `currency` de mayor a menor denominación y resta el valor de cada denominación del cambio restante hasta que se da el cambio completo o no hay suficiente dinero en efectivo en el cajón para dar el cambio restante.
  cid = cid.reverse();
  let changeArr = currency.reduce((acc, curr, index) => {
    if (change >= curr[1]) {
      let currentValue = 0.0;
      while (change >= curr[1] && cid[index][1] >= curr[1]) {
        currentValue += curr[1];
        change -= curr[1];
        change = Math.round(change * 100) / 100;
        cid[index][1] -= curr[1];
      }
      acc.push([curr[0], currentValue]);
      return acc;
    } else {
      return acc;
    }
  }, []);
  // Si no se puede dar el cambio exacto o si no hay suficiente dinero en efectivo en el cajón para dar el cambio restante, la función devuelve un objeto con la clave `status` establecida en "INSUFFICIENT_FUNDS".
  if (changeArr.length < 1 || change > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  // Si hay suficiente dinero en efectivo en el cajón para dar el cambio restante, la función devuelve un objeto con la clave `status` establecida en "OPEN" y la clave `change` establecida en una matriz que contiene las denominaciones de monedas y billetes necesarios para dar el cambio.
  result.status = "OPEN";
  result.change = changeArr;
  return result;
}
