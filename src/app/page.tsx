import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { auth } from "@/lib/auth";

const Home = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 space-y-6"></main>
      <Footer />
    </div>
  );
};

export default Home;
