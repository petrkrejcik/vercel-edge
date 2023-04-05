import edgeAuth from "next-firebase-auth-edge/lib/auth";

export const config = {
  runtime: "edge",
};

// http://localhost:3000/api/edge?email=test@test.com

export default async function handler(req) {
  // const serviceAccount = JSON.parse(process.env.VITE_FIREBASE_SERVICE_ACCOUNT_KEY as string);
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  // const auth = edgeAuth.getFirebaseAuth(serviceAccount, 'AIzaSyBfTjSCoH4xl6UFa31Eyj8h-Tf2ZxwPbmU')
  const customToken = typeof edgeAuth.getFirebaseAuth;
  // const customToken = auth.createCustomToken('xxx')
  return new Response(`token: ${customToken}`);
}
