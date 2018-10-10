import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CommunicationService } from '../../../../helpers/services';
import { CaparService } from '../../../../helpers/services';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';


@Component({
  selector: 'app-list-capar',
  templateUrl: './list-capar.component.html',
  styleUrls: ['./list-capar.component.scss'],
  providers: [CaparService, ConfirmationService]
})
export class ListCaparComponent implements OnInit {

  constructor(private route: ActivatedRoute, private caparService: CaparService, public utils: UtilsService,
    private communicationService: CommunicationService, private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router) { }


  cols: any[];
  capars: any[];

  ngOnInit() {
    this.getCaparList();
    this.cols = [
      // { field: 'caparId', header: 'Capar Id' },
      { field: 'payToVendorName', header: 'Vendor' },
      { field: 'factoryName', header: 'Factory Name' },
      { field: 'ragStatus', header: 'RAG Status' },
      { field: 'dateAudited', header: 'Audit Date' },
      { field: 'auditedBy', header: 'Audit Performed By' },
      { field: 'auditedType', header: 'Audit Type' },
      { field: 'findingType', header: 'Type Of Issue' },
      { field: 'currentStatusFiniding', header: 'Status Of Issue' },
      { field: 'agreedCap', header: 'Agreed Corrective Action Plan' },
      { field: 'targetResolutionDate', header: 'Target Resolution Date' }
    ];
  }

  getCaparList() {
    this.caparService.getCaparDetails().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        if (result.status === 312) {
        }
        this.capars = result.data;
      }
    });
  }

  viewCapar(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.VIEW_CAPAR], { queryParams: { id: id } });
  }

}
