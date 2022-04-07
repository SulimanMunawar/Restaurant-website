import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {

  pageTitle: string = '';

  paginationConfig = {
    lng: 0.0,
    lat:0.0,
    currentPage: 1,
    itemsPerPage: 10,
    nextPage: 1,
    totalItems: 0,
    sparam: ''
  };

  branchReviewsConfig = {
    currentPage: 1,
    itemsPerPage: 10,
  }

  paginationConfigDefaultSetting(pageTitle: string) {
    this.paginationConfig.currentPage = 1;
    this.paginationConfig.itemsPerPage = 10;
    this.paginationConfig.nextPage = 1;
    this.paginationConfig.totalItems = 0;
    this.paginationConfig.sparam = '';
    this.pageTitle = pageTitle;
  }

  paginationConfigExpressSetting(pageTitle: string) {
    this.paginationConfig.currentPage = 1;
    this.paginationConfig.itemsPerPage = 10;
    this.paginationConfig.nextPage = 1;
    this.paginationConfig.totalItems = 0;
    this.paginationConfig.sparam = '';
    this.pageTitle = pageTitle;
  }

}
