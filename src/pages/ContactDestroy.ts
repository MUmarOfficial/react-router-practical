import { ActionFunction, redirect } from "react-router";
import { deleteContact } from "../api/contactsApi";

export const destroyContactAction: ActionFunction = async ({
  params
}) => {
  const { contactId } = params;
  await deleteContact(contactId!);
  return redirect('/contacts');
}