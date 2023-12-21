import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-2xl">Marketing Page</h1>
      <p className="text-gray-500">This website is under construction. Please contact your construction manager or foreman for further information</p>
      <Link href="/dashboard" className="btn btn-secondary btn-wide mt-8">Go to Dashboard</Link>
    </div>
  );
}
