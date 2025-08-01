import { ShowList } from '../../components/ShowList/ShowList';
import { PageTitle } from './ShowListPage.styles';

function ShowListPage() {

  return (
    <div>
      <PageTitle>TV show list</PageTitle>
      <ShowList />
    </div>
  );
}

export default ShowListPage;
