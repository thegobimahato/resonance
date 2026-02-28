import { OrganizationList } from "@clerk/nextjs";

const OrgSelectionPage = () => {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
};

export default OrgSelectionPage;
