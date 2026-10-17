import ListaProjetos from '@/components/ListaProjetos';

export const metadata = { title: 'Projetos' };

export default function Page() {
  return (
    <div className="container">
      <h1>Projetos</h1>
      <ListaProjetos />
    </div>
  );
}
