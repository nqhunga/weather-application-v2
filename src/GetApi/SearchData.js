export default async function checkPlace(name) {
  const response = await fetch(`/check/:${name}`);
  const results = await response.json();
  return results;
}

