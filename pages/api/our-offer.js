import response from '@mock/our-offering.json';

export default function handler(req, res) {
  res.status(200).json(response)
}
