import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: [],
})
export class UsersFilterComponent implements OnInit {
  @Output() resultadoBusqueda: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  public filterForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    correoElectronico: [''],
  });

  ltsPersonas = [];

  ngOnInit(): void {
    this.handleSearch(false);
  }

  handleAddUser(): void {
    this.router.navigateByUrl('/detail?0');
  }

  handleSearch(filter: boolean): void {
    if (!filter) {
      this.userService.getPersonas().subscribe(
        (resp) => {
          this.ltsPersonas = resp;
          this.handleAddNew();
          this.userService.setStorage('data', this.ltsPersonas);
          this.resultadoBusqueda.emit(this.ltsPersonas);
        },
        () => {
          Swal.fire('Error', 'Error al cargar la informacion', 'error');
        }
      );
    } else {
      var filters = this.filterForm.value;
      var result = this.ltsPersonas.filter(
        (f) =>
          f.first.toUpperCase().includes(filters.nombre.toUpperCase()) &&
          f.last.toUpperCase().includes(filters.apellido.toUpperCase()) &&
          f.email
            .toUpperCase()
            .includes(filters.correoElectronico.toUpperCase())
      );
      this.resultadoBusqueda.emit(result);
    }
  }

  handleAddNew(): void {
    if (this.userService.existStorage('usersAdd')) {
      var users = this.userService.getStorage('usersAdd');
      users.forEach((element) => {
        this.ltsPersonas.unshift(element);
      });
      localStorage.removeItem('usersAdd');
    }
  }

  handleClear(): void {
    this.filterForm.reset({
      nombre: '',
      apellido: '',
      correoElectronico: '',
    });
    this.handleSearch(true);
  }
}
