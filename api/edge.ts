// import edgeAuth from "next-firebase-auth-edge/lib/auth";
import { getTokenFromGCPServiceAccount } from '@sagi.io/workers-jwt';

export const config = {
  runtime: "edge",
};

// http://localhost:3000/api/edge?email=test@test.com

export default async function handler(req) {
  const serviceAccountJSON = JSON.parse(process.env.VITE_FIREBASE_SERVICE_ACCOUNT_KEY as string);
  const aud = `https://firestore.googleapis.com/google.firestore.v1.Firestore`

  const token = await getTokenFromGCPServiceAccount({ serviceAccountJSON, aud} )

  console.log('token', token)

  // const { searchParams } = new URL(req.url);
  // const token = searchParams.get("token");
  // const auth = edgeAuth.getFirebaseAuth(serviceAccount, 'AIzaSyBfTjSCoH4xl6UFa31Eyj8h-Tf2ZxwPbmU')
  // const customToken = typeof getTokenFromGCPServiceAccount;
  // const customToken = auth.createCustomToken('xxx')
  return new Response(`Done: ${token}`);
}
