import { ShowList } from '../components/ShowList';

function ShowListPage() {

  return (
    <div className="grid grid-cols-2 gap-4">
      <h1>TV show list</h1>
      <ShowList />
    </div>
  );
}

export default ShowListPage;
