import ProfileInfoLayout from "../components/ProfileInfoLayout";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <ProfileInfoLayout />
    <section className="px-7 w-full p-3 relative top-24 sm:top-20">
      {children}
    </section>
    </>
  );
}
