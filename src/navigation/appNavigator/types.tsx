import {HOME_NAV_ROUTE, ONBOARD_ROUTE, RANDOM_FACT_ROUTE} from '../routes';

export type AppNavigatorStackParamsList = {
  [ONBOARD_ROUTE]: {};
  [HOME_NAV_ROUTE]: {isFromRandomFact: boolean};
  [RANDOM_FACT_ROUTE]: {};
};
