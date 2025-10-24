import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Footer from "@/_components/common/footer";
import { Header } from "@/_components/common/header";
import { auth } from "@/_lib/auth";

import { CompanyForm } from "./companies/_components/company-form";
import { CompanyList } from "./companies/_components/company-list";

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
      <main className="flex-1 space-y-6">
        <div className="container mx-auto py-10">
          <h1 className="mb-6 text-3xl font-bold">Gestão de Empresas</h1>

          <div className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              Cadastrar Nova Empresa
            </h2>
            <CompanyForm />
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Empresas Cadastradas
            </h2>
            <CompanyList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
