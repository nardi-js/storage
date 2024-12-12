"use server";

import { cookies } from "next/headers";
import { Account, Client, Databases, Storage, Avatars } from "node-appwrite";

import { appwriteConfig } from "./config";

export const createSeassionClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  const seassion = (await cookies()).get("appwrite-session");
  if (!seassion || !seassion.value) throw new Error("No session");

  client.setSession(sessionStorage.value);

  return {
    get account() {
      return new Account(client);
    },

    get databases() {
      return new Databases(client);
    },
  };
};

export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey);

  return {
    get account() {
      return new Account(client);
    },

    get databases() {
      return new Databases(client);
    },

    get storage() {
      return new Storage(client);
    },

    get avatars() {
      return new Avatars(client);
    },
  };
};
