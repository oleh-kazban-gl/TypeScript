interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

function handleResponse(response: ArtistsResponse) {
  const data: ArtistsData = { artists: [] };

  if (response.error) {
    return { ...data, success: false, error: response.error }
  } else {
    return { ...response, success: true }
  }
};

// ---
function extend<T, U>(first: T, second: U): T & U {
  return { ...first, ...second };
}

const x = extend({ a: "hello" }, { b: 42 });

const a = x.a;
const b = x.b;