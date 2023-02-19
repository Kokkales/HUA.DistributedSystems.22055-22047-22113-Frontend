import Layout from '../../layout/Layout';
import Statistics from '../../users/admin/Statistics';

function StatisticsPage(props) {
  return (
    <Layout>
      <Statistics role="admin" />
    </Layout>
  );
}

export default StatisticsPage;
