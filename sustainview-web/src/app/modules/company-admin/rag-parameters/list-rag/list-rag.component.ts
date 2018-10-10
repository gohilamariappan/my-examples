import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SUSTAIN_VIEW } from '../../../../app-constants';
import { UtilsService, CompanyAdminService } from '../../../../helpers/services';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-list-rag',
  templateUrl: './list-rag.component.html',
  styleUrls: ['./list-rag.component.scss'],
  providers: [CompanyAdminService]
})
export class ListRagComponent implements OnInit {
  cols: any[];
  listRag = [];
  constructor(public utils: UtilsService, private companyAdminService: CompanyAdminService, private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.cols = [
      { field: 'cocId', header: 'CoC Sub Section Reference' },
      { field: 'defaultRagWhenNotAuditedYet', header: 'Default RAG when not audited yet' },
      { field: 'defaultRagWhenAuditIsOutdated', header: 'Default RAG when audit is outdated' },
      { field: 'caparFromOutdatedAuditsToBeCosideredForCap', header: 'CAPAR from outdated audits to be considered for cap' },
      { field: 'city', header: 'Should issues with status Resolved be treated as Closed' },
      { field: 'defaultRagWhenThereAreNcs', header: 'Default RAG status when there are Non Compliances (NC)' },
      { field: 'numberOfNcsAllowedAtDefaultRagStatus', header: 'Max. no. of open Non Compliances (NC) allowed at default RAG status' },
      { field: 'defaultRagWhenThereAreAoi', header: 'Default RAG status when there are areas of interest (AOI)' },
      { field: 'numberOfAoiAllowedAtDefaultRagStatus', header: 'Max no. of open areas of interest (AOI) allowed at default status' },
    ];
    this.getAllRag();
  }
  getAllRag() {
    this.companyAdminService.listRag().subscribe(result => {
      if (this.utils.isResponseSuccess(result)) {
        this.listRag = result.data.ragparams;
      }
    });
  }
  routeToUrl() {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.ADD_RAG]);
  }
  editRag(id) {
    this.router.navigate([SUSTAIN_VIEW.ROUTERLINKS.EDIT_RAG], { queryParams: { id: this.utils.idEncryption(id) } });
  }
}
