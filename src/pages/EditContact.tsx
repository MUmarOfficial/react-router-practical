import { Form, useLoaderData, redirect, ActionFunction, useNavigate } from "react-router";
import { Contact } from "../types";
import { getContactById, editContact } from "../api/contactsApi";

type LoaderParams = {
    params: {
        contactId?: string;
    };
};

export const contactLoader = async ({ params }: LoaderParams) => {
    if (!params.contactId) {
        throw new Error("No contact ID provided");
    }
    const contact = await getContactById(params.contactId);
    if (!contact) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return { contact };
};

export const editAction: ActionFunction = async ({ request, params }) => {
    const formData = await request.formData();
    const updates = {
        name: {
            first: formData.get("first") as string,
            last: formData.get("last") as string,
        },
        email: formData.get("email") as string,
        picture: {
            thumbnail: formData.get("url") as string,
            medium: formData.get("url") as string,
            large: formData.get("url") as string,
        }
    };
    if (!params.contactId) {
        throw new Error("No contact ID provided for update");
    }
    await editContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
};

const EditContact = () => {
    const { contact } = useLoaderData() as { contact: Contact };
    const navigate = useNavigate();

    return (
        <Form method="post" id="contact-form" className="flex flex-col gap-4 items-center">
            <h2 className="text-center text-lg">Edit Contact</h2>
            <label htmlFor="url" className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Picture URL</span>
                </div>
                <input
                    type="url"
                    name="url"
                    id="url"
                    defaultValue={contact.picture?.thumbnail}
                    className="input input-bordered w-full max-w-xs"
                />
            </label>
            <label htmlFor="first" className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">First name</span>
                </div>
                <input
                    type="text"
                    name="first"
                    id="first"
                    defaultValue={contact.name.first}
                    className="input input-bordered w-full max-w-xs"
                />
            </label>

            <label htmlFor="last" className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Last name</span>
                </div>
                <input
                    type="text"
                    name="last"
                    id="last"
                    defaultValue={contact.name.last}
                    className="input input-bordered w-full max-w-xs"
                />
            </label>

            <label htmlFor="email" className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={contact.email}
                    className="input input-bordered w-full max-w-xs"
                />
            </label>

            <div className="flex gap-2">
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-outline" onClick={() => navigate(-1)}>
                    Cancel
                </button>
            </div>
        </Form>
    );
};

export default EditContact;