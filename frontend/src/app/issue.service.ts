import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

//uri = 'http://localhost:4000';    //Local
uri = 'http://localhost:8080';  //Local Prod

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  };

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  };

  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  };

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  };

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  };
}
