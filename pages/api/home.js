import response from '@mock/home-page.json';

export default function handler(req, res) {
  res.status(200).json(response)
}
