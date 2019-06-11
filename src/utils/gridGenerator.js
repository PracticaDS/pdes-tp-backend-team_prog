const generateGrid = (id, gameName, size) => {
  const grid = []
  for (let i = 0; i < size; i++) {
    const row = []
    for (let j = 0; j < size; j++) {
      row.push({
        position: {row: i+1, column: j+1},
        machine: {
          name: `machine-${i}-${j}`,
          price: Math.trunc(Math.random() * 1000),
          machineType: 'Crafter',
          direction: 'Down',
          frequency: 4,
          metadata: {}
        },
        items: {}
      })
    }
    grid.push(row) 
  }
  return {
    _id: id,
    name: gameName,
    factory: {
      dimensions: {n: size, m: size},
      gridValues: grid
    },
    currency: Math.trunc(Math.random() * 20000)
  }
}

export default generateGrid