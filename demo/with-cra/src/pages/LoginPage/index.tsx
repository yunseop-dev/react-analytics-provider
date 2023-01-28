import {AnalyticsPageView} from '@yunseop-dev/react-analytics-provider';

const LoginPage = () => {
  return (
    <AnalyticsPageView params={{login: false}}>
      <h2>Login</h2>
    </AnalyticsPageView>
  );
};

export default LoginPage;
