import response from '@mock/about-us.json';

export default function handler(req, res) {
  res.status(200).json(response);
}
