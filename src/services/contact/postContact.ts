import { API_HUBAPI } from '@environments/index';
import { post } from '@fetcher/post';
import { Contact } from '@interfaces/contact/contact.interface';

export const postContact = async (body: Contact) => {
  const response = await post(`${API_HUBAPI}objects/contacts`, body);

  return response;
};
