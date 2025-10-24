import Footer from "@/_components/common/footer";
import { Header } from "@/_components/common/header";
import {
  PageContainer,
  PageContent,
  PageHeaderActions,
  PageHeaderContainer,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/_components/ui/page-container";

import { CompanyList } from "./companies/_components/company-list";
import { CreateCompanyButton } from "./companies/_components/create-company-button";

const CompaniesPage = () => {
  return (
    <>
      <Header />
      <main className="flex h-screen flex-col items-center">
        <PageContainer>
          <PageHeaderContainer>
            <PageHeaderContent>
              <PageHeaderTitle>Empresas</PageHeaderTitle>
              <PageHeaderDescription>
                Gerencie as empresas cadastradas.
              </PageHeaderDescription>
            </PageHeaderContent>
            <PageHeaderActions>
              <CreateCompanyButton />
            </PageHeaderActions>
          </PageHeaderContainer>
          <PageContent>
            <CompanyList />
          </PageContent>
        </PageContainer>
      </main>
      <Footer />
    </>
  );
};

export default CompaniesPage;
