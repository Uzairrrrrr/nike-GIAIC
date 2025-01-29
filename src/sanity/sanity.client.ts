import { createClient, type ClientConfig } from "next-sanity";

const SanityClient: ClientConfig = {
    projectId: "uam0rm6s",
    dataset: "production",
    apiVersion: "2024-01-18",
    useCdn: true
}

export default createClient(SanityClient);