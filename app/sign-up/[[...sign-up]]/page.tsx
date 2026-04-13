import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 pt-[120px]">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" forceRedirectUrl="/account" />
    </div>
  );
}
