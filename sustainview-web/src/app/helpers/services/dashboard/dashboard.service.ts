import { Injectable } from '@angular/core';
import { DataService } from '../core/interceptor.service';
import { UtilsService } from '../core/utils.service';
import { SUSTAIN_VIEW } from '../../../app-constants';
@Injectable()
export class DashboardService {

  constructor(private dataService: DataService, private utils: UtilsService) { }

  getPlannings() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_PLANNINGS);
  }
  getNonCompliance(year) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_NON_COMPLIANCE + '?year=' + year);
  }
  getOverAllStatus(year) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_OVERALL_STATUS + '?year=' + year);
  }
}
