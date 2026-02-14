import { getContactById } from "../api/contactsApi";
import { Form, Link, Params, useLoaderData } from "react-router";

export const contactByIdLoader = async ({
  params
}: {
  params: Params
}) => {
  const { contactId } = params;
  const contact = await getContactById(contactId!);
  if (!contact) {
    throw new Error("Contact not found.");
  }
  return {
    contact
  }
}

const ContactDetailPage = () => {
  const { contact } = useLoaderData() as Awaited<ReturnType<typeof contactByIdLoader>>;

  return (
    <div className="card lg:card-side bg-base-200 shadow-xl max-w-4xl mx-auto mt-8">
      <figure className="lg:w-1/3 min-h-[300px] bg-base-300 flex items-center justify-center p-8">
        <div className={`avatar ${contact.picture ? "" : "placeholder"}`}>
          <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-2xl">
            {contact.picture ? (
              <img
                src={contact.picture.large || contact.picture.medium}
                alt={`${contact.name.first} ${contact.name.last}`}
                className="object-cover"
              />
            ) : (
              <div className="bg-neutral text-neutral-content w-full h-full flex items-center justify-center text-6xl">
                <span>
                  {contact.name.first[0]}
                  {contact.name.last[0]}
                </span>
              </div>
            )}
          </div>
        </div>
      </figure>
      <div className="card-body lg:w-2/3">
        <h2 className="card-title text-4xl mb-2 font-bold text-primary">
          {contact.name.first} {contact.name.last}
        </h2>
        <div className="divider my-0"></div>

        <div className="space-y-4 my-4">
          <div>
            <span className="text-sm opacity-60 uppercase tracking-widest font-semibold block mb-1">Email Address</span>
            <p className="text-xl font-medium">{contact.email}</p>
          </div>

          <div>
            <span className="text-sm opacity-60 uppercase tracking-widest font-semibold block mb-1">Account ID</span>
            <code className="badge badge-lg badge-neutral text-xs py-3">{contact.login.uuid}</code>
          </div>
        </div>

        <div className="card-actions justify-end mt-auto gap-3">
          <Link to={`/contacts/${contact.login.uuid}/edit`} className="btn btn-success text-white">
            Edit Contact
          </Link>

          <Form method="POST" action={`/contacts`} onSubmit={(event) => {
            const result = confirm('Confirm duplication of this contact.');
            if (!result) {
              event.preventDefault();
            }
          }}>
            <input type="hidden" name="first" value={contact.name.first} />
            <input type="hidden" name="last" value={contact.name.last} />
            <input type="hidden" name="email" value={contact.email} />
            <input type="hidden" name="picture" value={contact.picture?.thumbnail} />
            <button className="btn btn-primary">
              Duplicate
            </button>
          </Form>

          <Form method="delete" onSubmit={(event) => {
            const result = confirm('Confirm deletion of this contact.');
            if (!result) {
              event.preventDefault();
            }
          }} action={`/contacts/${contact.login.uuid}/destroy`}>
            <button className="btn btn-error text-white">
              Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;
