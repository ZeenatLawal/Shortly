const getShortUrl = async (url) => {
  const request = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  const response = await request.json();
  if (response.ok) {
    return response.result;
  }
  return 'Enter Valid URL';
};

export default getShortUrl;
