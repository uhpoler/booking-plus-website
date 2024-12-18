import Link from "next/link";
import { auth } from "../_lib/auth";
import { redirect } from "next/navigation";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Номери
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account/reservations"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <span>Мій кабінет</span>
            </Link>
          ) : (
            <Link
              href="/account/reservations"
              className="hover:text-accent-400 transition-colors"
            >
              Мій кабінет
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
