import { Injectable } from '@angular/core';
import { DataService } from '../core/interceptor.service';
import { UtilsService } from '../core/utils.service';
import { SUSTAIN_VIEW } from '../../../app-constants';
@Injectable()
export class CompanyAdminService {

  constructor(private dataService: DataService, private utils: UtilsService) { }
  getCompanyById() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.COMPANY);
  }
  getEngagementRules() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_ENGAGEMENT_RULES);
  }
  getCertificationBodyList() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_CERTIFICATION_BODY_LIST);
  }
  updateEngagement(obj) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.UPDATE_ENGAGEMENT_RULES, obj);
  }
  getCompanyCurrency() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_CURRENCY);
  }
  getCountry() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COUNTRY);
  }
  updateCompany(obj) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.UPDATE_COMPANY, obj);
  }
  addAddress(address) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ADD_ADDRESS, address);
  }
  getAllCompanyAddress(compName) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_ALL_COMPANY_ADDRESS + '?compName=' + compName);
  }
  getCompanyAddressById(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COMPANY_ADDRESS_BY_ID + '?addressId=' + id);
  }
  updateCompanyAddressById(address) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.UPDATE_COMPANY_ADDRESS_BY_ID, address);
  }
  deleteAddress(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.DELETE_COMPANY_ADDRESS_BY_ID + '?id=' + id);
  }
  getAllCompanyContacts(compName) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COMPANY_CONTACTS + '?companyName=' + compName);
  }
  addCompanyContact(contact) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ADD_COMPANY_CONTACTS, contact);
  }
  getBaseLocation() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_BASE_LOCATION);
  }
  getCompanyContactById(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COMPANY_CONTACT_BY_ID + '?id=' + id);
  }
  updateCompanyContactById(contact) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.UPDATE_COMPANY_CONTACT, contact);
  }
  delCompanyContactById(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.DEL_COMPANY_CONTACT + '?id=' + id);
  }
  listRag() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.LIST_RAG);
  }
  addRag(rag) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ADD_RAG, rag);
  }
  editRag(rag) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.EDIT_RAG, rag);
  }
  deleteRag(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.DELETE_RAG + '?id=' + id);
  }
  getRag(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_RAG_BY_ID + '?ragId=' + id);
  }
  getCocSubSecRef() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COC_SUBSEC_REF);
  }
  getAllCompanyUsers() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COMPANY_USERS);
  }
  addUser(user) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ADD_COMPANY_USER, user);
  }
  getRole() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_ROLE);
  }
  getCompUserById(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COMPANY_USER_BY_ID + '?id=' + id);
  }
  updateCompanyUsers(user) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.UPDATE_COMPANY_USER, user);
  }
  // delCompanyUser(id) {
  //   return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.DEL_COMPANY_USER + '?id=' + id);
  // }
  getAllProductionFacilties() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_PRODUCTION_FACILITIES);
  }
  getListCoc() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_ALL_COC);
  }
  getCOCSubSection(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COC_SUBSECTION + '?section=' + id);
  }
  getAllCompanyList() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.COMPANY_LIST);
  }
  deActivate(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.DEACTIVATE_COMPANY_USER + '?id=' + id);
  }
  activate(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ACTIVATE_COMPANY_USER + '?id=' + id);
  }
}
