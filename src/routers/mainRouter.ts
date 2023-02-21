import { routerLogin } from '@view/Auth/Login/router';
import { routerViewProfile } from '@view/Auth/Profiles/router';
import { routerAdd } from '@view/Home/AddNewDevice/router';
import { routerHistory } from '@view/Home/HistoryProfit/router';
import { routerHistoryProfitDetail } from '@view/Home/HistoryProfitDetail/router';
import { routerInfo } from '@view/Home/InfoDevice/router';
import { routerProfit } from '@view/Home/Profit/router';
import { routerProfitDetail } from '@view/Home/ProfitDetail/router';
import { routerReportDetail } from '@view/Home/ReportDetail/router';
import { routerDetailR } from '@view/Home/ReportProfit/detail/router';
import { routerDetailHistoryR } from '@view/Home/ReportProfit/history/router';
import { routerReportProfit } from '@view/Home/ReportProfit/router';
import { routerHome } from '@view/Home/router';
import { routerPageError } from '@view/PageError/router';

import { IRouter } from './interface';

export const privatePage: IRouter[] = [routerViewProfile, routerPageError];

export const publicPage: IRouter[] = [routerLogin, routerPageError, routerHome, routerInfo, routerAdd, routerProfit, routerProfitDetail, routerHistory, routerHistoryProfitDetail, routerReportProfit, routerReportDetail, routerDetailR, routerDetailHistoryR];
