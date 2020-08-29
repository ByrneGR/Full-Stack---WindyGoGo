export const createperk = (perk) => {
  return $.ajax({
    url: 'api/perks',
    method: 'POST',
    data: perk
  })
}

export const fetchperks= () => {
  return $.ajax({
    url: `api/perks/`,
    method: 'GET'
  })
}

export const fetchperk = (perkId) => {
  return $.ajax({
    url: `api/perks/${perkId}`,
    method: 'GET'
  })
}
