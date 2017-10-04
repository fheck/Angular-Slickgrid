import { Formatter } from './../models/formatter.interface';
import * as moment_ from 'moment';
const moment: any = (<any>moment_).default || moment_; // patch to fix rollup "moment has no default export" issue, document here https://github.com/rollup/rollup/issues/670

export const dateTimeIsoFormatter: Formatter = (row: number, cell: number, value: any, columnDef: any, dataContext: any) =>
  value ? moment(value).format('YYYY-MM-DD hh:mm:ss') : '';