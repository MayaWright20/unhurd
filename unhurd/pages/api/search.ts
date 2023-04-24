import fetch from 'isomorphic-unfetch';

export default async function search(req, res) {
  const { q } = req.query;
  const tokenEndpoint = `https://accounts.spotify.com/api/token`;
  const artistsEndpoint = `https://api.spotify.com/v1/search?type=artist&q=${encodeURIComponent(q)}`;


  const tokenResponse = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  });
  const { access_token } = await tokenResponse.json();



  const artistsResponse = await fetch(artistsEndpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const {artists } = await artistsResponse.json();
  
  res.status(200).json(artists)
}


