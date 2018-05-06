function CurrentData(data) {
  const current = data.current;
  const location = data.location;

  return {
    current, location
  }
}

export default async function CurrentPosition(lat, lng) {
  const response = await fetch(`/current/${lat}/${lng}`);
  const results = await response.json();
  return CurrentData(results);
}