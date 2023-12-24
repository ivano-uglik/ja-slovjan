"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const ConfirmEmail = () => {
  const email = useSearchParams().get('email');

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-base-100">
      <div className="max-w-xl px-5 text-center">
        <h2 className="mb-2 text-[42px] font-bold text-base-content">Check your inbox</h2>
        <p className="mb-2 text-lg text-zinc-500">We are glad, that you’re with us ? We’ve sent you a verification link to the email address <span className="font-medium text-indigo-500">{email}</span>.</p>
        <Link href="/auth/sign-in" className="mt-3 w-96 btn btn-secondary text-lg">Open the App →</Link>
      </div>
    </div>
  )
}

export default ConfirmEmail