import { initializeApp, cert, getApp } from "firebase-admin/app";

export const config = {
  runtime: "edge",
};

// http://localhost:3000/api/edge?email=test@test.com

export default async function handler(req) {
  const type = typeof initializeApp;
  // return initializeApp(
  //   {
  //     credential: cert(),
  //     databaseURL: 'https://que-comemos-hoy-5febf.firebaseio.com'
  //   }
  // );
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  return new Response(`type: ${type}`);
}
