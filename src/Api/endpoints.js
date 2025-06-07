const BASE_URL = "https://app.wewantwaste.co.uk/api";

const endpoints = {
  getSkipsByLocation: (postcode, area) =>
    `${BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`,
};

export default endpoints;
