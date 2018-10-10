import { Injectable } from '@angular/core';
import { DataService } from '../core/interceptor.service';
import { UtilsService } from '../core/utils.service';
import { SUSTAIN_VIEW } from '../../../app-constants';

@Injectable()
export class AuditorService {

  constructor(private dataService: DataService, private utils: UtilsService) { }

  getAllAuditors() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_ALL_AUDITORS);
  }

  getAllAddress(compName) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_ALL_ADDRESS + '?compName=' + compName);
  }

  getAllContacts(compName) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_ALL_CONTACTS + '?companyName=' + compName);
  }

  getAuditorDetailsById(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_AUDITOR_DETAILS_BY_ID + '?id=' + id);
  }

  updateAuditor(auditor) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.UPDATE_AUDITOR, auditor);
  }

  addAuditor(auditor) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ADD_AUDITOR, auditor);
  }

  getCountryCodes() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COUNTRY_CODE);
  }

  getCompanies() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_COUNTRY_CODE);
  }

  addAddress(address) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ADD_ADDRESS, address);
  }

  getAddressById(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.VIEW_ADDRESS + '?addressId=' + id);
  }

  updateAddressById(address) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.UPDATE_ADDRESS, address);
  }

  getContactById(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_CONTACT_BY_ID + '?id=' + id);
  }

  getBaseLocationsById() {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.GET_BASE_LOCATION_BY_ID);
  }

  updateContactDetailsById(contact) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.UPDATE_CONTACT, contact);
  }

  addContact(contact) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ADD_CONTACT, contact);
  }

  deleteAuditor(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.DELETE_AUDITOR + '?id=' + id);
  }

  activateAuditor(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ACTIVATE_AUDITOR + '?id=' + id);
  }

  deleteAddress(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.DELETE_ADDRESS + '?id=' + id);
  }

  deleteContact(id) {
    return this.dataService.get(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.DELETE_CONTACTS + '?id=' + id);
  }

  savedList(obj) {
    return this.dataService.post(SUSTAIN_VIEW.BASE + SUSTAIN_VIEW.APIS.ADD_SAVED_LIST, obj);
  }

}
