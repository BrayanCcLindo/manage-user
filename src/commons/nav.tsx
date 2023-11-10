// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Nav() {
  const router = usePathname();
  const hola = router.split("/");
  const result = hola.splice(1);
  const realNav = result.join("-");

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">
          {realNav}
        </h1>
      </div>
    </nav>
  );
}
