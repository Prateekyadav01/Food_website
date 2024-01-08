


export function filter(searchBox, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchBox)
    );
    console.log(filterData);
    return filterData;
  }
  