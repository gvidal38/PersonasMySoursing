import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { DataUser } from '../../interface/data-user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent {
  ELEMENT_DATA: DataUser[] = [];
  displayedColumns: string[] = [
    'first',
    'last',
    'email',
    'balance',
    'address',
    'created',
  ];

  dataSource: MatTableDataSource<DataUser>;
  resultsLength = 0;
  dataSourceTable: any = [];

  constructor(private userService: UserService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  handleSearch(data): void {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }
}
