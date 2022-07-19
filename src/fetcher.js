const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    return { error: true };
  }
  return response.json();
};

export default fetcher;