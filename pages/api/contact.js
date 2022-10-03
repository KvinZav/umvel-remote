import nc from 'next-connect';
import { postContact } from '@services/contact/postContact';

const handler = nc().post(async (req, res) => {
  const response = await postContact(req.body);

  if (response.status) {
    res.status(409).json({
      error: {
        ...response,
      },
    });
  } else {
    res.status(201).json({});
  }
});

export default handler;
