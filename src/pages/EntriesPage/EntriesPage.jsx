import EntriesForm from "../../components/EntriesForm";

export default function EntriesPage({ user }) {
  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <EntriesForm user={user} />
    </section>
  );
}
