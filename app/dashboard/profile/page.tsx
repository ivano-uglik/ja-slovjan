/* "use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className="flex justify-center">
        <div className="min-w-min flex justify-center items-center gap-32 p-8 border border-accent rounded-[2rem]">
          <div>
            <h2 className="text-5xl font-bold">{user.name}</h2>
            <p>{user.email}</p>
          </div>
          <img
            src={user.picture ?? ""}
            alt={user.name ?? "User"}
            className="w-32 h-32 rounded-xl"
          />
        </div>
      </div>
    )
  );
}
 */