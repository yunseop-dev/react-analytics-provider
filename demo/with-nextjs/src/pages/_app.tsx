import {googleAnalyticsHelper, AnalyticsProvider} from '@every-analytics/react-analytics-provider';
import {AppProps} from 'next/app';
import {Layout} from '../layout/Layout';

const persistentValues = {userNo: 123};

function DemoApp({Component, pageProps}: AppProps) {
  return (
    <AnalyticsProvider
      onInit={() => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        googleAnalyticsHelper.initialize(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!, persistentValues);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        console.log('onInit');
      }}
      onPageView={() => {
        // NOTE: Google Analytics(GA4)는 기본적으로 페이지뷰가 적용됩니다 - 따로 추가 필요X
        const path = window.location.pathname + window.location.search;
        console.log('onPageView', path);
      }}
      onEvent={(name, params) => {
        googleAnalyticsHelper.event(name, params);
        console.log('onEvent', name, params);
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnalyticsProvider>
  );
}
export default DemoApp;
