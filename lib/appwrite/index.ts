"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation"
import { Account, Client, Databases, Storage, Avatars } from "node-appwrite";

import { appwriteConfig } from "./config";

export const createSeassionClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  const session = (await cookies()).get("appwrite-session");
  if (!session || !session.value) throw new Error("No session");
  if (!session || !session.value) {
    redirect("/");
  }

  client.setSession(session.value);

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
