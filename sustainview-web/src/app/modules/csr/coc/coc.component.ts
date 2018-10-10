import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../app-constants';
import { CocService, UtilsService, CommunicationService } from '../../../helpers/services';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-coc',
  templateUrl: './coc.component.html',
  styleUrls: ['./coc.component.scss'],
  providers: [CocService]
})
export class CocComponent implements OnInit {

  cocs = [];

  cols: any[];

  brands = [];

  colors = [];

  yearFilter: number;

  yearTimeout: any;
  // tslint:disable-next-line:no-inferrable-types
  viewCoc: boolean = false;
  constructor(private route: ActivatedRoute,
    private router: Router, private cocService: CocService, public utils: UtilsService,
    private communicationService: CommunicationService, ) { }

  ngOnInit() {
    this.cols = [
      { field: 'certificationBody', header: 'Certification' },
      { field: 'cocType', header: 'Type' },
      { field: 'cocId', header: 'CocId' },
      { field: 'codeSection', header: 'Section No' },
      { field: 'codeTitle', header: 'Section Title' },
      { field: 'codeSubSection', header: 'Sub Section No' },
      { field: 'codeText', header: 'Description' },
      { field: 'crossReferenceCodeNum', header: 'Cross Reference' },
      { field: 'lastUpdatedDate', header: 'Last Updated' },
      { field: 'year', header: 'Year' },
      { field: 'response', header: 'Response Type' }
    ];
    this.getAllCoc();
  }
  getAllCoc() {
    this.cocService.getAllCoc().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.cocs = result.data;
        this.cocs.sort(function (a, b) {
          return b.id - a.id;
        });
      }
    });
  }
  routeToUrl(url) {
    switch (url) {
      case 'addCoc': this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.ADD_COC]);
        break;
    }
  }
  editCoc(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.EDIT_COC], { queryParams: { id: this.utils.idEncryption(id) } });
  }

}

