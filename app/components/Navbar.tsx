import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Navbar() {
  const session = await getServerSession();
  return (
    <>
      <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image src="/YCDirectory.png" alt="Logo" width={144} height={32} />
          </Link>

          <div className="flex items-center gap-5 text-black">
            {session && session.user ? (
              <>
                <Link href="/startup/create">
                  <span>create</span>
                </Link>
                <Link href="/api/auth/signout">
                  <span>Logout</span>
                </Link>
                <Link href={`/user/${session.user.email}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <>
                <Link href="/api/auth/signin">
                  <span>Login</span>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
